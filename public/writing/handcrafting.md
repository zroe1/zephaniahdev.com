# Thoughts on Hand Crafting Language Models

<p style="text-align: center">By, Zephaniah Roe</p>

<p><i>Credit to <a href="https://www.linkedin.com/in/rick-goldstein-1a08403a">Rick Goldstien</a> initial idea for this project. Technical progress was also made under his mentorship.</i></p>

## The Idea

For the past few weeks, I have been working part time on training a one-layer language model and reverse engineering the algorithm it has learned. Here, I explain the bit of progress I have made, why other people think this kind of work isn’t tractable, and why they are wrong.

## On Giving Up

During my time at UChicago, multiple accomplished CS professors have expressed during lectures that trying to interpret neural networks is a dead end. One particularly dogmatic professor claimed that nobody really works on interpreting neural networks anymore.

The latter claim is certainly not true! Not only is there a professor at UChicago that specializes in mechanistic interpretability, there is also an interpretability team at Anthropic and DeepMind, along with a number of other teams scattered across academia and industry who have racked up thousands of citations.

However, even some of the figures leading these efforts are losing ambition. The wide-eyed optimism that characterized earlier writing on mechanistic interpretability is turning into something more “pragmatic.” Neel Nanda, who leads the mechanistic interpretability team at Google Deepmind claims that the complete reverse engineering models as a research agenda is “basically doomed”:

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

> My interpretation of the research so far is that models have some human understandable high-level structure that drives important actions, and a very long tail of increasingly niche and irrelevant heuristics and biases.

But shouldn’t we be interested in this long tail? How do we know these effects are truly “irrelevant” unless we document them, and their interactions one by one? The long tail is annoying because it’s hard to spin up some quick results, but potentially by taking the time to understand it, we can construct a better idea of what neural networks are actually doing.

So while I’m sure the language model I am studying has some very salient properties, I expect the main value of this research to be in documenting the less salient aspects of the model one by one.

## Some Early Signs of Progress

Athough I haven't begun investigating indiviual neurons in the tiny language model I am studying, early results indicate that the rules the model has learned aren't exceeding complex. I benchmark subtasks I a suspect a tiny language model will learn against linear models, a Llama 3.1 8B, and human labeling. I find that for narrow enough subtasks, a linear language model matches the performance of humans and Llama 3.1 8B. This indicates that simple linear rules make be able to explain a wide variety of huristics we find in the long tail of alien properties.

In the following sections I describe the methodology of these early results. More work coming soon!

### How to Tokenize a Tiny Language Model

<i>The following tokenizer method was designed entirely by <a href="https://www.linkedin.com/in/rick-goldstein-1a08403a">Rick Goldstien.</a></i>

We use the Tiny Stories Dataset <a href="https://arxiv.org/abs/2305.07759">(Eldan and Li, 2023)</a> and a tokenizer with 1024 tokens. The model takes in 16 tokens but for each of the 1024 tokens in the vocabulary, we construct a new token for each possible possition. This gives us $1024 \times 16 = 16384$ total tokens. This makes things simipler, because we no longer have to parse how the model learns sequence position information for each token.

### Training Linear Models

For each linear model I train, I choose 5 words of interest. For example, I was interested in how the model may choose between conjunctions or reason about the best way to continue sentences that aren't finished after their first independent clause. For this case, I chose 5 conjunctions: "and", "but", "for", "so", and "or".

Recall that each training example has only 16 tokens of context. This means that examples fed into the linear model sometimes lack context that a larger model may have access to. To illustrate this, I have included a few selected training examples:

> Mom, I found this needle. Can you share it with me **and**

> not have any friends. All the other trees were big and strong, **but**

> ax felt better. He said, "Thank you, Owl, **for**

> ives are not toys. You must be very careful with them, **or**

> hoop and chased it around the yard. Tom had **so**

From the examples above you can see that the correct conjunction is often ambiguous. When benchmarking against 50 random training examples, I got 35/50 examples correct and Rick got 37/50 examples correct. This roughly corresponds to the accuracy of Llama 3.1 8B when we take the argmax of only the tokens corresponding to " and", " but", " for", " so", and " or".

We can also get the loss of Llama 3.1 8B by taking the softmax over only the 5 conjunction tokens before finding the NLL. In the training plot for the linear model we trained, the Llama 3.1 8B baseline is shown as the horizontal dotted line.

<img src="/images/lm1.png"></img>

In the above plot, we can see that if the linear model is trained over enough epochs, the validation loss converges to Llama 3.1 8B's loss which is roughly human level.

### Looking Directly at Weights

If we can replace certain decisions in the model (e.g., what conjunction to choose) with a linear model, is this progress?

On one hand, linear models could be viewed as inherently interpretible, but the skeptical reader may have concerns. For example, maybe some weights are high because a certain token only appears one time in the training data. So while looking at the weights, it may look like the model values that token highly. In reality, however, the token is so infrequent that it would only be active on $1/100,000$ examples. In other words, the influence of the wieght is not entirely obivous by only looking at the magnitude.

One easy thing we can do to minimize non-essential wieghts being assigned a large magnitude is some agressive regularization. We add an $L_1$ loss to ensure that there is pressure for the optimization to find solutions with fewer non-zero wieghts.

Next, I manually looked for patterns in the training data to find salient trends that I would expect the linear model to come up with. One example is that the conjunction " but" is almost always preceeded by the "," token. When we check the weights for the "," token at the final possition we get:

<img width="80%" align="center" src="/images/but.png"></img>

This makes sense! The presence of the "," token in the final position greatly increases the probability the model will predict " but".

Another example of a salient property of the training data is the word " was" is often followed by " so". For example:

> it out and saw that it was her triangle She was **so**

> end, Dependable won the race The family was **so**

> Inside the box, Tim found a toy gun. He was **so**

When we check the weights for the final token being " was" we can see the so has a large positive weight:

<img width="80%" align="center" src="/images/so.png"></img>

### What does this tell us?

The hope is these experiments show that linear models can produce results that match human performance on narrow subtasks. Perhaps more importantly however, is that it looks like the weights of these linear models match what we would expect for especially salient characteristics of the data.

We would like to build on these results to find which rules that language models learn are linear and how non-linearities further increase performance. Eventually, we would like to handcraft the entire one-layer tiny language model.

### Interactive Demo

To see weights, tokens with similar weights and different groups of 5 tokens we choose in addition to the conjunctions, visit https://tiny-stories.netlify.app/.

For questions, comments, or feedback, you can shoot me an email at zroe@uchicago.edu.
