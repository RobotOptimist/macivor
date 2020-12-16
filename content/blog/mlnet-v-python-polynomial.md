---
title: ML.NET and Python Polynomial Linear Regression
description: Examine differences when doing polynomial regression in ML.NET and Python
date: 2020-12-6
tags: machinelearning, dotnet, python, ml
---

<page-header title="ML.NET and Python Polynomial Linear Regression"></page-header>

::: div container-center

<picture-wrapper :legacy="false" file-name="heroes/robotmlnet-yes_tfryby.png" alt-text="The ML.NET logo with a robot face next to it." classes="hero-height-128"></picture-wrapper>

::: div article-container mt-4

## What is Polynomial Linear Regression?

Polynomial linear regression is a bit of a strange customer. Where before our regressions could be consistently described as lines, a polynomial regression is a curve. A polynomial regression is appropriate when there is exponential growth in the dependent variable. 

So something like this simple example:

::: div table-wrapper

| Independent | Dependent |
| ---------- | -------- |
| 1 | 4 |
| 2 | 8 |
| 3 | 16 |
| 4 | 32 |
| 5 | 64 |

:::

Our data looks the same as simple linear regression at first, but upon noticing exponential growth in the dependent variable we need a different equation. A linear regression line will not be accurate.

On data such as this we would need to determine the correct exponent for growth and then apply it to the independent variable. 

In order to perform the regression we need to expand out the independent variable by expanding this equation out for each possible result of 0 - {possible exponent value}. In practice such a transformation would change the above example into something like this.

::: div table-wrapper

|Ind1|Ind2|Ind3|Dependent|
|--|--|--|--------|
|1|1|1|4|
|1|2|4|8|
|1|3|9|16|
|1|4|16|32|
|1|5|25|64|

:::

The reason we still call this linear regression despite the fact the growth curve is exponential is because the independent variables are still expressed linearly. Basically when we see `1, 2, 3, 4 ...` and can say 

"Ok, this variable is growing in a linear way."

Then, even though our dependent variable is growing exponentially we still consider this a linear regression.

## The Data

## Polynomial Linear Regression in Python

## Polynomial Linear Regression in ML.NET

:::

:::