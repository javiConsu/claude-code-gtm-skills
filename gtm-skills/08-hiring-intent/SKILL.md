---
name: hiring-intent
description: Use when asked to find companies hiring for roles that signal a buying trigger — roles your product helps with or replaces.
---

# Hiring Intent

Find companies actively hiring for roles that signal they need your product.
A company posting for "Head of Sales" or "Growth Marketer" is acknowledging a problem and allocating budget to solve it.

## Signal strength: 🔥 (Sales-led / Dark Funnel)

## What you need

- Role keywords that signal buying intent for your product
  (e.g. "SDR", "Growth", "Outbound", "RevOps", "Sales Operations")
- Target geography and company size range
- Apify access (LinkedIn Jobs Scraper)

## Process

1. Read `00-icp-definition/ICP.md` for target profile and signal context
2. Define 3-5 job title keywords that indicate a buying trigger:
   - Your product automates X → companies hiring humans to do X manually = perfect signal
   - Example: GTM automation tool → target companies hiring "SDR", "Sales Development", "Outbound"
3. Use Apify LinkedIn Jobs Scraper to pull active postings matching keywords + ICP filters:
   - Company size range
   - Geography
   - Posted in last 30 days (recency is critical)
4. For each result, extract:
   - Company name + LinkedIn URL
   - Job title + posting date
   - Any useful context from job description (tech stack mentioned, team size, urgency language)
5. Cross-check against ICP definition — filter out companies outside target profile
6. Identify best contact at each company (Founder / CEO / decision maker)

## Apify actors to use

- **LinkedIn Jobs Scraper** (`apify/linkedin-jobs-scraper`) — active job postings
- **LinkedIn Company Scraper** (`apify/linkedin-company-scraper`) — company validation
- **LinkedIn Profile Scraper** (`apify/linkedin-profile-scraper`) — find decision maker

## Output format

```
Hiring Intent Scan: [date] — Keywords: [list] — [N postings found]

TIER 1 — STRONG SIGNAL ([n])
- [Company] | Hiring: [Role] | Posted: [X days ago] | Size: [headcount]
  Signal: Hiring first [role] = acknowledged problem + budget allocated
  Contact: [Name, Title] | [LinkedIn URL]
  Angle: They're about to hire someone to do manually what your product automates

TIER 2 — WEAK SIGNAL ([n])
- [Company] | Hiring: [Role] | Posted: [X days ago]
  Reason for Tier 2: [role adjacent / posting older than 21 days / company marginal ICP]

EXCLUDED ([n]) — [reason]

Next step: Run copy-generation with "hiring intent" signal for Tier 1 list
```

## Outreach angle guidance

- "Hiring [role] signals you're serious about [outcome]. Most teams at your stage use [product] to get there faster without the headcount cost."
- Never say "I saw you're hiring" — say "Congrats on the growth, looks like [outcome] is a priority"
- Best timing: within 7 days of job posting going live

## Notes

- Job postings older than 30 days lose signal strength fast — role may already be filled
- A company posting for multiple sales/growth roles = even stronger signal (scaling fast)
- Use job description language to personalize outreach — they tell you their exact problem
