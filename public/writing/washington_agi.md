# What Washington Says About AGI

<p style="text-align: center">By Zephaniah Roe - January 16th 2026</p>

I spent a few hundred dollars on Anthropic API credits and let Claude individually research every current US congressperson's position on AI. This is a summary of my findings.

![An AI policy collage](/images/us_img1.png)

_Disclaimer: Summarizing people's beliefs is hard and inherently subjective and noisy. Likewise, US politicians change their opinions on things constantly so it's hard to know what's up-to-date. Also, I vibe-coded a lot of this._

## Methodology

I used Claude Sonnet 4.5 with web search to research every congressperson's public statements on AI, then used GPT-4o to score each politician on how "AGI-pilled" they are, how concerned they are about existential risk, and how focused they are on US-China AI competition. I plotted these scores against GovTrack ideology data to search for any partisan splits.

## I. AGI awareness is not partisan and not widespread

Few members of Congress have public statements taking AGI seriously. For those that do, the difference is not in political ideology. If we simply plot the AGI-pilled score vs the ideology score, we observe no obvious partisan split.

There are 151 congresspeople who Claude could not find substantial quotes about AI from. These members are not included on this plot or any of the plots which follow.

![Political ideology vs AGI-pilled score](/images/plot1.png)

## II. Existential risk is partisan at the tails

When you change the scoring prompt to ask how much a congressperson's statements reflect a concern about existential risk, the plot looks different. Note that the scoring prompt here emphasizes "A politician who is most XRisk-pilled is someone who thinks AI is a risk to humanity -- not just the US." This separates x-risk concerns from fears related to US-China relations.

![Political ideology vs X-risk score](/images/plot2.png)

This graph looks mostly like noise but it does show that the majority of the most x-risk pilled politicians are Democrats.[^1] This is troubling. Politics is a mind-killer and if AI Safety becomes partisan, productive debate will be even more difficult than it currently is.

## III. Both parties are fixated on China

Some congresspeople have made up their minds: the US must "win" the race against China and nothing else matters. Others have a more nuanced opinion. But most are thinking about US-China relations when speaking about AI. Notably, the most conservative congresspeople are more likely to be exclusively focused on US-China relations compared to the most progressive members.

![Political ideology vs China-focus score](/images/plot3.png)

This plot has a strange distribution. For reference, the scoring prompt uses the following scale:

- 0 = Does not mention China in their views on AI or does not think US-China relations are relevant
- 50 = Cites US China relations when talking about AI but is not the only motivating factor on their position on AI
- 100 = Cites US China relations as the only motivating factor on their position on AI and mentions an AI race against China as a serious concern

## IV. Who in Congress is feeling the AGI?

I found that roughly 20 members of Congress are "AGI-pilled."

**Bernie Sanders** (Independent Senator, Vermont): AGI-pilled and safety-pilled

> "The science fiction fear of AI running the world is not quite so outrageous a concept as people may have thought it was."

**Richard Blumenthal** (Democratic Senator, Connecticut): AGI-pilled and safety-pilled

> "The urgency here demands action. The future is not science fiction or fantasy. It's not even the future. It's here and now."

**Rick Crawford** (Republican Representative, Arkansas): AGI-pilled but doesn't discuss x-risk (only concerned about losing an AI race to China)

> "The global AI race against China is moving much faster than many think, and the stakes couldn't be higher for U.S. national security."

**Bill Foster** (Democratic Representative, Illinois): AGI-pilled and safety-pilled

> "Over the last five years, I’ve become much more worried than I previously was. And the reason for that is there’s this analogy between the evolution of AI algorithms and the evolution in living organisms. And what if you look at living organisms and the strategies that have evolved, many of them are deceptive."

**Brett Guthrie** (Republican Representative, Kentucky): AGI-pilled but doesn't discuss x-risk (only concerned about losing an AI race to China)

> "And who will win the war for AI? Essentially, this is as important as the dollar being the reserve currency in the world. It's that important, that's what is before us."

**Chris Murphy** (Democratic Senator, Connecticut): AGI-pilled and somewhat safety-pilled (more focused on job loss and spiritual impacts)

> "I worry that our democracy and many others could frankly collapse under the weight of both the economic and the spiritual impacts of advanced AI."

**Brad Sherman** (Democratic Representative, California): AGI-pilled and safety-pilled

> "I believe in our lifetime we will see new species possessing intelligence which surpasses our own. The last time a new higher level of intelligence arose on this planet was roughly 50,000 years ago. It was our own ancestors, who then said hello to the previously most intelligent species, Neanderthals. It did not work out so well for the Neanderthals."

**Debbie Wasserman Schultz** (Democratic Representative, Florida): AGI-pilled and safety-pilled

> "Experts that were part of creating this technology say that it's an existential threat to humanity. We might want to listen."

**Bruce Westerman** (Republican Representative, Arkansas): AGI-pilled but not necessarily safety-pilled (mostly focused on winning the "AI race")

> "The more I learn about it, it's kind of one of those things I think maybe humankind would've been better off if we didn't discover this and if we weren't developing it. But the cat's out of the bag and it is definitely a race to see who was going to win AI."

**Ted Lieu** (Democratic Representative, California): AGI-pilled and safety-pilled

> "AI already has reshaped the world in the same way that the steam engine reshaped society. But with the new advancements in AI, it's going to become a supersonic jet engine in a few years, with a personality, and we need to be prepared for that."

**Donald S. Beyer** (Democratic Representative, Virginia): AGI-pilled and (mostly) safety-pilled

> "As long as there are really thoughtful people, like Dr. Hinton or others, who worry about the existential risks of artificial intelligence--the end of humanity--I don't think we can afford to ignore that. Even if there's just a one in a 1000 chance, one in a 1000 happens."

**Mike Rounds** (Republican Senator, South Dakota): AGI-pilled and somewhat safety-pilled (talks about dual-use risks)

> "Bad guys can use artificial intelligence to create new pandemics, to use it for biological purposes and so forth, and to split genes in such a fashion that it would be extremely difficult to defend against it."

**Raja Krishnamoorthi** (Democratic Representative, Illinois): AGI-pilled and safety-pilled

> "That's why I'm working on a new bill—the AGI Safety Act—that will require AGI to be aligned with human values and require it to comply with laws that apply to humans."

**Elissa Slotkin** (Democratic Senator, Michigan): AGI-pilled but not safety-pilled (mostly concerned about losing an AI race to China)

> "I left this tour with the distinct feeling that AI raises some of the same fundamental questions that nukes did. How should they be used? By whom? Under what rules?"

**Dan Crenshaw** (Republican Representative, Texas): AGI-pilled and maybe safety-pilled

Did a podcast with Eliezer Yudkowsky but this was 2023.

**Josh Hawley** (Republican Senator, Missouri): AGI-pilled and safety-pilled

> "Americanism and the transhumanist revolution cannot coexist."

**Nancy Mace** (Republican Representative, South Carolina): AGI-pilled but not safety-pilled (only concerned about losing an AI race to China)

> "And if we fall behind China in the AI race...all other risks will seem tame by comparison."

**Jill Tokuda** (Democratic Representative, Hawaii): AGI-pilled and safety-pilled but this is based on very limited public statements

> "And is it possible that a loss of control by any nation-state, including our own, could give rise to an independent AGI or ASI actor that, globally, we will need to contend with?"

**Eric Burlison** (Republican Representative, Missouri): AGI-pilled but not safety-pilled (only concerned about losing an AI race to China)

> "Artificial intelligence, or AI, is likely to become one of the most consequential technology transformations of the century."

**Nathaniel Moran** (Republican Representative, Texas): AGI-pilled and safety-pilled (but still very focused on US-China relations)

> "At the same time, we must invest in areas crucial for oversight of automated AI research and development, like AI interpretability and control systems, which were identified in President Trump’s AI action plan."

**Pete Ricketts** (Republican Senator, Nebraska): AGI-pilled but not safety-pilled (only concerned about losing an AI race to China)

> "Unlike the moon landing, the finish line in the AI race is far less clear for the U.S.--it may be achieving Artificial General Intelligence, human-level or greater machine cognition."

## V. Those who know the technology fear it.

Of the members of Congress who are the strongest in AI safety, three have some kind of technical background.

Bill Foster is a US Congressman from Illinois, but in the 1990s, he was one of the first scientists to apply neural networks to study particle physics interactions. From reading his public statements, I believe he has the strongest understanding of AI safety out of any other member of Congress. For example, Foster has referenced exponential growth in AI capabilities:

> "As a PhD physicist and chip designer who first programmed neural networks at Fermi National Accelerator Laboratory in the 1990s, I've been tracking the exponential growth of AI capabilities for decades, and I'm pleased Congress is beginning to take action on this issue."

Likewise, Ted Lieu has a degree from Stanford in computer science. In July of 2025, he stated "We are now entering the era of AI agents," which is a sentence I cannot imagine most members of Congress saying. He has also acknowledged that AI could "destroy the world, literally."

Despite being 75 years old, Congressman Don Beyer is enrolled in a master's program in machine learning at George Mason University. Unlike other members of Congress, Beyer's statements demonstrate an ability to think critically about AI risk:

> "Many in the industry say, Blah. That's not real. We're very far from artificial general intelligence ... Or we can always unplug it. But I don't want to be calmed down by people who don't take the risk seriously"

## Appendix: How to use this data

The extracted quotes and analysis by Claude for every member of Congress can be found in a single json file here.

I found reading Claude's "notes" in the json to be an extremely comprehensive and accurate summary of a congressperson's position on AI. The direct quotes in the json are also very interesting to look at. I have cross-referenced many of them and hallucinations are very limited[^2] (Claude had web search enabled, so was able to take quotes directly from websites but at least in one case, made a minor mistake). I have also spot-checked some of the scores gpt-4o produced and they are reasonable, but as always is the case with LLM judges, the values are noisy.

I release all the code for generating this data and these plots but it's pretty disorganized and I would expect it to be difficult to use. If you send me a DM, I'd be happy to explain anything. Running all of this code will cost roughly $300 so if you would like to run a modified version of the pipeline, be aware of this.

[^1]: It also looks like more moderate politicians may be less x-risk pilled compared to those on each extreme. But the sample here is small and "the graph kind of looks like a U if you squint at it" doesn't exactly qualify as rigorous analysis.

[^2]: I obviously cross-referenced each of the quotes in this post.
