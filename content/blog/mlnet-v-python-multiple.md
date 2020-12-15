---
title: ML.NET and Python Multiple Linear Regression
description: Examine differences when doing multiple regression in ML.NET and Python
date: 2020-12-6
tags: machinelearning, dotnet, python, ml
---

<page-header title="ML.NET and Python Multiple Linear Regression"></page-header>

::: div container-center

<picture-wrapper :legacy="false" file-name="heroes/robotmlnet-yes_tfryby.png" alt-text="The ML.NET logo with a robot face next to it." classes="hero-height-128"></picture-wrapper>

::: div article-container mt-4

_This is the third in a series talking about the differences in implementation between ML.NET and Python for machine learning tasks. Don't worry though, you should be able to jump right in to read this post._

::: aside p-8 bg-indigo-100 m-4

However, here are the previous posts if you'd like to take a look.

* [Take A Look A ML.NET](/blog/take-a-look-at-mlnet)
* [ML.NET and Python Simple Linear Regression](/blog/mlnet-v-python-simple)

If you want to install ML.NET and setup a .NET notebook environment then I explain how to do that in these posts.

* [Take A Look A ML.NET](/blog/take-a-look-at-mlnet)
* [.NET Interactive Notebooks](/blog/dotnet-interactive-notebooks)
* [Run .NET on Binder](/blog/how-to-run-dotnet-on-binder)
* [.NET and Jupyter Notebooks](/blog/get-set-up-with-dotnet-and-jupyter-notebooks)

:::

## What is Multiple Linear Regression

It is the same thing as simple linear regression but with many more variables. 

Also, data for a successful linear regression must adhere to some core assumptions. 

I list these assumptions out in another [article](/blog/assumptions-of-linear-regression). However, understanding these will not be necessary for the ML.NET vs Python implementation comparison. Our data can be assumed to meet the requirements _this time_. 

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

Now, however, we need to do a data transformation. The State column cannot be represented as a string. Instead we're going to use methods imported from the sklearn library to transform it into three columns, a column for each State. The method that does the majority of the work here is `OneHotEncoder`. Now we can represent this data numerically. 

You might wonder why a single column with values of 1, 2, and 3 are not used. The answer is that the ML algorithm will then seek to order those values even though there is no real ordering of States in that way. Making each State it's own column eliminates that bias.

``` python
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder
ct = ColumnTransformer(transformers=[('encoder', OneHotEncoder(), [3])], remainder='passthrough')
X = np.array(ct.fit_transform(X))
```

::: div flex justify-center my-4

<picture-wrapper :legacy="false" file-name="screen-shots/multiple_regression_transformed_data_hvytif" alt-text="The transformed data resulting from the OneHotEncoder function." classes="hero-height-128"></picture-wrapper>

:::

Aside from that small change the steps are now almost identical to simple linear regression.

We now split into training and test sets.

``` python
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.2, random_state = 0)
```

We train the model using the exact same function as we used for simple linear regression. The `LinearRegression` function is capable of training models for simple and multiple regression. 

``` python
from sklearn.linear_model import LinearRegression
regressor = LinearRegression()
regressor.fit(X_train, y_train)
```

And we can predict the results as normal.

``` python
y_pred = regressor.predict(X_test)
```

Lets see what the results were. Rather than chart the data we will transform it into two columns. The first column will be the predicted profits and the second will be actual profits.

``` python
np.set_printoptions(precision=2)
print(np.concatenate((y_pred.reshape(len(y_pred),1), y_test.reshape(len(y_test),1)),1))
```

::: div flex justify-center my-4

<picture-wrapper :legacy="false" file-name="screen-shots/python-multiple-regression_zttgcs" alt-text="An image depicting the predicted and actual data side by side."></picture-wrapper>

:::

Some of the predictions are pretty good while others are just sort of okay. Nevertheless, given the small sample this is a pretty good result for a multiple linear regression model. It's nice that there are few extra steps to train this model in spite of the fact that the data is much more complex relative to simple linear regression.

In fact, lets calculate the RSquared value as this will be relevant when we look at ML.NET. The RSquared value is a metric we can use to calculate the accuracy of a trainer algorithm.

``` python
from sklearn.metrics import r2_score
print(r2_score(y_test, y_pred))
```
<picture-wrapper :legacy="false" file-name="screen-shots/python-multiple-regression-r2score_dsyro3" alt-text="An image depicting generated RSquared score for the model output."></picture-wrapper>

The score for this regression is 0.9347068473282515, which is quite good given that we have a small data set. The goal for an RSquared score should be to get as close to 1 as possible. Scores at .5 or below means the model is more or less guessing for the prediction.

## Multiple Linear Regression in ML.NET

[Try it for yourself on Binder](https://mybinder.org/v2/gist/RobotOptimist/1adeb410287b0dde2a8bbfd77d38b228/HEAD?filepath=multiple_linear_regression.ipynb)

Right away we start to see some major differences. First off, the algorithm detection experiment from the command-line tool shows some less than encouraging results for the proposed model. 

We can get this output by running the command-line tool against our dataset with this command.

`mlnet regression --dataset .\50_Startups.csv --label-col Profit`

You can read more about the command-line tool [here.](/blog/take-a-look-at-mlnet)

<picture-wrapper :legacy="false" file-name="screen-shots/regression-commandline-output_n1uacy" alt-text="Truly terrible metrics shown for the trainer algorithms in ML.NET"></picture-wrapper>

The columns are not labeled at this stage of the output, but they are AlgorithmName, RSquared, Absolute-loss, Squared-loss, RMS-loss, Duration, Iteration. You can read about how to interpret these results from [Microsoft's guide.](https://docs.microsoft.com/en-us/dotnet/machine-learning/resources/metrics#evaluation-metrics-for-regression-and-recommendation)

But here we are getting negative values for our RSquared values and our other metrics are equally bad. So already things are not equivalent to Python. However, the command-line experiment still did narrow down to the top two training algorithms used for regression. 

1. SdcaRegression
2. FastTreeRegression

Also, recall that in Python we used OneHotEncoder to transform the State column such that it could be more easily used by the training algorithm. At this stage, it's unclear if ML.NET has done the same transformation - although judging by the analysis output it would appear it has not. 

Lets run a quick and dirty test to see if that column is the cause of our bad data by deleting the state column and running the command-line test again.

<picture-wrapper :legacy="false" file-name="screen-shots/regression-commandline-output-nostate_ft08dt" alt-text="I cannot fool you, the metrics shown for these trainers are just awful."></picture-wrapper>

We see an improvement in that the negative numbers are smaller - but still not the kind of output we would like. 

This indicates that the dataset is either too small for the mlnet command-line tool to create or that there is some other issue with the data that causes the mlnet command-line experiment to be no better than a guess as it regards making predictions based on this data.

But lets forgive the command-line tool and move on to see if the actual implementation does better. After all, we took our RSquared score for Python after we had completed a full implementation.  I'd like to see parity with they Python sklearn `LinearRegression` trainer function.

Some of these steps are exactly the same as simple linear regression covered in the previous blog post.

First, we download some NuGet packages and set up our using statements. You'll notice I'm pulling in the NuGet package for the FastTree regression as well - that's because I want to experiment between regression trainers once we establish our test and training datasets.

``` csharp
// ML.NET Nuget packages installation
#r "nuget:Microsoft.ML,1.5.0"
#r "nuget:Microsoft.ML.Mkl.Components,1.5.0"
#r "nuget:Microsoft.ML.FastTree,1.5.0"
//Install XPlot package
#r "nuget:XPlot.Plotly,2.0.0"    
using Microsoft.ML;    
using Microsoft.ML.Data;
using Microsoft.ML.Trainers.FastTree;
using XPlot.Plotly;
using System;
using System.Linq;
```

Second, we set up our classes for input and output. The `Score` property for the output is the predicted profit.

``` csharp
public class ModelInput
{
    [ColumnName("R&D Spend"), LoadColumn(0)]
    public float R_D_Spend { get; set; }


    [ColumnName("Administration"), LoadColumn(1)]
    public float Administration { get; set; }


    [ColumnName("Marketing Spend"), LoadColumn(2)]
    public float Marketing_Spend { get; set; }


    [ColumnName("State"), LoadColumn(3)]
    public string State { get; set; }


    [ColumnName("Profit"), LoadColumn(4)]
    public float Profit { get; set; }


}

public class ModelOutput
{
    public float Score { get; set; }
}
```

Third, we create the MLContext instance and we read in the `.csv` file to create our test and training sets.

``` csharp
var mlContext = new MLContext(seed: 1);

IDataView trainingDataView = mlContext.Data.LoadFromTextFile<ModelInput>(
    path: @"./50_Startups.csv",
    hasHeader: true,
    separatorChar: ',',
    allowQuoting: true,
    allowSparse: false);

var split = mlContext.Data.TrainTestSplit(trainingDataView, testFraction: 0.2);
```

These first three steps don't change much aside from the properties in the models. But now we start to see some interesting differences.

``` csharp
var dataProcessPipeline = mlContext.Transforms.Categorical.OneHotEncoding(new[] { new InputOutputColumnPair("State", "State") })
                                      .Append(mlContext.Transforms.Concatenate("Features", new[] { "State", "R&D Spend", "Administration", "Marketing Spend" }));
```

Ah! Just as Python, we're using a tool called `OneHotEncoding`. Also, just as Python it transform the encoded columns into multiple columns. However, unlike Python it's more difficult to inspect the data to see what it did.

::: aside p-8 bg-indigo-100 m-4

### A Small Discussion on OneHotEncoding in ML.NET

Microsoft does provide a way inspect the transformed data which they go over in their [discussion of the OneHotEncoding function.](https://docs.microsoft.com/en-us/dotnet/api/microsoft.ml.categoricalcatalog.onehotencoding?view=ml-dotnet)

The short of it is you must transform your model back into a DataView using a transform method. Then you can use the MLContext to convert the IDataView into an IEnumerable and inspect it as you would any list.

Here is the useful example from the Microsoft documentation. 

``` csharp
var mlContext = new MLContext();

// Create a small dataset as an IEnumerable.
var samples = new[]
{
    new DataPoint {Education = "0-5yrs", ZipCode = "98005"},
    new DataPoint {Education = "0-5yrs", ZipCode = "98052"},
    new DataPoint {Education = "6-11yrs", ZipCode = "98005"},
    new DataPoint {Education = "6-11yrs", ZipCode = "98052"},
    new DataPoint {Education = "11-15yrs", ZipCode = "98005"}
};

// Convert training data to IDataView.
IDataView data = mlContext.Data.LoadFromEnumerable(samples);

// Multi column example: A pipeline for one hot encoding two columns
// 'Education' and 'ZipCode'.
var multiColumnKeyPipeline =
    mlContext.Transforms.Categorical.OneHotEncoding(
        new[]
        {
            new InputOutputColumnPair("Education"),
            new InputOutputColumnPair("ZipCode")
        });

// Fit and Transform data.
IDataView transformedData =
    multiColumnKeyPipeline.Fit(data).Transform(data);

var convertedData =
    mlContext.Data.CreateEnumerable<TransformedData>(transformedData,
        true);

Console.WriteLine(
    "One Hot Encoding of two columns 'Education' and 'ZipCode'.");

// One Hot Encoding of two columns 'Education' and 'ZipCode'.

foreach (TransformedData item in convertedData)
    Console.WriteLine("{0}\t\t\t{1}", string.Join(" ", item.Education),
        string.Join(" ", item.ZipCode));

// 1 0 0                   1 0
// 1 0 0                   0 1
// 0 1 0                   1 0
// 0 1 0                   0 1
// 0 0 1                   1 0
```

It's a lot more work to view this data in C#, but there are also few reasons you'd want to inspect this data in a production scenario.

It's also good they include an example like ZipCode. Thinking about how this `OneHotEncoding` works and ZipCodes - you might imagine a column with hundreds of unique ZipCodes. Would this mean that `OneHotEncoding` generates hundreds of columns, one for each ZipCode?

Yes. It would. However, you can configure the transform to generate a key encoded column instead, which would encode the data into a single column (and therefore take on the drawbacks of that transform, a potentially less accurate model). 

In the case of ZipCode, when there are hundreds of unique entries, why would you wish to include this data? Might you be better off without it? Or could you transform it into something less granular such as State, Province, County, Shire or what have you. 

ML.NET and Python both provide wonderful tooling for handling data such as this, but ultimately it's still up to us to make reasonable decisions about each data point.

:::

Let's get to training our model!

I ran the mlnet command-line tool multiple times and ultimately the FastTree regression trainer consistently had the least worst RSquared Score. It reached an RSquared Score in the -800s. Abysmal, but still better than before. In the generated project, we see this is how the regression trainer is added.

``` csharp
var trainer = mlContext.Regression.Trainers.FastTree(new FastTreeRegressionTrainer.Options() { NumberOfLeaves = 2, MinimumExampleCountPerLeaf = 10, NumberOfTrees = 100, LearningRate = 0.06297909f, Shrinkage = 0.0986204f, LabelColumnName = "Profit", FeatureColumnName = "Features" });

var trainingPipeline = dataProcessPipeline.Append(trainer);
```

We can then train our model.

``` csharp
var trainingPipeline = dataProcessPipeline.Append(trainer);
```

And now we can perform an evaluation of the trainer. What's the RSquared score now? Keep in mind, RSquared is not the only metric we can evaluate - but it's still a really good one for determining accuracy.

So lets take a look. Here's the code to generate an analysis.

``` csharp
Console.WriteLine("=============== Cross-validating to get model's accuracy metrics ===============");
var crossValidationResults = mlContext.Regression.CrossValidate(split.TrainSet, trainingPipeline, numberOfFolds: 5, labelColumnName: "Profit");
var L1 = crossValidationResults.Select(r => r.Metrics.MeanAbsoluteError);
var L2 = crossValidationResults.Select(r => r.Metrics.MeanSquaredError);
var RMS = crossValidationResults.Select(r => r.Metrics.RootMeanSquaredError);
var lossFunction = crossValidationResults.Select(r => r.Metrics.LossFunction);
var R2 = crossValidationResults.Select(r => r.Metrics.RSquared);

Console.WriteLine($"*************************************************************************************************************");
Console.WriteLine($"*       Metrics for Regression model      ");
Console.WriteLine($"*------------------------------------------------------------------------------------------------------------");
Console.WriteLine($"*       Average L1 Loss:       {L1.Average():0.###} ");
Console.WriteLine($"*       Average L2 Loss:       {L2.Average():0.###}  ");
Console.WriteLine($"*       Average RMS:           {RMS.Average():0.###}  ");
Console.WriteLine($"*       Average Loss Function: {lossFunction.Average():0.###}  ");
Console.WriteLine($"*       Average R-squared:     {R2.Average():0.###}  ");
Console.WriteLine($"*************************************************************************************************************");
```

And here's the result.

<picture-wrapper :legacy="false" file-name="screen-shots/mlnet-least-bad-scores_hxseja" alt-text="Shows metrics for the FastTree trainer that are awful, but not as awful as the commandline report"></picture-wrapper>

These metrics are still truly awful. Should you actually make predictions on the test set you would see it really is no better than a wild guess at this point. It's not even close to the actual profit.

However, we see something encouraging. The actual implementation does improve the score. RSquared is now a mere -2.853. 

It seems at a certain point we cannot trust our mlnet command-line experiments. 

After some manual experimentation with some of the regression trainers I was able to generate this:

``` csharp
var dataProcessPipeline = mlContext.Transforms.Categorical.OneHotEncoding(new[] { new InputOutputColumnPair("State", "State") })
                                      .Append(mlContext.Transforms.Concatenate("Features", new[] { "State", "R&D Spend", "Administration", "Marketing Spend" }));

var trainer = mlContext.Regression.Trainers.Ols(labelColumnName: "Profit", featureColumnName: "Features");
var trainingPipeline = dataProcessPipeline.Append(trainer);
```
That's right, good old `Ols` regression trainer is back again. It did great for the simple linear regression and it continues to perform well enough for the multiple linear regression example.

It evaluated to this:

<picture-wrapper :legacy="false" file-name="screen-shots/mlnet-pretty-much-okay-r2_wozbso" alt-text="Shows metrics of the Ols trainer that are pretty much okay."></picture-wrapper>

We have an RSquared score of 0.909! This is more or less okay I guess! It's still not as good as the RSquared of the `LinearRegression` algorithm from sklearn, but we're much closer.

Now if you compare the predicted profit to the actual profit like so -

``` csharp
var predEngine = mlContext.Model.CreatePredictionEngine<ModelInput, ModelOutput>(model);
var testSet = mlContext.Data.CreateEnumerable<ModelInput>(split.TestSet, reuseRowObject:false);
foreach (var ts in testSet) 
{
    var testInput = new ModelInput() 
    {
        State = ts.State,
        Marketing_Spend = ts.Marketing_Spend,
        R_D_Spend = ts.R_D_Spend,
        Administration = ts.Administration,
        Profit = 0.0F
    };
    var prediction = predEngine.Predict(testInput).Score;
    var actual = ts.Profit;
    Console.WriteLine($"Prediction: {prediction}, Actual: {actual}");
}
```

We see this - 

::: div flex justify-center

<picture-wrapper :legacy="false" file-name="screen-shots/mlnet-side-by-side-profits_s15hne" alt-text="Shows predicted and actual profits side by side"></picture-wrapper>

:::

Not bad! Pretty close in some instances! This is a pretty fair prediction of potential profits.

## Thoughts

It would be easy, and perhaps accurate, to believe that Python is the better tool for this task. 

This is misleading though because the Python steps come from a Udemy course. The data and process were tailored to work well with that ecosystem. 

What are we really seeing here then? 

ML.NET could still use this data and create predictions that were comparable to the Python predictions. Moreover, the tooling with ML.NET set me on a path where I could figure out for myself which training algorithm to use. The command-line tool did not hand me the answers right away, as it did with simple linear regression - but it set me on a path to figure it out.

Still, the sheer simplicity and ease of use from Python cannot be refuted. In Python's sklearn, we are not hunting for a linear regression training algorithm, there is only one: `LinearRegression()`. The parameters for that function are documented and intuitive. 

With ML.NET, I'm reminded of the game Dwarf Fortress. Dwarf Fortress is well known for it's steep learning curve, but many players find the process of learning fun and rewarding. The value is there, hidden under trial and error. Success is found after a series of hilarious trials and failures. 

Also with ML.NET, we also come away with a deeper understanding of what's going on under the hood. As we continue to use it we see opportunities to tweak and change the process to produce better results.

The Python libraries hand us success first and allow us to learn deeply later. 

From a business perspective, Python is the clear favorite, at least in the short term. The business value will be successful predictions from a process created as cheaply as possible. However, in the long term a business would benefit from type safety and the resulting easier maintenance. 

We'll see how ML.NET performs next to Python in my next post which will be looking at the polynomial regression.

:::

:::