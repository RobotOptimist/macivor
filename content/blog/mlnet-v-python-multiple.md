---
title: ML.NET and Python Multiple Linear Regression
description: Examine differences when doing simple regression in ML.NET and Python
date: 2020-11-28
tags: machinelearning, dotnet, python, ml
---

<page-header title="ML.NET and Python Multiple Linear Regression"></page-header>

::: div container-center

<picture-wrapper :legacy="false" file-name="heroes/robotmlnet-yes_tfryby.png" alt-text="The ML.NET logo with a robot face next to it." classes="hero-height-128"></picture-wrapper>

::: div article-container mt-4

_This is the third in a series talking about the differences in implementation to accomplish machine learning tasks between ML.NET and Python. Don't worry though, you should be able to jump right in to read this post._

::: aside p-8 bg-indigo-100 m-4

However, here are the previous posts if you'd like to take a look.

[Take A Look A ML.NET](/blog/take-a-look-at-mlnet)

[ML.NET and Python Simple Linear Regression](/blog/mlnet-v-python/simple)

:::

## What is Multiple Linear Regression

It is the same thing as simple linear regression but with many more variables. 

Also, data for a successful linear regression must adhere to some core assumptions. 

I list these assumptions out here to potentially satisfy your curiosity. However, understanding these will not be necessary for the ML.NET vs Python implementation comparison. Our data can be assumed to meet the requirements _this time_. 

1. **Linear relationship (Linearity)**: This is an expectation that as your independent variables change the dependent variable also changes in a linear fashion. This is typically tested using scatter plots.
2. **Multivariate normality**: This is about the distribution of the data. So if normal distribution means that the data can be expressed as a bell curve, then multivariate normality means that all of the the independent variables can also be understood as a bell curve. This is not exactly the same as shoving a bunch of variables with normal distribution together. (Although it's possible to do that using a process called [Copulae](https://en.wikipedia.org/wiki/Copula_(probability_theory))) This can be tested by looking at a histogram for each variable and looking for the bell curve.
3. **Low or no multi-collinearity**: This means that the data should not be highly correlated with each other. My reading on this issue is that it is can be detected and remedied the same way as auto-correlation.
4. **No auto-correlation in the data**: This means that the independent variables should not have any sort of hidden dependency on each other. This can be discovered by examining a scatter plot between variable pairs to see if a linear relationship exists. It's okay if you discover hidden dependency as the method to remedy is usually to remove the dependent variable from the regression pipeline.
5. **Homoscedasticity**: This means that as the data progresses on a linear chart that the data points remain compact not a broad cone as the dependent variable progresses. This can be illustrated with the following example. Lets say we have family income as the independent variable and luxury spending as the dependent variable. When income is low luxury spending is low - this is expected. As income grows so does luxury spending - until we get to high levels of income and then luxury spending is highly variable. Some families spend extravagantly while others are more moderate or may never increase luxury spending at all. This can create a wide cone of results which will negatively impact a regression machine learning model.

If you're like me and find these confusing at first then you'll appreciate these links. These really helped me understand these requirements better.

[Assumptions of Linear Regression](https://www.statisticssolutions.com/assumptions-of-linear-regression/)

[What is Multicollinearity](https://www.statisticshowto.com/multicollinearity/)

[Multivariate Normal Distribution](https://brilliant.org/wiki/multivariate-normal-distribution/#:~:text=A%20multivariate%20normal%20distribution%20is,variables%20is%20also%20normally%20distributed.)

[Homescedasticity](https://www.statisticssolutions.com/homoscedasticity/)

## The Data

::: aside p-8 bg-indigo-100 m-4

### Thank you Super Data Science Team

This dataset and the Python information comes from [Kirill Eremenko](https://www.linkedin.com/in/keremenko/) and [Hadelin de Ponteves](https://www.linkedin.com/in/hadelin-de-ponteves-1425ba5b/) along with the [Super Data Science Team.](https://www.superdatascience.com/). They provide an excellent quality [data science course](https://www.udemy.com/course/machinelearning/learn/lecture/19229340) on Udemy. It is reused here with permission.

:::

This data represents a bunch of different startups. Our goal is to predict the profit of a startup. 
<div class="max-h-64 overflow-y-scroll">
    <no-ssr>
        <vue-embed-gist gist-id="7003f85731e1fa3916c521729581eff8" file="50_Startups.csv"></vue-embed-gist>
    </no-ssr>
</div>

We can see as independent variables we have R&D Spend, Administration, Marketing Spend, and the State in which the startup operates. The dependent variable is the Profit.

## Multiple Linear Regression in Python

[Try it for yourself on Binder](https://mybinder.org/v2/gist/RobotOptimist/7003f85731e1fa3916c521729581eff8/HEAD?filepath=multiple_linear_regression.ipynb)

As usual, we start by importing our libraries and reading in the data.

``` python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd

dataset = pd.read_csv('50_Startups.csv')
X = dataset.iloc[:, :-1].values
y = dataset.iloc[:, -1].values
```

Now, however, we need to do a data transformation. The State column cannot be represented as a string. Instead we're going to use tools called OneHotEncoder and ColumnTransformer (both of which are functions imported from classes within the sklearn library) to transform it into three columns, a column for each state. Now we can represent this data numerically. 

You might wonder why a single column with values of 1, 2, and 3 are not used. The answer is that the ML algorithm will then seek to order those values even though there is no real ordering of States in that way. This could result in less accurate prediction results.

``` python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [3])], remainder='passthrough')
X = np.array(ct.fit_transform(X))
```

::: div flex justify-center

<picture-wrapper :legacy="false" file-name="screen-shots/multiple_regression_transformed_data_hvytif" alt-text="An image depicting the transformed data resulting from the OneHotEncoder function." classes="hero-height-128"></picture-wrapper>

:::

:::

:::