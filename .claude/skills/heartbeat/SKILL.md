---
name: heartbeat
description: This skill should be used when running a WoterClip heartbeat cycle — picking up assigned Linear issues, resolving personas, doing work, and reporting back. Triggered by /heartbeat or when the user asks to "run a heartbeat" or "process the queue".
version: 0.1.0
---

# WoterClip Heartbeat

Automated workflow that picks up assigned Linear issues, resolves personas, does work, and reports back. Executes 11 sequential steps.

## Prerequisites

- `.woterclip/config.yaml` must exist (run `/woterclip-init` first)
- Linear MCP must be available

## Arguments

Parsed from caller (e.g., `/heartbeat --dry-run --persona backend`):
- `--dry-run`: Preview mode — step 3 reports what would be picked without doing work
- `--persona <name>`: Restrict to issues with this persona label only

## Heartbeat Procedure

### Step 1: Load Configuration

Read `.woterclip/config.yaml`. Validate required fields. If missing, stop and tell the user to run `/woterclip-init`.

Create lockfile at `.woterclip/.heartbeat-lock` with current timestamp. If lockfile already exists and is not stale (< `stale_lock_hours`), stop — another heartbeat is running. If stale, remove it and continue.

### Step 2: Check Quiet Hours

Read `heartbeat.quiet_hours` from config. If currently in quiet hours:
- If `triage_only` is set, continue in triage-only mode (Orchestrator only, no worker execution)
- Otherwise, stop gracefully

### Step 3: Fetch Assigned Issues

Use `mcp__claude_ai_Linear__list_issues` to fetch all issues assigned to me with state Todo or In Progress.

If `--dry-run`, report what would be picked (highest-priority eligible issue) and exit cleanly.

### Step 4: Select Issue

Filter and prioritize:

1. Skip issues in states other than Todo or In Progress
2. Skip issues with `agent-blocked` label unless new human comments exist since the last agent comment
3. If `--persona <name>` flag is set, only match issues with that persona label
4. Sort: **Status first** (In Progress > Todo), then **Priority** (Urgent > High > Medium > Low > None)

Select the first eligible issue. If none, log "No eligible issues" and exit cleanly.

### Step 5: Resolve Persona

Read issue labels. Match against `personas` map in config. If no persona label matches, use the default persona (Orchestrator).

Load persona files from `.woterclip/personas/<label>/`:
- `SOUL.md` — identity and decision framework
- `TOOLS.md` — available integrations
- `config.yaml` — runtime settings (model, max_turns, etc.)

### Step 6: Validate Tools

Check that all tools listed in `required_tools` (from persona `config.yaml`) are available. If any are missing, skip this issue, post a comment listing missing tools, add `agent-blocked` label, and move to step 11 (check next issue).

### Step 7: Lock Issue

Add `agent-working` label to the issue using read-modify-write:
1. `get_issue` — read current labels array
2. Append `agent-working` 
3. `save_issue` — save full label set

Read heartbeat counter: parse the last WoterClip comment on the issue for `Heartbeat #N`. Increment N. If no previous comment, start at 1.

Record start timestamp.

### Step 8: Load Context

Read issue title, description, and all comments. If there is a parent issue, read it too. Check sibling sub-issues for context.

Note any decisions, blockers, or prior work from previous heartbeat comments.

### Step 9: Execute Work

Execute persona-specific work according to the loaded SOUL.md and TOOLS.md. Respect `max_turns` budget from persona config.

**Orchestrator:** Triage unlabeled issues — apply persona labels, decompose complex work, escalate ambiguities. One-line triage comments only.

**CEO:** Make scope and prioritization decisions, review decompositions, coordinate cross-cutting work, communicate with Board.

**Worker personas (backend, frontend, etc.):** Implement the issue. Read code, make changes, run tests, commit.

If work exceeds scope for one heartbeat, create sub-issues for remaining work and continue with what's scoped.

### Step 10: Post Heartbeat Comment

Post a structured comment via `mcp__claude_ai_Linear__save_comment` following the format in `references/comment-format.md`:

```
## Heartbeat #N — YYYY-MM-DD HH:MM UTC (duration)

**Status:** In Progress | Completed | Blocked

### What was done
- [commit-sha](link) feat(api): commit message

### What's next
- Next steps

### Blockers
None

---
*WoterClip · persona-name · [ISSUE-XX](link) · from [Heartbeat #N-1](link)*
```

If blocked, use the blocked template and @-mention the Board user.

Append entry to `.woterclip/heartbeat-log.jsonl`:
```json
{"n": N, "ts": "ISO timestamp", "issue": "ISSUE-XX", "persona": "backend", "duration_s": 42, "status": "completed", "actions": ["commit abc123"]}
```

### Step 11: Update Labels and Status

Based on outcome:

| Outcome | Linear State | Labels |
|---------|-------------|--------|
| Completed | → Done (or In Review if PR opened) | Remove `agent-working` |
| In Progress | Stay In Progress | Keep `agent-working` |
| Blocked | Stay In Progress | Remove `agent-working`, add `agent-blocked` |
| Triage done | Stay Todo | Add persona label, remove `agent-working` |

Check if capacity remains (issues left in inbox and `max_issues_per_cycle` not reached). If so, loop back to step 3 for the next issue. Otherwise exit cleanly.

**On all exit paths:** Delete `.woterclip/.heartbeat-lock`.
