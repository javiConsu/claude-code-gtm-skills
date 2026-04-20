---
name: woterclip-init
description: This skill should be used when the user asks to "initialize WoterClip", "set up WoterClip", "run woterclip-init", or triggers /woterclip-init. Scaffolds a repo with WoterClip config, persona directories, and Linear labels.
version: 0.1.0
---

# WoterClip Init

Scaffolds a repository with WoterClip config, persona directories, and Linear labels.

## Prerequisites

- Linear MCP must be available (`mcp__claude_ai_Linear__*`)
- If Linear MCP is not available, stop and tell the user to connect Linear MCP first

## Procedure

### Step 1: Gather Linear Context

Use Linear MCP to:
- List available teams (`list_teams`)
- Get the current user (`get_viewer`)

Ask the user to confirm which team and user to configure WoterClip for.

### Step 2: Choose Persona Preset

Ask the user which persona preset they want:

| Preset | Included personas |
|--------|------------------|
| `engineering` (default) | orchestrator, ceo, backend, frontend |
| `full` | orchestrator, ceo, backend, frontend, infra, qa |
| `minimal` | orchestrator, ceo |
| `custom` | User specifies which personas to include |

### Step 3: Create Linear Labels

Using Linear MCP, create the following labels under the parent group (default: `WoterClip`):

**State labels:**
- `agent-working` (color: blue)
- `agent-blocked` (color: red)

**Persona labels** (based on selected preset):
- `backend` (color: purple)
- `frontend` (color: green)
- `ceo` (color: orange)
- Any additional personas in the selected preset

Skip labels that already exist.

### Step 4: Scaffold Config and Personas

Create the `.woterclip/` directory structure:

```
.woterclip/
├── config.yaml          ← from plugin templates/config.yaml (fill placeholders)
└── personas/
    ├── orchestrator/
    │   ├── SOUL.md      ← from plugin templates/personas/orchestrator/SOUL.md
    │   ├── TOOLS.md     ← from plugin templates/personas/orchestrator/TOOLS.md
    │   └── config.yaml  ← from plugin templates/personas/orchestrator/config.yaml
    ├── ceo/
    │   ├── SOUL.md
    │   ├── TOOLS.md
    │   └── config.yaml
    └── <selected personas>/
        ├── SOUL.md
        ├── TOOLS.md
        └── config.yaml
```

Plugin templates are at `.claude/plugins/wotai-dev/woterclip/templates/`.

Fill placeholders in `config.yaml`:
- `{{USER_NAME}}` → confirmed Linear user name
- `{{TEAM}}` → confirmed Linear team name

### Step 5: Offer Schedule Setup

Ask the user: "Would you like to set up a recurring heartbeat schedule?"

If yes, help configure a schedule using the available scheduling mechanism. If no, skip.

### Step 6: Print Summary

Display a summary of everything created:

```
WoterClip initialized.

Config:   .woterclip/config.yaml
Personas: orchestrator, ceo, backend, frontend

Linear labels created:
  ✓ WoterClip/agent-working
  ✓ WoterClip/agent-blocked
  ✓ WoterClip/backend
  ✓ WoterClip/frontend
  ✓ WoterClip/ceo

Next steps:
  1. Review .woterclip/config.yaml and customize as needed
  2. Edit persona SOUL.md files to match your project context
  3. Run /heartbeat to start the first cycle
```

## Error Handling

- **Missing Linear MCP:** Stop, tell user to connect Linear MCP first
- **No teams found:** Ask user to check Linear workspace access
- **Label creation failure:** Log the error, continue with remaining labels, note failures in summary
- **Config already exists:** Ask whether to overwrite, merge, or cancel before proceeding
- **Missing templates:** Templates expected at `.claude/plugins/wotai-dev/woterclip/templates/`
