# Introducing the XLab AI Security Guide

<p style="text-align: center">By Zephaniah Roe, Jack Sanderson, Julian Huang, </p>

Today we are announcing our first major release of the <a href="https://xlabaisecurity.com/">XLab AI Security Guide</a>: a set of online resources and coding excercises covering canonical papers on Jailbreaks, Finetuning Attacks, propsed methods to "defend" AI systems, and safety evaluations.

We will not go over the content of the course in detail here because the website speaks for itself. The reason we wrote this post is less to document what we did and more to document why we did it and why we believe more of these kinds of resources should exist.

## Why Create AI Security Resources

The formula for grabbing the attention of the AI safety research community is typically 1. highlighting a new and interesting threat model and 2. frame it through an X-Risk lens. But, one could imagine versions of papers such as Alignment Faking or Emergent Misalignment without authors that associate with EA-rationalist circles or without AIS references. Many of these kinds of papers — which are relevant to x-risk but not culturally adjacent to other AIS work — do exist!

One illustrative example: Universal and Transferable Adversarial Attacks
on Aligned Language Models. This paper introduces GCG which jailbreaks LLMs through an optimized sequence of tokens appended to the end of a malicious request. Interestingly, these adversarial suffixes (which appear to be nonsense) transfer across models and different malicious requests. The mechanism that causes these bizarre token sequences to predictably misalign a wide variety of models remains unknown.

This work has been covered by the New York Times and has racked up hundreds of citations. But although your average AI safety researcher is likely familiar with this work, it’s not nearly as widely discussed as it should be. To our annoyance, there are rarely high quality blog-post style explanations or instructional notebooks for work like GCG. If students or early career researchers are interested in diving into these papers further, it’s difficult to know where to start when there isn’t open source code for a paper or if that code isn’t organized or readable.

Because there is already a vibrant ecosystem of elite colleges and companies which publish high quality research on AI Security, we thought it would be useful for someone to parse though it all, find what is relevant, and document it in a readable way.

## Criteria for Inclusion

The two criteria of inclusion in our own guide are “relevance to x-risk” and “pedagogically usefully”. If a particular paper or topic scores exceed highly on one criteria but not the other, we may choose to include it.

By relevance to x-risk we mean work that exposes a vulnerability (or proposes a solution to an existing vulnerability) in machine learning models that could pose a significant threat to humanity. The typical x-risk argument for AI security topics typically focuses on catastrophic misuse, where a bad actor may be able to jailbreak or fine tune a version of a model capable of executing tasks such as building nuclear or bio weapons. Papers that score highly on this criteria in our opinion are Arditi et al, 2024,

By pedagogically useful, we mean papers that are foundational, or illustrate concepts that other more involved papers have built upon. The idea is students should have a place to go to if they would like to learn AI security form the ground up. In other to do that, they will have to start by understanding FGSM, black box attacks, and evaluation methods for computer vision models. This work makes up the foundation of the computer security field and this work is essential to understand, even if it is not directly relevant to x-risk reduction.
