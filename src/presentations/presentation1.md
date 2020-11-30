---
date: 21-Nov-2020
id: presentation1
title: presentation1
description: Some text for presentation1
articleLang: 'en-US'
altLang: true
---

# {{ $frontmatter.title }}
<i style="font-size: 0.75em;"> {{ $frontmatter.author }} {{ $frontmatter.date }} </i>

## Bernouli distribution

Bernouli distribution contains categorical variables and they are like qualitative attributes. It has only binary out comes like sucess/failure, yes/no, like/dislike, etc.
With a bernouli random variable, we will have only one trial.

There is nothing in between to find a mean or something else.

Success = 1  
Failure = 0  

The mean is calculated using probability weighted sum

µ = (probability of failure)*0 + (probability of success)*1

If the probability of success is p, then the probability failure will be q = (1-p)

## Example:

SE for a 15 coin flips, If each event is fair & iid

SE = 1/(2√15) = 0.1291 = 12.91%

A set of R commands will return the above value
