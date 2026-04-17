---
name: competitor-signals
description: Use when asked to monitor competitor mentions, find dissatisfied competitor customers, or track competitor moves that create switching opportunities.
---

# Competitor Signal Monitor

Track competitor mentions, negative reviews, and customer complaints to find switching opportunities.
Someone unhappy with a competitor = warm prospect actively looking for alternatives.

## Signal strength: 🔥🔥 (Competitor / Dark Funnel)

## What you need

- List of direct competitors (2-5)
- Platforms to monitor (Reddit, G2, Trustpilot, Twitter/X, LinkedIn)
- Apify access (Reddit Scraper, Review Scraper, Google Scraper)

## Signal types to capture

**Negative reviews:** "Clay is too complex", "Apollo data is stale", "Instantly got my domain flagged"
**Complaint posts:** Reddit threads complaining about pricing, UX, or missing features
**Cancellation mentions:** "cancelled [competitor]", "looking for alternative to [competitor]", "switched from [competitor]"
**Feature gap mentions:** People asking for features a competitor doesn't have (that you do)
**Pricing complaints:** "too expensive", "credit system is confusing", "unexpected bill"

## Process

1. Read `00-icp-definition/ICP.md` for ICP context
2. For each competitor, run parallel scans:
   - **Reddit Scraper** → search competitor name + negative keywords
     (e.g. "Clay too expensive", "Apollo not working", "Instantly alternative")
   - **Review Scraper** → G2 / Capterra / Trustpilot recent negative reviews
   - **Google Scraper** → "[competitor] alternative", "[competitor] problems", "switch from [competitor]"
   - **LinkedIn Scraper** → people posting about competitor frustrations
3. Score each mention by intent:
   - **High intent:** "looking for alternative", "cancelled", "switching" → act immediately
   - **Medium intent:** negative review with specific complaint → they're frustrated, not yet leaving
   - **Low intent:** general complaint but no switching language
4. For each high-intent mention, identify the author and check ICP fit
5. Track competitor product changes (new features, pricing changes, outages) as separate signals

## Apify actors to use

- **Reddit Scraper** (`apify/reddit-scraper`) — community complaints
- **Review Scraper** (`apify/review-scraper`) — G2/Trustpilot/Capterra
- **Google Search Scraper** (`apify/google-search-scraper`) — "[competitor] alternative" intent
- **Twitter Scraper** (`apify/twitter-scraper`) — real-time complaint monitoring

## Output format

```
Competitor Signal Scan: [date] — Competitors: [list]

HIGH INTENT — SWITCHING SIGNALS ([n])
- [Platform] | [Author] | "[Quote]" | [Competitor mentioned] | [Date]
  Pain: [what they're complaining about]
  ICP match: [YES / PARTIAL / UNKNOWN]
  Your angle: [how your product solves exactly their complaint]
  Action: [DM / comment / email]

MEDIUM INTENT — FRUSTRATION SIGNALS ([n])
- [Platform] | [Author] | "[Quote]" | [Competitor] | [Date]
  Pain: [complaint]
  Action: [Monitor / engage with value]

COMPETITOR INTEL — MARKET MOVES ([n])
- [Competitor] | [What changed] | [Date] | [Implication for us]
  e.g. "Clay raised prices 30%" → users in our price range now looking for alternatives

Pain patterns by competitor:
- [Competitor A]: most complaints about [theme]
- [Competitor B]: most complaints about [theme]

Positioning insight: [One actionable observation for messaging or product]

Next step: Run copy-generation with "switching from competitor" signal for HIGH INTENT list
```

## Engagement approach

- On review platforms (G2): you can respond to reviews professionally — do it
- Reddit: answer the "looking for alternative" posts with genuine comparison, not a pitch
- LinkedIn DM: "Saw your post about [competitor] — sounds frustrating. We built [product] specifically because [their exact complaint]. Happy to show you in 10 minutes."

## Notes

- Never disparage competitors directly — "they're bad" is weak, "we solve X differently" is strong
- Negative reviews older than 6 months may already be resolved by the competitor — check
- Pricing complaints = your chance to position on simplicity + predictability
- "Too complex" complaints = your biggest positioning advantage if you're simpler
