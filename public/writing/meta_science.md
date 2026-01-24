# Principles for Meta-Science and AI Safety Replications

<p style="text-align: center">Zephaniah Roe - January 23rd 2026</p>

If we get AI safety research wrong, we may not get a second chance. But despite the stakes being so high, there has been no effort to systematically review and verify empirical AI safety papers. I would like to change that.

Today I sent in funding applications to found a team of researchers dedicated to replicating AI safety work. But what exactly should we aim to accomplish? What should AI safety replications even look like? After 1-2 months of consideration and 50+ hours of conversation, this document outlines principles that will guide our future team.

## I. Meta-science doesn’t vindicate anyone

Researchers appear to agree that some share of AI safety work is low-quality, false, or misleading. However, everyone seems to disagree on which share of papers are the problematic ones.

When I expressed interest in starting a group that does AI safety replications, I suspect some assumed I would be “exposing” the papers that they don’t approve of. This is a trap and it is especially important for us, as the replicators, not to fall into it. If our replications tend to confirm our beliefs, that probably says more about our priors than the papers we are studying.

## II. Searching for “bad” papers is like searching for “haunted” houses

Consider a team of researchers trying to find examples of haunted houses. They could investigate suspicious buildings or take tips from people who have witnessed paranormal activity. They could then publish reports of which houses you should definitely avoid. But the issue is that ghosts aren’t real. What they would be finding is a convincing story, not the underlying truth.

Trying to find “bad” papers will be like finding haunted houses. If given a mandate to find papers that don’t replicate, we will find them. But the uncomfortable truth is that genuinely influential papers that are straightforwardly, objectively wrong are rare. The empirical claims are likely true in some sense, but don't tell the full story. The goal is to tell the full story, not to declare which houses have ghosts.

## III. Research doesn’t regulate itself

Even when researchers are especially disciplined, they are incentivized to frame their papers around their successes while burying their limitations. Likewise, when designing evaluations, researchers are incentivized to measure the properties they are proud of rather than those they wish would go away.

I’ve heard the arguments that we don’t need peer review. Authors can accept feedback and update arXiv. Or ideas can duel in the LessWrong comment section. But I don’t think either of these are enough.[^1] They both assume that:

- Non-authors are going to engage enough with the work to confirm findings or discover limitations.
- Authors are going to be open to accepting valid critiques and updating their paper.

\#1 is unrealistic. \#2 is also often unrealistic and arguably unreasonably burdensome to authors of the work. For example, should an author with 50 papers have to litigate every critique and correct every flaw across dozens of papers and several years of research?

## IV. Replications are more than repeating the experiments

For any paper that releases code, “replicating” figures or statistics should be trivial (we would hope). But just because statistics replicate, that doesn’t mean the effect is real. We want to look closely at the paper and ask:

- Do the claims fail under a statistical test?
- Is the property specific to a single model or model family?
- Are there any limitations that are clear in the code but undocumented in the paper?
- Do the authors evaluate against a baseline? Did they implement the baseline properly?
- etc…[^2]

Our philosophy is to start from scratch, carefully implement the paper exactly as it's written, and see if we get the same results. After that, we will poke around a little and see if anything looks weird.

## V. The replication is just as dubious as the paper itself

If we can’t replicate something, could that mean we are just doing something wrong? Yes, of course! We obviously will try to avoid this case, and contact the authors to get feedback if things aren’t working.

If we can isolate why things aren’t working, this can be a finding within itself (X only happens with a really big batch size on small models). If we try hard and cannot figure out why things aren’t working, it eventually makes sense to write something up saying:

- This is what we did.
- It didn’t work even though we tried X, Y, and Z things.
- We don’t know why this happened, so it's unclear what the implications are.

## VI. Some centralization is necessary

Our plan is to hire people for in-person fellowships, and eventually, full-time roles. One of the most common comments I get on this is some version of “Why don’t you outsource replications to the community?” or “Why not offer bounties for replications instead of doing them yourself?”

The answer is the incentives aren’t there. After we run a pilot this summer, we would like to complete more ambitious replications. Offering bounties at this scale is logistically difficult because even for a minimal replication, compute alone could be thousands of dollars.

Selecting which papers to replicate is perhaps a place where a decentralized approach is more principled. We have a framework for prioritizing papers,[^3] but we're also exploring ways for the community to vote on which papers we replicate to reduce selection bias.

## VII. We are all adults here

I would expect most replications to take the form of “everything works and we found 0-2 extremely minor issues.” But doing this kind of work inevitably involves sometimes challenging claims made in papers. This is difficult, but replications should state concerns directly.

Giving any critique of another's work publicly is stressful, but reasonable people won’t hold it against you when it’s in good faith.

We will take the feedback of authors seriously, but we may not always converge on agreement. In these cases, we will attach an author’s comment to our research.

## VIII. Feedback is everything

A group that replicates AI safety papers really exists for a single reason: to be useful to the community. That means we value your feedback and we hang onto every word. Please let us know what you think.

If you want more details about what we are planning, I'm happy to send over our proposal. If you are interested in our summer research fellowship, you can express interest here.

[^1]: And for what it's worth, I don't even think peer review is enough.

[^2]: I really like Maksym Andriushchenko's twitter thread on this.

[^3]: The tl;dr is there are five criteria we plan to use:

    - Narrative influence: How much does the paper shape how we talk about AI safety to each other and the world? Does it have any important implications for policy or frontier lab practices?
    - Research dependence: Does other critical research depend on this paper?
    - Vulnerability: Does the paper seem unlikely to replicate or generalize?
    - Difficulty: How much time and money would the replication take?
    - Recency: Having replications completed within a few weeks of the paper’s release can help the research community iterate quickly. However, ensuring that we do not lower our standards for speed is equally important.
