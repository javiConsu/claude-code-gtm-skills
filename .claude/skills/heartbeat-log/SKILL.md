---
name: heartbeat-log
description: This skill should be used when the user asks to "show heartbeat log", "analyze heartbeat history", "how many heartbeats", "show activity", or wants to review WoterClip activity from the log file.
version: 0.1.0
---

# Heartbeat Log

Parses and analyzes `.woterclip/heartbeat-log.jsonl` to display WoterClip activity summaries and analytics.

## Log Format

Each line is a JSON entry:
```json
{"n": 12, "ts": "2026-04-17T13:35:00Z", "issue": "ISSUE-42", "persona": "backend", "duration_s": 252, "status": "completed", "actions": ["commit abc123", "commit def456"]}
```

Fields: heartbeat number, ISO timestamp, issue ID, persona label, duration in seconds, status (`completed`/`in_progress`/`blocked`), and list of actions taken.

## Usage

Call with optional filters:
- `--persona <label>` — filter by persona
- `--issue <id>` — filter by issue ID
- `--since <date>` — filter by date (ISO format or relative like "7d")
- `--status <status>` — filter by outcome status
- `--analytics` — show aggregate statistics instead of list

## Procedure

### Step 1: Read Log File

Read `.woterclip/heartbeat-log.jsonl`. If the file doesn't exist, report "No heartbeat history found."

Parse each line as JSON. Skip malformed entries gracefully (log a warning).

### Step 2: Apply Filters

Apply any requested filters to the parsed entries.

### Step 3: Display Results

**Default (recent list):**

```
Recent Heartbeats
═════════════════

#  Timestamp (UTC)       Duration  Persona   Issue      Status
── ────────────────────  ────────  ────────  ─────────  ───────────
12 2026-04-17 13:35      4m 12s    backend   ISSUE-42   completed
11 2026-04-17 13:02      2m 08s    frontend  ISSUE-51   in_progress
10 2026-04-17 12:31      6m 44s    backend   ISSUE-44   in_progress
```

Show last 20 entries by default.

**Analytics mode (`--analytics`):**

```
WoterClip Analytics
════════════════════

Total heartbeats:    42
Date range:          2026-04-01 → 2026-04-17

By persona:
  backend     18  (43%)  avg 5m 12s  completion rate: 78%
  frontend    12  (29%)  avg 3m 44s  completion rate: 83%
  ceo          8  (19%)  avg 2m 01s  completion rate: 100%
  orchestrator 4   (9%)  avg 0m 48s  completion rate: 100%

Most active issues:
  ISSUE-42  backend    8 heartbeats  In Progress
  ISSUE-38  frontend   5 heartbeats  Done

Blocked issues (currently):
  ISSUE-39  ceo  blocked since 2026-04-15
```

## Notes

- The log file is append-only. It is safe to truncate if it grows too large.
- Heartbeat numbers are informational — they reset if comments are deleted from Linear.
