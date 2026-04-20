# Claude Code GTM Skills

5 reusable skills for B2B GTM operators running outbound with Claude Code.

Built by [Growth.Band](https://growth.band) and shared at the **Claude Code for GTM** webinar (April 22, 2026).

---

## What these are

Claude Code skills are markdown files that give Claude a reusable capability with consistent inputs and outputs. You install them once. Then instead of writing a new prompt every time, you call the skill by name.

Think of it like a function written in plain English. You don't write it every time — you call it.

---

## The skills

### Foundation (start here)
| Skill | What it does | How to use |
|-------|-------------|------------|
| `icp-definition` | Persistent ICP — fill once, all skills use it | Edit `00-icp-definition/ICP.md` |
| `gtm-orchestrator` | Full pipeline: signals → ICP validation → ready sequences | "Run full GTM pipeline" |

### Signal Playbooks (Apify-powered — no Clay or LinkedIn MCP needed)
| Skill | Signal | Strength | Trigger phrase |
|-------|--------|----------|----------------|
| `champion-tracker` | Contact changed jobs | 🔥🔥 | "Find champion moves this week" |
| `funding-radar` | Companies that just raised | 🔥 | "Funding radar for [sector]" |
| `hiring-intent` | Companies hiring roles your product replaces | 🔥 | "Find hiring intent signals" |
| `leadership-change` | New C-level hired at target account | 🔥 | "Leadership changes at target accounts" |
| `community-pain` | People complaining publicly about your problem | 🔥🔥 | "Mine community pain on Reddit" |
| `competitor-signals` | Dissatisfied competitor customers | 🔥🔥 | "Monitor competitor complaints" |

### Core GTM Skills (MCP-powered — requires Clay + LinkedIn)
| Skill | What it does | Trigger phrase |
|-------|-------------|----------------|
| `icp-validation` | Score a company against your ICP, return a verdict | "Validate this company against our ICP" |
| `signal-detection` | Scan a list for hiring/growth signals, return scored tiers | "Find hiring signals for this Clay export" |
| `copy-generation` | Write a multi-step sequence tied to a specific signal | "Write the sequence for this hypothesis" |
| `campaign-architecture` | Set up a campaign in PlusVibe/Instantly via MCP | "Set up the SDR-hiring hypothesis in PlusVibe" |
| `reply-analysis` | Read inbox via MCP, categorize replies, surface patterns | "What came in this week?" |

---

## Quick start (no MCP required)

1. Fill in your ICP: edit `gtm-skills/00-icp-definition/ICP.md`
2. Run a signal playbook: "Find champion moves this week"
3. Run the full pipeline: "Run full GTM pipeline — hiring intent"

---

## Prerequisites

**For Signal Playbooks (Apify-powered):**
- Claude Code CLI
- Apify account + API key

**For Core GTM Skills (MCP-powered):**
- Claude Code CLI
- MCP connections: LinkedIn MCP, Clay MCP, PlusVibe/Instantly MCP, Email MCP

---

## How to install

```bash
for dir in */; do
  skill_name=$(echo "$dir" | sed 's/^[0-9]*-//' | tr -d '/')
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
