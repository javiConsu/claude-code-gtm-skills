---
name: gtm-orchestrator
description: Use when asked to run a full GTM pipeline — from signal detection through to ready-to-send sequences. Chains all skills automatically.
---

# GTM Orchestrator

Run a full GTM pipeline end-to-end.
Signal detection → ICP validation → copy generation → campaign ready.

No manual hand-offs. No re-entering context between steps. One command.

## When to use

- "Run the full pipeline for [signal type]"
- "Find leads and generate sequences for [target]"
- "Run GTM pipeline — [champion tracker / funding radar / hiring intent / leadership change / community pain / competitor signals]"

## What you need

- ICP definition at `00-icp-definition/ICP.md` (must be filled in)
- Apify API key configured
- Signal type to run (or "all" for full scan)
- Output preference: CSV / markdown / paste-ready sequences

## Pipeline

```
Step 1: Signal Detection
  Run the relevant signal skill(s) → raw lead list with signal context

Step 2: ICP Validation
  Run icp-validation on each company from Step 1 → scored + tiered list

Step 3: Deduplication + State Check
  Check .gtm-state.json — remove companies already processed this week
  Update state file with today's run

Step 4: Copy Generation
  For each Tier 1 company, run copy-generation with:
  - Signal type (champion move / funding / hiring / leadership / community / competitor)
  - ICP context from 00-icp-definition/ICP.md
  - Company-specific data from Step 1

Step 5: Output
  Return ready-to-use sequences + campaign brief
  Save to .gtm-output/[date]-[signal-type].md
```

## Process

### Pre-flight check
1. Read `00-icp-definition/ICP.md` — if empty or missing key fields, stop and ask user to complete it
2. Check `.gtm-state.json` — note companies processed in last 7 days to avoid duplicates
3. Confirm signal type(s) to run

### Step 1 — Signal Detection
Run the appropriate skill based on user request:
- Champion moves → `champion-tracker`
- Funding → `funding-radar`
- Hiring → `hiring-intent`
- Leadership → `leadership-change`
- Community pain → `community-pain`
- Competitor → `competitor-signals`
- "All signals" → run all 6 in parallel, deduplicate by company

### Step 2 — ICP Validation
For each company returned with STRONG or WEAK signal:
- Run `icp-validation` using the ICP definition from `00-icp-definition/ICP.md`
- Keep Tier 1 (9-12/12) for immediate sequences
- Keep Tier 2 (5-8/12) for lower-touch follow-up
- Remove anything below 5/12

### Step 3 — State Management
Read `.gtm-state.json`:
```json
{
  "processed": [
    {"company": "Acme Corp", "date": "2026-04-17", "signal": "funding", "tier": 1}
  ]
}
```
Remove companies processed in last 7 days (avoid duplicate outreach).
After pipeline completes, append new companies to state file.

### Step 4 — Copy Generation
For each Tier 1 company, call `copy-generation` with:
- Signal type + specific signal evidence (from Step 1)
- ICP context
- Company name + contact name/title

For Tier 2 companies: generate a shorter single-touch message only.

### Step 5 — Output
Save to `.gtm-output/[YYYY-MM-DD]-[signal-type].md`

## Output format

```
GTM Pipeline Run: [date]
Signal: [type] | Companies scanned: [N] | Tier 1: [n] | Tier 2: [n]

═══════════════════════════════════════
TIER 1 — READY TO SEND ([n] companies)
═══════════════════════════════════════

[Company Name] | ICP Score: [X/12] | Signal: [description]
Contact: [Name, Title] | [LinkedIn / email if found]

SEQUENCE:
Day 1 — Email:
Subject: [subject line]
[body]

Day 3 — LinkedIn:
[message]

Day 7 — Email:
[body]

---

[Next company...]

═══════════════════════════════════════
TIER 2 — LOWER PRIORITY ([n] companies)
═══════════════════════════════════════

[Company] | [Signal] | Single touch:
[Short message]

---

═══════════════════════════════════════
PIPELINE SUMMARY
═══════════════════════════════════════
Signals found: [N]
After ICP validation: Tier 1: [n] | Tier 2: [n] | Removed: [n]
Sequences generated: [n]
State file updated: YES
Output saved: .gtm-output/[filename]

Recommended next step: [copy sequences to campaign tool / run campaign-architecture skill]
```

## State file location

`.gtm-state.json` lives in the project root. Create it on first run if it doesn't exist.

## Notes

- Always run pre-flight ICP check — a vague ICP produces garbage leads
- "All signals" mode = run all 6 skills; deduplication happens at Step 2
- Never send sequences without human review — orchestrator generates, human approves
- If Apify quota is low, prioritize: champion-tracker > hiring-intent > funding-radar
- Output files accumulate over time → use `reply-analysis` skill weekly to close the loop
