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

Our data looks the same as simple linear regression at first, but upon noticing exponential growth in the dependent variable we need a different equation. A linear regression line will not be accurate. In fact, observing a regression line from a typical simple regression maybe how we identify the need for a polynomial regression.

On data such as this we would need to determine the correct exponent for growth and then apply it to the independent variable. 

In order to perform the regression we need to expand out the independent variable by expanding this equation out for each possible result of 0 - {possible exponent value}. In practice such a transformation would change the above example into something like this.

::: div table-wrapper

|Independent1|Independent2|Independent3|Dependent|
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

Polynomial regression is commonly used for tasks such as predicting disease spread in a population. 

## The Data

<div class="max-h-64 overflow-y-scroll">
    <no-ssr>
        <vue-embed-gist gist-id="cc82e87e7d2104e58711b7c846a9e220" file="Position_Salaries.csv"></vue-embed-gist>
    </no-ssr>
</div>

Here we have a list of 10 positions within a company and their corresponding salary. You can see also that each position has been assigned a level which grows linearly relative to the salaries which grow exponentially. It really pays to move up!

## Polynomial Linear Regression in Python

What I like about the python implementation is how consistent the steps are. There is very little variation between regression tasks and yet we are still able to get great results. This task has some small variations in terms of the transformation we'll be doing and how we load in the data.

First as usual, we import the libraries we'll need. We need `pandas` to load in the data from our file and `numpy` as it's a dependency of `pandas`. Finally we need `maplotlib.pyplot` to chart and visualize our data and results.

``` python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
```

Now unlike previously we are not loading all of the columns, instead we're using python array syntax to leave out the text column from the data. We can do that because having the `Level` column already does all of the work the text column would do. In fact, if the `Level` column did not already exist we would transform `Position` into something similar. If you recall discussing transformations from [multiple linear regression article](/blog/mlnet-v-python-multiple) then you might remember `OneHotEncoder` which is a function to transform text columns into non-weighted vectors for the trainer to use. In this case though, transforming `Position` into keys makes sense since there is an order inherent to the data.

``` python
dataset = pd.read_csv('Position_Salaries.csv')
X = dataset.iloc[:, 1:-1].values #leaving out the Position column by reading in the data starting at index 1 as opposed to 0 
y = dataset.iloc[:, -1].values #we read in only the last column, Salary for our dependent variable
```

Next we'll want to transform the our `Level` column so we can model can have a proper curve representing exponential growth. Once we do that we can use good old `LinearRegression` trainer to take care of the rest. 

Python has a class called `PolynomialFeatures` that takes care of this transformation for us. Python makes this exceptionally easy as we will soon appreciate. Notice that the `PolynomialFeatures` class takes a constructor argument called degree. Degree will be the exponent we expect the dependent variable to grow by.

``` python
from sklearn.preprocessing import PolynomialFeatures
poly_reg = PolynomialFeatures(degree = 4)
X_poly = poly_reg.fit_transform(X)
lin_reg_2 = LinearRegression()
lin_reg_2.fit(X_poly, y)
```

With that transform out of the way we can go ahead and model the data and do a prediction.

``` python
plt.scatter(X, y, color = 'red')
plt.plot(X, lin_reg_2.predict(poly_reg.fit_transform(X)), color = 'blue')
plt.title('Polynomial Regression')
plt.xlabel('Position level')
plt.ylabel('Salary')
plt.show()
```


## Polynomial Linear Regression in ML.NET

:::

:::