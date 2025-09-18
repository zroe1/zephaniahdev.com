# Thoughts on Hand Crafting Language Models

<p style="text-align: center">By, Zephaniah Roe</p>

<p><i>Credit to Rick Goldstien initial idea for this project. Technical progress was also made under his mentorship.</i></p>

## The Idea

For the past few weeks, I have been working part time on training a one-layer language model and reverse engineering the algorithm it has learned. Here, I explain the bit of progress I have made, why other people think this kind of work isn’t tractable, and why they are wrong.

## On Giving Up

During my time at UChicago, multiple accomplished CS professors have expressed during lectures that trying to interpret neural networks is a dead end. One particularly dogmatic professor claimed that nobody really works on interpreting neural networks anymore.

The latter claim is certainly not true! Not only is there a professor at UChicago that specializes in mechanistic interpretability, there is also an interpretability team at Anthropic, DeepMind, along with a number of other teams scattered across academia and industry who have racked up thousands of citations.

However, even some of the figures leading these efforts tend to be losing ambition. The wide-eyed optimism that characterized earlier writing on mechanistic interpretability is turning into something more “pragmatic.” Neel Nanda, who leads the mechanistic interpretability team at Google Deepmind claims that the complete reverse engineering models as a research agenda is “basically doomed”:

> I used to be very excited about ambitious reverse engineering, but I currently think that the dream of completely reverse engineering a model down to something human understandable seems basically doomed. My interpretation of the research so far is that models have some human understandable high-level structure that drives important actions, and a very long tail of increasingly niche and irrelevant heuristics and biases.

Neel’s “pragmatic vision” is to characterize high-level properties of models, which he believes is good enough to be practically useful. More on this here.

## On Taking a Risk

While the entire field turns right, why turn left?

I believe that the kind of work that I have started isn’t as ambitious as I think my professors or some members of the wider research community believe. The question we should be asking is “has anyone actually tried this and failed?” By this I mean: has a smart person sat down for at least one year and tried to do the tedious work of handcrafting each interpretible heuristic or rule that a tiny language model has learned? The answer is probably no because 1.) this effort is relatively boring 2.) it's not immediately economically valuable 3.) it requires one to move against the current of what others are saying and 4.) the work requires large dedicated chunks of time.

This is all to say that I think the real reason no one has reverse engineered a small language model is not because it is exceedingly difficult but rather because of the current structure of incentives that researchers currently have. While researchers are pressured to publish frequently and do things that elevate their status, this kind of work is time consuming and unlikely to get funding or win awards at conferences.

So while on the surface this kind of project appears to be intractable, under closer examination, it is actually low hanging fruit, ready to be picked by anyone willing to do countless hours of tedious work.

## Understanding the Long Tail of Alien Properties

Another important question: why do this at all? Or a more confrontational framing: if nobody has already done it, shouldn’t that tell you it just isn’t that important?

The value that this kind of work provides is to give potential explanations for all of the small, less important mechanisms at play in neural networks. Returning to Neel's theory:

My interpretation of the research so far is that models have some human understandable high-level structure that drives important actions, and a very long tail of increasingly niche and irrelevant heuristics and biases.

But shouldn’t we be interested in this long tail? How do we know these effects are truly “irrelevant” unless we document them, and their interactions one by one? The long tail is annoying because it’s hard to spin up some quick results, but potentially by taking the time to understand it, we can construct a better idea of what neural networks are actually doing.

So while I’m sure the language model I am studying has some very salient properties, I expect the main value of this research to be in documenting the less salient aspects of the model one by one.

## Some Early Signs of Progress

WIP
