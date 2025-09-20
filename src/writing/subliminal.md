# Early Theory for Subliminal Learning

<p style="text-align: center">By, Zephaniah Roe</p>

<b>Epistemic Status:</b> This document is intended for an intuitive introduction to what we believe may be happening with subliminal learning. We note that these ideas aren’t established in literature and are very speculative.

This post assumes the reader has read and understands [Subliminal Learning: Language models transmit behavioral traits via hidden signals in data](https://arxiv.org/abs/2507.14805)

Starting from an example in 2 dimensions, we work our way up to understanding subliminal learning on a model we trained on the MNIST dataset. Although there is some divergence from the toy example, the MIST student model illustrates some of the same properties observed in the toy models we study.

## Toy Models for Subliminal Learning

Define a teacher model $y = xW_1W_2$ where $x,y \in \mathbb{R}^{1 \times 2}$ and $W_1,W_2 \in \mathbb{R}^{2 \times 2}$. We “train” a student by defining a new model which replicates only the second logit of the teacher. More concretely, let $y \in \mathbb{R}^{1 \times 1}$ and $W_2\prime \in \mathbb{R}^{2 \times 1}$ and solve for a matrix $W_1 \prime \in \mathbb{R}^{2 \times 2}$ such that the student optimally learns the second logit of the teacher. To make subliminal learning possible, we fix $W_2\prime$ to be the second column of the original $W_2$. This allows the student model to have some kind of similar "initialization" to the teacher, analogous to how in [Cloud et al., 2025](https://alignment.anthropic.com/2025/subliminal-learning/) successful subliminal learning requires the same initial weights.

Once we have $W_1^\prime$, we multiply $A\prime=W_1 \prime W_2$ to produce our final student. In the figures below, you can see the columns of $A=W_1W_2$ (the teacher) graphed in yellow and the columns of $A\prime=W_1\prime W_2$ (the student) graphed in blue and pink. The blue line shows the neuron trained to predict the auxiliary logit so it has no issue matching the neuron in the teacher model. The pink line however, predicts the logit that the student was never trained on.

<img src="/src/assets/subliminal1.png"></img>

Although, $W_1\prime$ in the student model is trained only on the second logit, we can see that the first column of $A'=W_1\prime W_2$, often matches the teacher reasonably well. You may notice that both columns of $A\prime$ always lie on the same line. That is because $W_1\prime$ is only trained on a single logit, which makes $W_1\prime$ rank 1, making $A\prime$ rank 1 as well.

## Why This Works

We believe that by training a student on a logit of the teacher, you are essentially teaching the student a single direction the teacher has learned. Now consider a logit the student wasn’t trained on: the direction the student learned will likely not be entirely orthogonal to a direction useful for predicting a different logit. If the weights in the student and teacher in the next layer are similar, the student will have the machinery to decode this direction for a logit it wasn't trained on.

In our toy example, the student learns in $W_1\prime$ a direction the teacher has. All inputs fall on that line. Because we let $W_2$ be the same in both models, if that direction in $W_1\prime$ at all predictive of the first logit of the teacher model, $W_2$ will be able to decode it. We note that in practice, $W_2$ would be different for the teacher and student models if they were trained via gradient descent, which would cause additional noise in our decoding and encoding. We ignored this fact in our explanation to give an intuition of what we believe is happening in larger models.

## Higher Rank Toy Models

What if we train on a second auxiliary logit, making the rank of the student 2? More concretely: let our teacher model be $y = xW_1 W_2$ where $x \in \mathbb{R}^{1\times 2}$, $y \in \mathbb{R}^{1\times 3}$, $W_1\prime \in  \mathbb{R}^{2 \times 2}$, and $W_2 \in  \mathbb{R}^{2\times 3}$. Then we can train our student on the final two auxiliary logits and test similarity to the teacher on the first. When we train these models, we can observe that by graphing the three columns of $A \prime =W_1 \prime W_2$ and $A=W_1 W_2$, the teacher and the student match exactly.

<img src="/src/assets/subliminal2.png"></img>

Why does this work? $A\prime$ and $A$ are both rank 2, so using two auxiliary logits to explain them are sufficient. This solution may even look “too good” to the skeptical reader. Note that in this toy setting we “train” models by finding closed form solutions and we assume weights won't shift a bit the way we suspect they do during gradient descent. We also are using a linear model which doesn’t capture the puzzling dynamics that may emerge when you insert non-linearities at latent layers.

## Demonstration on MNIST Dataset

So, do these toy models of subliminal learning reflect what actually happens in a more complex, larger system? We demonstrate early evidence that they do, by training a teacher and a series of student models from the same initialization of the MNIST dataset. Each student is trained in the same fashion as the MNIST model in Cloud et al, with the only difference being the number of auxiliary logits.

In the figure below, we plot the explained variance of the ranked principal components for the second to last layer in the weight initialization, the teacher model, and students trained on 2, 4 and 8 auxiliary logits (averaged over 3 models with different weight initializations ). We can see that for students trained on 2 auxiliary logits, much higher weight is put on the first two principle components with the rest roughly matching that of the untrained model. We can see that there are roughly 4 principle components above the baseline for the model trained on 4 auxiliary logits and roughly 6 or 7 above the baseline for the model trained on 8.

<img src="/src/assets/subliminal3.png"></img>

To explain the MNIST model from [Cloud et al., 2025](https://alignment.anthropic.com/2025/subliminal-learning/): The student trained on three auxiliary logits learns at least three directions from the teacher that do not exist in a random initialization. But how do these directions get used? The final layer weights are untrained for the 10 classification logits in the student model. So how do they decode these directions? Because the MNIST models come from the same initializations, the final decoding matrix is similar enough to do a noisy decoding and get some digits correct. Therefore, the accuracy is much higher than the baseline but much lower than the student.
