---
name: community-pain
description: Use when asked to find people publicly expressing pain that your product solves — in Reddit, forums, LinkedIn, or other communities.
---

# Community Pain Mining

Find people actively complaining about or asking for help with problems your product solves.
Public pain expression = self-qualified lead with acknowledged need.

## Signal strength: 🔥🔥 (Community-led / Dark Funnel)

## What you need

- 3-5 pain keywords tied to your product's core value
  (e.g. "cold email not working", "find leads without Clay", "outbound without SDR")
- Target communities to scan (subreddits, LinkedIn groups, forums)
- Apify access (Reddit Scraper, Google Scraper)

## Pain keyword examples for GTM automation

- "how to find leads without [expensive tool]"
- "cold email reply rate dropping"
- "outbound without hiring SDR"
- "automate prospecting"
- "ICP definition help"
- "GTM strategy for early stage"

## Process

1. Read `00-icp-definition/ICP.md` for target buyer profile
2. Define pain keyword clusters (3-5 themes)
3. Scan target platforms using Apify:
   - **Reddit Scraper** → r/SaaS, r/sales, r/Entrepreneur, r/startups, r/marketing
   - **Google Scraper** → site:reddit.com + pain keywords, LinkedIn posts
   - **Hacker News Scraper** → "Ask HN" posts about outbound / GTM
4. For each matching post/thread:
   - Extract: author, platform, post text, date, engagement (upvotes / comments)
   - Check if author matches ICP profile (look up their LinkedIn if available)
   - Score relevance: is this exactly the pain your product solves?
5. Filter to posts from last 30 days (freshness matters)
6. Group by pain theme and rank by engagement

## Apify actors to use

- **Reddit Scraper** (`apify/reddit-scraper`) — posts + comments by keyword
- **Google Search Scraper** (`apify/google-search-scraper`) — broader discovery
- **Hacker News Scraper** (`apify/hacker-news-scraper`) — tech-adjacent audience

## Output format

```
Community Pain Scan: [date] — Keywords: [list] — [N posts found]

HIGH RELEVANCE — DIRECT PAIN ([n])
- [Platform] | [Author] | "[Post title / excerpt]" | [Date] | [Engagement]
  Pain: [exact problem they described]
  ICP match: [YES / PARTIAL / UNKNOWN — needs research]
  Approach: [Comment on the post / DM / email if findable]
  Suggested angle: [one line connecting their pain to your solution]

MEDIUM RELEVANCE — ADJACENT PAIN ([n])
- [Platform] | [Author] | "[excerpt]" | [Date]
  Why adjacent: [they're solving a related but not exact problem]

LOW RELEVANCE — NOISE ([n]) — excluded

Pain theme summary:
- [Theme 1]: [N mentions] — [what people are actually saying]
- [Theme 2]: [N mentions] — [pattern]

Insight: [One observation about what the market is struggling with most]

Next step: Comment on top HIGH RELEVANCE posts (value-first, no pitch) OR run copy-generation for DM outreach
```

## Community engagement rules

- **Never pitch in the comments** — offer value, ask a question, or share a resource
- Respond within 24h of post going live (faster = more visibility)
- DM only after engaging publicly first — warms up the interaction
- Some communities ban self-promotion — read rules before engaging
- Best approach: answer their question genuinely, mention product only if directly relevant

## Notes

- Reddit posts with 10+ comments = high pain acknowledgment, multiple people agree
- LinkedIn posts get lower engagement but author is usually easier to reach
- "Asking for a friend" posts = often the person themselves, highest intent
- Recency rule: posts older than 14 days → author likely found a solution already
