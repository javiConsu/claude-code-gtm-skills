---
name: leadership-change
description: Use when asked to find companies that recently hired a new C-level or senior leader. New leaders buy new tools in their first 90 days.
---

# Leadership Change Tracker

Detect new C-level and senior leadership hires at target companies.
New leaders inherit old tools but buy new ones — the first 90 days is the highest-intent window.

## Signal strength: 🔥 (Sales-led / Dark Funnel)

## What you need

- Target company list OR target industry + geography
- Leadership titles to track (CEO, CMO, CRO, VP Sales, VP Marketing, Head of Growth, etc.)
- Apify access (LinkedIn scraper + news scraper)

## Process

1. Read `00-icp-definition/ICP.md` for target profile
2. For each company in the list (or via search), check for leadership changes in last 90 days:
   - Use Apify LinkedIn Company Scraper to pull leadership team
   - Cross-reference with news scraper for press releases announcing new hires
   - Check LinkedIn profiles of key leaders — look for "Started X role" < 90 days ago
3. Identify the buyer persona for your product at each company:
   - Who is the new leader most likely to buy your product?
   - Is the new hire the buyer, or do they report to the buyer?
4. Score by recency: <30 days (hottest), 30-60 days, 60-90 days
5. Flag if the new leader's previous company was a customer or prospect

## Apify actors to use

- **LinkedIn Company Scraper** (`apify/linkedin-company-scraper`) — current leadership
- **LinkedIn Profile Scraper** (`apify/linkedin-profile-scraper`) — start date of current role
- **Google News Scraper** (`apify/google-news-scraper`) — press releases announcing new hires

## Output format

```
Leadership Change Scan: [date] — [N companies checked]

<30 DAYS — HOTTEST WINDOW ([n])
- [Company] | New: [Name, Title] | Started: [X days ago]
  Previous company: [name] — [customer? prospect? unknown]
  Buyer contact: [Name, Title, LinkedIn]
  Angle: New [title] at [company] — they're setting their stack right now

30-60 DAYS — ACTIVE WINDOW ([n])
- [Company] | New: [Name, Title] | Started: [X days ago]

60-90 DAYS — CLOSING WINDOW ([n])
- [Company] | New: [Name, Title] | Started: [X days ago]

>90 DAYS — SIGNAL EXPIRED ([n]) — excluded

Next step: Run copy-generation with "new leader" signal for <30 day list
```

## Outreach framing

- "New leaders buy new tools" — don't say this, embody it
- Frame around their mandate: "When you're setting up [function], most [title]s at your stage start with..."
- If their previous company used your product: "I noticed you came from [Company] — they've been using us for [outcome]. Happy to show you what that looks like in your new context."

## Notes

- CMO / VP Marketing = buyer for GTM automation
- CRO / VP Sales = buyer for outbound and signal tools
- CEO at companies <50 people = often the direct buyer for everything
- New leaders are more likely to respond to outreach — they're actively building relationships
