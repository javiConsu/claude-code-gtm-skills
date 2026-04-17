---
name: woterclip-status
description: This skill should be used when the user asks to "show WoterClip status", "what's in the queue", "check the heartbeat status", or triggers /woterclip-status. Displays current operational state of WoterClip.
version: 0.1.0
---

# WoterClip Status

Displays the current operational state of WoterClip: schedule, last heartbeat, issue queue, and blocked items.

## Arguments

- `--history`: Show last 10 heartbeat log entries instead of current status

## Procedure

### Step 1: Check Configuration

Read `.woterclip/config.yaml`. If missing, stop and tell the user to run `/woterclip-init` first.

### Step 2: Check Schedule

Confirm whether a recurring heartbeat is scheduled to run. Report schedule status (active / not configured).

### Step 3: Read Last Heartbeat

Read the last entry from `.woterclip/heartbeat-log.jsonl`.

Display:
- Heartbeat number (`#N`)
- Timestamp and elapsed time since last run
- Persona and issue handled
- Outcome status

If the log file doesn't exist, report "No heartbeats run yet."

### Step 4: Fetch Issue Status

Use Linear MCP to fetch all issues assigned to me with state Todo or In Progress.

Categorize into three groups:

**Recent changes** (since last heartbeat timestamp):
- Completed issues
- Issues moved to In Progress
- Newly blocked issues

**Upcoming queue** (eligible for next heartbeat, sorted by priority):
- Filter by persona labels and priority
- Show issue ID, persona, priority, and title

**Blocked items** (require Board attention):
- Issues with `agent-blocked` label
- Include responsible Board member and summary of blocking factor

### Step 5: Display Output

```
WoterClip Status
════════════════

Schedule:       Every 30 min (next: 14:05 UTC)
Last heartbeat: #12 · 13:35 UTC (4 min ago) · backend · ISSUE-42 · completed

Recent changes (since #12):
  ✓ ISSUE-38  frontend    Completed: Add dark mode toggle
  ● ISSUE-44  backend     In Progress: Migrate users table

Upcoming queue (3 issues):
  ISSUE-44  backend    High    Migrate users table
  ISSUE-51  frontend   Medium  Fix mobile nav overflow
  ISSUE-55  backend    Low     Add request logging

Blocked (1 issue — needs Board attention):
  ISSUE-39  ceo         @Alice — needs product decision on rate limits
```

## History Mode (`--history`)

Read `.woterclip/heartbeat-log.jsonl` and display the last 10 entries:

```
Heartbeat History (last 10)
═══════════════════════════

#12  2026-04-17 13:35 UTC  4m 12s  backend    ISSUE-42  completed
#11  2026-04-17 13:02 UTC  2m 08s  frontend   ISSUE-51  in_progress
#10  2026-04-17 12:31 UTC  6m 44s  backend    ISSUE-44  in_progress
...
```
