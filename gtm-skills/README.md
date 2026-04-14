# Claude Code GTM Skills

5 reusable skills for B2B GTM operators running outbound with Claude Code.

Built by [Growth.Band](https://growth.band) and shared at the **Claude Code for GTM** webinar (April 22, 2026).

---

## What these are

Claude Code skills are markdown files that give Claude a reusable capability with consistent inputs and outputs. You install them once. Then instead of writing a new prompt every time, you call the skill by name.

Think of it like a function written in plain English. You don't write it every time — you call it.

---

## The 5 skills

| Skill | What it does | Trigger phrase |
|-------|-------------|----------------|
| `icp-validation` | Score a company against your ICP, return a verdict | "Validate this company against our ICP" |
| `signal-detection` | Scan a list for hiring/growth signals, return scored tiers | "Find hiring signals for this Clay export" |
| `copy-generation` | Write a multi-step sequence tied to a specific signal and persona | "Write the sequence for this hypothesis" |
| `campaign-architecture` | Set up a campaign in PlusVibe/Instantly via MCP | "Set up the SDR-hiring hypothesis in PlusVibe" |
| `reply-analysis` | Read inbox via MCP, categorize replies, surface patterns | "What came in this week?" |

---

## Prerequisites

1. **Claude Code CLI** installed — [docs.anthropic.com/claude-code](https://docs.anthropic.com/en/docs/claude-code/overview)
2. **MCP connections** for the tools you use:
   - LinkedIn MCP (for signal-detection and reply-analysis)
   - Clay MCP (for signal-detection)
   - PlusVibe or Instantly MCP (for campaign-architecture)
   - Email MCP (for reply-analysis)

You don't need all MCPs to start. Install one skill + one MCP and test it before adding more.

---

## How to install

1. Copy the skill folder (e.g., `01-icp-validation`) to your Claude Code skills directory:

```bash
cp -r 01-icp-validation ~/.claude/skills/icp-validation
```

2. Restart Claude Code or reload the session.

3. Call the skill:
```
"Validate Acme Corp against our ICP"
```

To install all 5 at once:

```bash
for dir in */; do
  skill_name=$(basename "$dir")
  cp -r "$dir" ~/.claude/skills/"$skill_name"
done
```

---

## Adapting the skills

Each skill has a defined output format and process. You can edit the `SKILL.md` file to:

- Add your specific ICP criteria to `icp-validation`
- Change signal types in `signal-detection` to match your triggers
- Adjust tone instructions in `copy-generation` for your market
- Update platform names in `campaign-architecture` if you use a different tool

The skills are starting points. They'll improve as you run them and find edge cases.

---

## See the full system built live

These skills are part of a complete Claude Code + MCP + Clay workflow for signal-based outbound.

On April 22 I'm building the entire system live from zero — terminal open, no slides.

**Free. 45 minutes.** → [luma.com/claude-code-for-gtm](https://luma.com/claude-code-for-gtm)
