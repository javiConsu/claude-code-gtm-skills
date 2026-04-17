---
name: champion-tracker
description: Use when asked to find contacts or customers who changed jobs recently. Detects champion moves — people who may bring your product to their new company.
---

# Champion Tracker

Detect when key contacts (customers, prospects, or champions) change jobs.
A champion job change = warm intro opportunity at a new account.

## Signal strength: 🔥🔥 (Sales-led / Dark Funnel)

## What you need

- A list of contacts to monitor (names + LinkedIn URLs or company names)
- OR a job title + industry to search for recent movers
- Access to Apify (LinkedIn Profile Scraper or LinkedIn Jobs Scraper actor)

## Process

1. Read `00-icp-definition/ICP.md` for target profile context
2. For each contact in the list, use Apify's LinkedIn Profile Scraper to check:
   - Current company vs. last known company
   - Date of last role change
   - New company size and industry (does it match ICP?)
3. Flag contacts who changed jobs in the last 90 days
4. For each flagged contact, check if the new company is:
   - Already a customer → skip (they may not need re-selling)
   - In your ICP → Tier 1 opportunity
   - Outside ICP → Tier 2 (still worth a congratulations touch)
5. Enrich new company with basic data (size, industry, tech stack signals if available)

## Apify actors to use

- **LinkedIn Profile Scraper** (`apify/linkedin-profile-scraper`) — check current role
- **LinkedIn Company Scraper** (`apify/linkedin-company-scraper`) — enrich new company

## Output format

```
Champion Move Scan: [date] — [N contacts checked]

JOB CHANGERS — ICP FIT ([n])
- [Name] | [Old Company] → [New Company] | [New Title] | [Days since change]
  New company: [size] | [industry] | ICP match: YES
  Recommended action: Reach out within 48h — congratulate + position product

JOB CHANGERS — OUT OF ICP ([n])
- [Name] | [Old Company] → [New Company] | [New Title]
  Recommended action: Congratulate only, keep warm

NO CHANGE ([n]) — no action needed

Next step: Run copy-generation with "champion move" signal for Tier 1 list
```

## Notes

- Contacts who changed jobs in <30 days = highest urgency (they're still setting up their new stack)
- 30-90 days = still valid but less urgent
- >90 days = signal loses strength rapidly
- Always congratulate first — never open with a pitch
- If LinkedIn MCP is available, use it instead of Apify for real-time data
