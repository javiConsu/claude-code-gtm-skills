---
name: copy-generation
description: Use when asked to write an outreach sequence, email steps, or LinkedIn messages for a specific hypothesis, ICP, and signal
---

# Copy Generation

Write a multi-step outreach sequence tied to a specific signal and persona. Not a template — copy built for this exact situation.

## What you need

- **ICP**: who you're targeting (role, company type, context)
- **Signal**: what just happened at their company (the active trigger)
- **Angle**: the specific argument or framing for this hypothesis
- **Channel**: email, LinkedIn, or both
- **Steps**: how many touchpoints (default: 3)

## Principles

- Every message references the signal. If it could be sent to anyone, it's wrong.
- Step 1 leads with the signal, not with the sender.
- Step 2 shifts to the problem the signal implies.
- Step 3 is a low-friction close (question, not pitch).
- No vanity openers ("I came across your profile…").
- No feature lists.
- **Email body: under 75 words per step.** Cut ruthlessly.
- **Subject lines: under 4 words.** No clickbait, no questions.
- LinkedIn messages under 150 characters for step 1.

## Spam hard-blocks

Before outputting any message, scan every word. **Auto-reject and rewrite** if any of these appear:

- Exclamation marks (`!`) anywhere in body or subject
- Em dashes (`—`) in body copy
- Buzzwords: *revolutionize, game-changer, synergy, leverage, seamless, cutting-edge, innovative, best-in-class, robust, scalable, streamline, transform, empower, solution, excited, thrilled, passionate*
- Questions in subject lines
- "I hope this finds you well" or any equivalent opener
- "I wanted to reach out" / "I'm reaching out because"
- Any claim without evidence ("we help companies 10x their…")

Flag each violation inline when reviewing step 1 variants.

## Channel strategy — the 10:1 rule

Before writing, establish which channel:

**Email = coverage layer.** Send to your entire list. Low cost per touch.
Use for: all companies matching the signal, every company in TAM.

**LinkedIn = precision layer.** Top 10% only — dream accounts, highest ICP fit.
Use for: 3 coordinated touches, highly personalized, written to feel like one person reached out across both channels.

If writing for both channels, **the messaging must feel like the same person** — a prospect who sees the email and the LinkedIn DM should recognize the same voice and angle.

## Process

1. Read `00-icp-definition/PAST-WINS.md` if it exists — past clients reveal the real angle. If a signal appears there with 3+ clients, that's your **validated angle**: use it as the primary frame for step 1.
2. Ask the user: **"¿Cuál es la hipótesis de esta campaña?"** — one sentence: "Creo que [perfil] necesita [solución] cuando [señal] porque [razón]." This defines the A/B test. If they can't articulate it, help them form it before writing anything.
3. Confirm ICP, signal, and angle are clear. Ask if anything is missing.
4. Draft **5 variants of step 1**. Different angles, same signal. Check each against the spam hard-block list. Flag violations inline.
5. Tell the user which variant you'd send and why. Mark it as the **hypothesis to test**.
6. Draft step 2: expand the problem implied by the signal + relevant proof/example + CTA.
7. Draft step 3: direct ask — one question, one line.
8. Review each step: could this be sent to a different company without changing it? If yes, rewrite.
9. Final check: word count per step (must be under 75), subject word count (must be under 4).
10. After outputting the sequence, add: **"Cuando lo envíes, cuéntame qué respuesta tuviste — eso mejora las siguientes campañas."** This closes the learning loop.

## Output format

```
Hypothesis: [name]
ICP: [role] @ [company type]
Signal: [what triggered this]
Angle: [the core argument]

STEP 1 — [channel] — Day 1
Subject: [if email]
---
[message body]
---

STEP 2 — [channel] — Day 4
Subject: [if email]
---
[message body]
---

STEP 3 — [channel] — Day 8
Subject: [if email]
---
[message body]
---
```

## Notes

- If signal is vague ("they're growing"), push back and ask for the specific evidence
- Adjust tone based on role: VP Sales = direct, blunt. Ops roles = logical, efficient. Founders = peer-to-peer.
- For LinkedIn: step 1 is a connection request note or InMail, steps 2-3 are follow-up messages
