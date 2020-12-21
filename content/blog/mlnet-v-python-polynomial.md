---
title: ML.NET and Python Polynomial Linear Regression
description: Examine differences when doing polynomial regression in ML.NET and Python
date: 2020-12-21
tags: machinelearning, dotnet, python, ml
---

<page-header title="ML.NET and Python Polynomial Linear Regression"></page-header>

::: div container-center

<picture-wrapper :legacy="false" file-name="heroes/robotmlnet-yes_tfryby.png" alt-text="The ML.NET logo with a robot face next to it." classes="hero-height-128"></picture-wrapper>

::: div article-container mt-4

_This is the fourth in a series talking about differences implementing machine learning tasks in ML.NET and Python_

_Here are the previous articles if you'd like to peruse them_

* [Take A Look A ML.NET](/blog/take-a-look-at-mlnet)
* [ML.NET and Python Simple Linear Regression](/blog/mlnet-v-python-simple)
* [ML.NET and Python Multiple Linear Regression](/blog/mlnet-v-python-multiple)

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

Our data looks the same as simple linear regression at first, but upon noticing exponential growth in the dependent variable we need a different equation. A linear regression line will not be accurate. In fact, observing a regression line from a typical simple regression may be how we can identify the need for a polynomial regression.

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

::: aside p-8 bg-indigo-100 m-4

### Thank you Super Data Science Team

This dataset and the Python information comes from [Kirill Eremenko](https://www.linkedin.com/in/keremenko/) and [Hadelin de Ponteves](https://www.linkedin.com/in/hadelin-de-ponteves-1425ba5b/) along with the [Super Data Science Team.](https://www.superdatascience.com/). They provide an excellent quality [data science course](https://www.udemy.com/course/machinelearning/learn/lecture/19229340) on Udemy. The data is reused here with permission.

:::

Here we have a list of 10 positions within a company and their corresponding salary. You can see also that each position has been assigned a level which grows linearly relative to the salaries which grow exponentially. It really pays to move up!

## Polynomial Linear Regression in Python

[Try it yourself on Binder](https://mybinder.org/v2/gist/RobotOptimist/cc82e87e7d2104e58711b7c846a9e220/HEAD?filepath=polynomial-regression.ipynb)

What I like about the Python implementation is how consistent the steps are. There is very little variation between regression tasks and yet we are still able to get great results. This task has some small variations in terms of the transformation we'll be doing and how we load in the data.

First as usual, we import the libraries we'll need. We need `pandas` to load in the data from our file and `numpy` as it's a dependency of `pandas`. Finally we need `maplotlib.pyplot` to chart and visualize our data and results.

``` python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
```

Now unlike previously we are not loading all of the columns, instead we're using Python array syntax to leave out the text column from the data. We can do that because having the `Level` column already does all of the work the text column would do. In fact, if the `Level` column did not already exist we would transform `Position` into something similar. If you recall discussing transformations from [multiple linear regression article](/blog/mlnet-v-python-multiple) then you might remember `OneHotEncoder` which is a function to transform text columns into non-weighted vectors for the trainer to use. In this case though, transforming `Position` into keys makes sense since there is an order inherent to the data.

``` python
dataset = pd.read_csv('Position_Salaries.csv')
X = dataset.iloc[:, 1:-1].values #leaving out the Position column by reading in the data starting at index 1 as opposed to 0 
y = dataset.iloc[:, -1].values #we read in only the last column, Salary for our dependent variable
```

Next we'll want to transform the `Level` column so we can model can have a proper curve representing exponential growth. Once we do that we can use good old `LinearRegression` trainer to take care of the rest. 

Python has a class called `PolynomialFeatures` that takes care of this transformation for us. Python makes this exceptionally easy as we will soon appreciate. Notice that the `PolynomialFeatures` class takes a constructor argument called degree. Degree will be the exponent we expect the dependent variable to grow by. In this case we choose four, but you can experiment for yourself with different exponents to see how that changes the curve.

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

::: div flex justify-center my-4

<picture-wrapper :legacy="false" file-name="screen-shots/polynomial-regression-python_oltlxa" alt-text="A scatter chart with a regression line curving up exponentially."></picture-wrapper>

:::

It's all so easy in Python. The tools are very consistent and I find it wasy to find examples with a simple search.

## Polynomial Linear Regression in ML.NET

[Try it yourself on Binder](https://mybinder.org/v2/gist/RobotOptimist/1b7d5fd7bd386e03cb83335a043176e9/HEAD?filepath=mlnet_polynomial_regression.ipynb)

This was a difficult road. Polynomial Linear Regression does not have a built in transform in ML.NET so I needed to devise a custom one. This led to many hours of reading through documentation and simple trial and error to find the correct way to do this.

I did eventually figure it out and I'm glad to share my findings with you. There are gaps in the ML.NET documentation that made this harder than it really needed to be. Once I found the solution it became suddenly simple to do this.

Let us first throw out the mlnet command line tool. For this task it could not really provide us with anything useful. Unlike with multiple linear regression it could not even get us close. 

The generated code also required significant alterations in order to reach our goal, which is a similar result to the Python process. 

This is not to say others have not struggled with this and perhaps found their own way. 

I'm reminded of this [github issue.](https://github.com/dotnet/machinelearning-samples/issues/639)

Or this [stackoverflow question.](https://stackoverflow.com/questions/49976719/write-polynomialfeatures-function-from-scikit-learn-for-f/49996800#49996800)

So lets get started. We do start from the usual place of setting up our using statements and reading in the data.

``` csharp
using System;
using System.Collections.Generic;
using System.Linq;
using System.Composition;
using Microsoft.ML;
using Microsoft.ML.Data;
using Microsoft.ML.Trainers;
using Microsoft.ML.Transforms;
using XPlot.Plotly;
```
I am once again using XPlot to visualize our data.

Here are our proposed input and output classes as well.

``` csharp 
public class ModelInput
{

    [ColumnName("Position"), LoadColumn(0)]
    public string Position { get; set; }

    [ColumnName("Level"), LoadColumn(1)]
    public float Level { get; set; }

    [ColumnName("Salary"), LoadColumn(2)]
    public float Salary { get; set; }
}

public class ModelOutput
{
    public float Score { get; set; }
}
```

And lets read in that data!

``` csharp
var mlContext = new MLContext();
IDataView trainingDataView = mlContext.Data.LoadFromTextFile<ModelInput>(
    path: "./Position_Salaries.csv",
    hasHeader: true,
    separatorChar: ',',
    allowQuoting: true,
    allowSparse: false);
```

The next steps require a lot more thought and alteration from what we've done previously.

The first thing to think about is our transformation. We need to define a custom transformation, but how can we do that?

There are two main ways, one requires a contract be defined on the transformation so that a pipeline can be saved to a file. I don't intend to save my pipeline to a file in any case, but nevertheless I chose to pursue that approach as I believed it would provide anyone attempting to learn from this blog greater flexibility in what they are attempting to do.

We will need to define an output class for our transform. We will also need to pay more attention to the attributes assigned to the class. In particular, as we will be expanding a single vector into a multitude of vectors we will need to define an array of floats in order to capture this change. 

If your intent with a transformation is to change a single property into multiple properties then an array is the simplest way to do this. However, if you have specific and consistent transformations in mind then you may also define new properties on your `TransformOutput` class. We also can now make some guesses at how the `OneHotEncoding` transform works under the hood. (If you remember that dicussion from the [previous entry in this series](/blog/mlnet-v-python-multiple#a-small-discussion-on-onehotencoding-in-mlnet))

The caveat is that we must know the length of the array so we can put the proper value in the attribute. [Per the documentation](https://docs.microsoft.com/en-us/dotnet/api/microsoft.ml.data.vectortypeattribute?view=ml-dotnet), leaving the argument off of the Vector attribute should allow us to put in an array of unknown length. In practice this does not work and an error will be thrown upon attempting to fit the data.

For polynomial transforms the array size will be the exponent value plus one. So, if I have an exponent of four, than the array size will be five.

``` csharp
public class TransformOutput
{
    [VectorType(5)]
    public float[] Features {get;set;} 

    public float Salary { get; set; }
}
```

Now we can create our custom transform. I'd like it to receive the same inputs and produce the same outputs as the python transform. 

``` csharp
[CustomMappingFactoryAttribute("Features")]
public class PolynomialFeatures : CustomMappingFactory<ModelInput, TransformOutput>
{

    private readonly int _degree;
    public PolynomialFeatures(int degree)
    {
        _degree = degree;
    }

    public void Transform(ModelInput input, TransformOutput output)
    {
        output.Features = Enumerable.Range(0, _degree + 1).Select(i => (float)(Math.Pow(input.Level, i))).ToArray();
        output.Salary = input.Salary;
    }

    public override Action<ModelInput, TransformOutput> GetMapping()
    {
        return Transform;
    } 

}
```

Note that this implementation is good enough for our trivial example, but if you start dealing with extremely large numbers you'll need to likely use a better implementation. The requirements are that the transformation must be threadsafe and the transformation must not have side effects. So no altering of anything aside from the output parameter.

I tested my custom transform just to make sure it was good to go. Note that the VectorType array length requirement does not matter until we reach the `Fit` method of the pipeline onto the data.

``` csharp
var polyFeaturesTest = new PolynomialFeatures(2); //array length not required to match VectorType... yet
var testInputs = Enumerable.Range(1, 10).Select(i => new ModelInput() {Level = i});
var testOutputs = testInputs.Select(ti => 
{
    var testOutput = new TransformOutput();
    polyFeaturesTest.Transform(ti, testOutput);
    return testOutput;
});
display(testOutputs)
```
<picture-wrapper :legacy="false" file-name="screen-shots/mlnet-polynomial-transform-test_hlklt1" alt-text="A table showing the results of the custom transform."></picture-wrapper>

Now we can create the pipeline. Since we transformed the `Level` column and `Level` is a tokenized version of `Position` I chose to drop both `Level` and `Position`. I only need the transformed feature to proceed with the regression training.

For trainer, neither `SDCA` or `FastTree` do a great job here. In fact, both produce some hilarious results. Here is SDCA for example. (If you do use `SDCA` don't forget to set `maximumNumberOfIterations` as a parameter for the trainer, otherwise you'll be waiting around for fine minutes.)

<picture-wrapper :legacy="false" file-name="screen-shots/sdca_polynomial_fail_hjfzcy" alt-text="A chart where the SDCA regression curve goes off into the negative trillions."></picture-wrapper>

So I keep coming back to the `Ols` trainer. It works super well with very little configuration! The only problem with it is that it requires a dependency not naturally available on Linux. It's really a shame because it's the closest we get to the easy functionality of the python sklearn `LinearRegression` trainer.

Lucky for you, I do show how to install that dependency on Linux [while discussing how to get up and running using binder.](/blog/how-to-run-dotnet-on-binder)

Anyway, here we are training with `Ols`.

``` csharp
var polyFeatures = new PolynomialFeatures(4);
var dataProcessPipeline = mlContext.Transforms.CustomMapping<ModelInput, TransformOutput>(polyFeatures.GetMapping(), contractName: "PolynomialFeatures")
                            .Append(mlContext.Transforms.DropColumns("Position", "Level"))
                            .Append(mlContext.Transforms.Concatenate("Features", new[] {"Features"}));

 var trainer = mlContext.Regression.Trainers.Ols(featureColumnName: "Features", labelColumnName: "Salary");
 var trainingPipeline = dataProcessPipeline.Append(trainer);
```

And then training the data is once again easy in terms of lines of code, but if there is an issue in your pipeline this is where it will manifest.

``` csharp
var transformedDataView = trainingPipeline.Fit(trainingDataView).Transform(trainingDataView);
var transformedData = mlContext.Data.CreateEnumerable<TransformOutput>(transformedDataView, reuseRowObject: false);
display(transformedData);
var model = trainingPipeline.Fit(trainingDataView);
```

For fun, I'm also now showing the result of our transformation.

<picture-wrapper :legacy="false" file-name="screen-shots/ols-train-polynomial_fxvq5m" alt-text="A table showing transformed data."></picture-wrapper>

And at last we have the results of all of this - it's nearly identical to the python result.

<picture-wrapper :legacy="false" file-name="screen-shots/ols-result-polynomial_djy2aim" alt-text="A chart showing a near perfect polynomial regression curve."></picture-wrapper>

## Thoughts

Whew. What a ride. I mean, ML.NET really had me running to figure stuff out!

But there is value in that. I understand regression in ML.NET a lot better than I did. I read through a lot of their transformer implementation while researching the custom transformer.

I have questions for the ML.NET maintainers. For example, why not re-implement the sklearn transformers and trainers? They took a way different path that requires a lot more work to use this library. I'll be seeking out an ML.NET engineer to interview to answer these and other questions. We'll see if any of them feel inclined to talk to me. I respect the work they've done here. It does feel like they did not write this to compete with python, or to even do the same things as Python. I can't find any information to corroborate this, but it seems like they had different goals in mind. I'd like perspective on that.

I am not discouraged though! If anything, this series has inspired me to keep learning deeply about these different implementations. ML.NET is young enough that it has a lot of catching up to do. Don't forget that the scikit-learn (sklearn) repository has been in active development since 2007 while ML.NET was started in 2018. 

I've invited a guest to co-write the next article with me. He's a Java developer and so for the first time we'll be attempting to compare implementations between .NET, Python and Java. We'll be discussing which machine learning task will be the most interesting to compare. If you have an opinion on that then you should definitely let me know via the contact me form.

Either way, eventually I'll be talking about Support Vector Regression! So look for that as well.

:::

:::