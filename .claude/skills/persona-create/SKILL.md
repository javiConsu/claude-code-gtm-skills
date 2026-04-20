---
name: persona-create
description: This skill should be used when the user asks to "create a persona", "add a new persona", "create a new WoterClip persona", or triggers /persona-create. Guides interactive creation of a new WoterClip persona.
version: 0.1.0
---

# Persona Create

Interactively creates a new WoterClip persona with SOUL.md, TOOLS.md, and config.yaml files.

## Prerequisites

`.woterclip/config.yaml` must exist. If missing, stop and tell the user to run `/woterclip-init` first.

## Procedure

### Step 1: Gather Information

Ask the user for:

1. **Persona name** — e.g., "QA Engineer", "Data Analyst"
2. **Linear label** — e.g., `qa`, `data` (must be unique, lowercase, no spaces)
3. **Role type** — `engineer`, `orchestrator`, `analyst`, or custom
4. **Escalates to** — which persona handles escalations (default: `ceo`)
5. **Model preference** — `opus` (complex), `sonnet` (moderate), or `haiku` (mechanical)
6. **Required tools** — which MCP tool prefixes are needed (e.g., `mcp__claude_ai_Linear`, `mcp__neon`)

### Step 2: Generate SOUL.md

Create `.woterclip/personas/<label>/SOUL.md` with sections:
- Identity and ownership statement
- Technical posture / working principles
- Voice and tone
- Working style
- Boundaries (what this persona does NOT do)
- Quality checklist

### Step 3: Create TOOLS.md

Create `.woterclip/personas/<label>/TOOLS.md` with sections:
- Required tools (with MCP prefix patterns)
- Common usage patterns for this role
- Optional tools (with notes on when to add them)

### Step 4: Generate config.yaml

Create `.woterclip/personas/<label>/config.yaml`:

```yaml
name: <Name>
role: <role>
label: <label>
escalates_to: <escalates_to>

required_tools:
  - mcp__claude_ai_Linear
  # additional tools listed here

runtime:
  model: <model>
  thinking_effort: <high for opus, medium for sonnet, low for haiku>
  max_turns: <300 for opus, 200 for sonnet, 100 for haiku>
  enable_chrome: false
  timeout: 0
  extra_args: []
```

### Step 5: Create File Structure

Write all three files to `.woterclip/personas/<label>/`.

### Step 6: Update Registry

Add the persona to `.woterclip/config.yaml` under `personas`:

```yaml
personas:
  <label>:
    name: <Name>
    path: personas/<label>
    label: <label>
```

### Step 7: Create Linear Label

Check if the label already exists in Linear. If not, create it under the WoterClip label group using `mcp__claude_ai_Linear`.

### Step 8: Confirmation

Display summary:

```
Persona created: <Name> (<label>)
  Model:       <model>
  Escalates:   <escalates_to>

Files created:
  ✓ .woterclip/personas/<label>/SOUL.md
  ✓ .woterclip/personas/<label>/TOOLS.md
  ✓ .woterclip/personas/<label>/config.yaml

Linear label:
  ✓ WoterClip/<label>

Review SOUL.md and customize for your project's specific context.
```
