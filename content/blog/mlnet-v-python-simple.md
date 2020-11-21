---
title: ML.NET and Python Simple Regression
description: Examine differences when doing simple regression in ML.NET and Python
date: 2020-11-13
tags: machine-learning, dotnet, python, ml
---

<page-header title="ML.NET and Python Simple Regression"></page-header>

::: div container-center

<picture-wrapper file-name="heroes/robotmlnet-yes" alt-text="The ML.NET logo with a robot face next to it."></picture-wrapper>

::: div article-container

## Why even bother with ML.NET

ML.NET has been around for a few years now, and yet the community excitement has been muted. Don't get me wrong, it definitely exists - but on the whole the sentiment is that this has been solved in other languages so why bother with ML.NET.

This is valid, but it ignores the many companies where the outcomes that can be achieved from machine learning are a goal, but they don't necessarily want to start creating and maintaining a bunch of python projects. Companies that have invested in the .NET stack should look to ML.NET for as an alternative - but how close is it? 

I'll be examining that in a series of blogs. 

First things first, get set up with Jupyter Notebooks and the .NET runtime. [Setup Jupyter Notebooks and .NET](/content/blog/get-set-up-with-dotnet-and-jupyter-notebooks)

Once you're all set up, lets take a look at the data.

## The Data

::: aside p-8 bg-indigo-100

### Thank you

First this dataset and the Python information comes from is from [Kirill Eremenko](https://www.linkedin.com/in/keremenko/) and [Hadelin de Ponteves](https://www.linkedin.com/in/hadelin-de-ponteves-1425ba5b/) along with the [Super Data Science Team.](https://www.superdatascience.com/). They provide an excellent quality [data science course](https://www.udemy.com/course/machinelearning/learn/lecture/19229340) on Udemy.

::: 

Here is the <a href="/data_files/Salary_Data.csv" download="/data_files/Salary_Data.csv">data:</a>

<display-csv file-Name="Salary_Data.csv"></display-csv>

This data has two columns, years of experience and salary. The data suggests that there is a relationship between these two things - so we should be able to do a simple regression to predict a salary based on the years of experience. 

## Simple Regression in Python

First - how do we do this in Python?

[Try it for yourself on Binder](https://mybinder.org/v2/gist/RobotOptimist/4186084f5fbd698c7ba5358e74d5a30e/master?filepath=simple_linear_regression.ipynb)



## Simple Regression in ML.NET




:::

:::