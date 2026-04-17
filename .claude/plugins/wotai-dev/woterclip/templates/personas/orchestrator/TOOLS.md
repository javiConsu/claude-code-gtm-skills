# Tools — Orchestrator Persona

## Required

- **Linear MCP** (`mcp__claude_ai_Linear__*`): Issue queries, label management, sub-issue creation, comments.

## Usage Patterns

### Triage an issue

1. `list_issues` — retrieve assigned issues (inbox scan)
2. `get_issue` — examine issue details, labels, parent
3. `save_issue` — apply persona label, modify status
4. `save_comment` — document triage decision

### Decompose into sub-issues

1. `save_issue` with `parentId` — create child issues with persona labels
2. `save_comment` on parent — post decomposition summary

### Escalate to Board

1. `save_comment` — explain blocker, @-mention Board user
2. `save_issue` — apply `agent-blocked` label

## Not Used

The Orchestrator does not use repo tools (Read, Write, Edit, Bash, Grep, Glob). It only reads `.woterclip/config.yaml` to understand available personas.
