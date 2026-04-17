---
name: funding-radar
description: Use when asked to find recently funded companies in a sector. Funding = budget available + growth mandate = buying signal.
---

# Funding Radar

Find companies that recently raised funding in your target market.
New funding = budget allocated, growth pressure, new tooling decisions imminent.

## Signal strength: 🔥 (Sales-led / Dark Funnel)

## What you need

- Target industry / vertical
- Funding stage filter (e.g. Seed, Series A, Series B)
- Geography (e.g. Spain, Europe)
- Apify access (Crunchbase or PitchBook scraper)

## Process

1. Read `00-icp-definition/ICP.md` for target profile
2. Use Apify to scrape recent funding announcements:
   - **Crunchbase scraper** → filter by industry + geography + date (last 90 days) + stage
   - OR **news scraper** → search "{industry} funding {country} 2026" and extract company names
3. For each funded company:
   - Check headcount (from LinkedIn company scraper) — still in ICP size range?
   - Check if they're already a customer or in your CRM
   - Identify the most likely buyer title (Founder / CEO / Head of Growth)
4. Score each company: ICP fit (from icp-validation skill) and funding recency
5. Return prioritized list

## Apify actors to use

- **Crunchbase Scraper** (`apify/crunchbase-scraper`) — funding data
- **LinkedIn Company Scraper** (`apify/linkedin-company-scraper`) — headcount + team
- **Google News Scraper** (`apify/google-news-scraper`) — fallback for funding mentions

## Output format

```
Funding Radar: [date] — [sector] — last 90 days

TIER 1 — ICP FIT + RECENT FUNDING ([n])
- [Company] | [Amount] | [Stage] | [Date] | [Headcount] | [HQ]
  Buyer: [likely title] | ICP score: [X/12]
  Angle: Just raised [amount] — they're hiring and buying tools now

TIER 2 — PARTIAL FIT OR OLDER FUNDING ([n])
- [Company] | [Amount] | [Stage] | [Date]
  Reason for Tier 2: [size mismatch / older than 60 days / industry adjacent]

EXCLUDED ([n])
- [Company] — [reason: too large / already customer / out of geo]

Next step: Run icp-validation on Tier 1 list, then copy-generation with "funding" signal
```

## Notes

- Funding is widely overused as a signal — it's a Tier 1 only if combined with ICP fit
- Series A is usually the sweet spot: they have budget + urgency + still buying tools fast
- Seed-stage companies often don't have budget yet → Tier 2 at best
- Don't mention the funding amount in outreach — it sounds like you're stalking them
- Frame it as growth momentum, not money: "Congrats on the growth" not "saw you raised €2M"
