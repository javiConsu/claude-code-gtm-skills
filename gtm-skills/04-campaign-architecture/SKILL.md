---
name: campaign-architecture
description: Use when asked to set up, configure, or build a campaign in PlusVibe, Instantly, or a similar sequencing platform via MCP
---

# Campaign Architecture

Set up a complete outbound campaign in the sequencing platform via MCP. No manual clicking.

## What you need

- Campaign hypothesis name (use the hypothesis as the name, not a generic label)
- Outreach sequence (steps, copy, channels, timing)
- Lead list or source
- Sending account(s) to assign
- Schedule preferences (days, time windows, timezone)

## Naming convention

Always name campaigns by hypothesis, not by audience. Good: `SDR-Hire-VP-Sales-Risk`. Bad: `Q2 Outbound` or `LinkedIn Campaign 3`. Names should be readable in a list of 20 campaigns and immediately tell you what's being tested.

## Process

1. Confirm all inputs are present. Ask for anything missing before touching the platform.
2. Create the campaign in PlusVibe via MCP with the hypothesis name
3. Upload sequence steps in order with correct delays between steps
4. Assign sending accounts
5. Upload or link the lead list
6. Set schedule: sending days, time window, max emails/day per account
7. Confirm campaign is in draft (do not launch without explicit instruction)
8. Return a summary of what was created

## Output format

```
Campaign created: [hypothesis name]
Platform: [PlusVibe / Instantly]
Status: Draft (not launched)

Steps: [n] | Channels: [email / LinkedIn / both]
Leads: [n loaded]
Sending accounts: [list]
Schedule: [days] | [time window] | [timezone]
Max sends/day: [n]

Ready to launch. Confirm when you want to start.
```

## Notes

- Never launch a campaign without explicit "launch it" instruction
- If sequence steps are missing copy, stop and ask — don't use placeholder text
- If the lead list has fewer than 10 contacts, flag it before building
- For multi-channel: create LinkedIn steps as manual tasks if LinkedIn MCP doesn't support auto-send
