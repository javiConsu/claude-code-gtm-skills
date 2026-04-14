---
name: reply-analysis
description: Use when asked to check replies, analyze what came in, review inbox activity, or summarize campaign response patterns
---

# Reply Analysis

Read the inbox via MCP, categorize every reply, surface patterns, and return one actionable recommendation.

## What you need

- Inbox access via LinkedIn MCP and/or email MCP
- Timeframe (default: last 7 days)
- Campaign name or hypothesis to filter by (optional — if blank, covers all)

## Categories

- **Interested**: any positive signal (question, meeting request, "tell me more", "send it over")
- **Not interested**: explicit rejection or unsubscribe
- **Out of office**: auto-reply, vacation message, or equivalent
- **No reply needed**: spam, wrong person, bounce
- **Needs follow-up**: ambiguous reply that requires a human response

## Process

1. Pull replies from inbox via MCP for the specified timeframe
2. Read each reply and assign one category
3. For "Interested" replies: flag the company, note what they responded to, and suggest a next step
4. Scan for patterns across all replies: what signal/angle/step got the most engagement?
5. Identify one specific copy or targeting change the data supports

## Output format

```
Reply analysis: [date range]
Total replies: [n]

INTERESTED ([n])
- [Name] @ [Company] | replied to: [step + subject] | signal: [what they responded to]
  → Next step: [suggested action]

NOT INTERESTED ([n])
- [summary, no need to list individually unless pattern is notable]

OUT OF OFFICE ([n])
- [list names for follow-up queue]

NEEDS FOLLOW-UP ([n])
- [Name] @ [Company] | [what they said] | suggested reply: [one option]

PATTERNS
[2-3 observations: which step got the most replies, which angle resonated, which segment responded]

ONE CHANGE TO MAKE
[Specific recommendation — a subject line, an opening line, a targeting filter — based on the data above]
```

## Notes

- "Interested" always gets a named entry with a suggested next step — never leave it as a count
- If inbox access fails via MCP, report the error and list what was accessible
- Out-of-office replies should be queued for re-contact, not marked as closed
