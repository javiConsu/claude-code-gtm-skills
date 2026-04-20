---
name: persona-list
description: This skill should be used when the user asks to "list personas", "show personas", "what personas are configured", or triggers /persona-list. Displays all configured WoterClip personas.
version: 0.1.0
---

# Persona List

Displays all configured WoterClip personas with their settings and file status.

## Prerequisites

`.woterclip/config.yaml` must exist. If missing, stop and tell the user to run `/woterclip-init` first.

## Procedure

### Step 1: Load Configuration

Read `.woterclip/config.yaml`. Extract the `personas` map.

### Step 2: Collect Persona Details

For each configured persona:
1. Read `.woterclip/personas/<label>/config.yaml` for runtime settings
2. Check existence of `SOUL.md`, `TOOLS.md`, and `config.yaml`

### Step 3: Display Formatted Output

```
WoterClip Personas
══════════════════

Name                Label        Model    Turns  Escalates  Tools
──────────────────  ──────────   ───────  ─────  ─────────  ─────────────────────
Orchestrator        (default)    haiku       50  ceo        mcp__claude_ai_Linear
CEO                 ceo          sonnet     100  board      mcp__claude_ai_Linear
Backend Engineer    backend      opus       300  ceo        mcp__claude_ai_Linear, mcp__neon
Frontend Engineer   frontend     sonnet     200  ceo        mcp__claude_ai_Linear

Files:
  orchestrator/  ✓ SOUL.md  ✓ TOOLS.md  ✓ config.yaml
  ceo/           ✓ SOUL.md  ✓ TOOLS.md  ✓ config.yaml
  backend/       ✓ SOUL.md  ✓ TOOLS.md  ✓ config.yaml
  frontend/      ✓ SOUL.md  ✗ TOOLS.md  ✓ config.yaml  ← missing file
```

Mark missing files with `✗` to highlight configuration gaps.

### Step 4: Suggestions

If any persona files are missing, recommend addressing them.

Suggest `/persona-create` to add new personas.
