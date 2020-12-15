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

So something like this example:

|Independent|Dependent|
| 1 | 1 |
| 2 | 4 |
| 3 | 9 |
| 4 | 16 |
| 5 | 25 |

:::

:::