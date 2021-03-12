---
title: VSCode .NET Interactive Notebooks
description: A .NET friendly alternative to Jupyter Notebooks that runs in VS Code
date: 2020-11-25
tags: machinelearning, dotnet, vscode, notebooks
image: heroes/robotmlnet-yes_tfryby
alttext: The ML.NET logo with a robot face next to it.
---

## Where Jupyter Notebooks Falls Short

Do you love intellisense? I do. 

Which is why working in Jupyter Notebooks can be so frustrating. Part of the benefits of a strongly typed language is to enable tooling that can make us more efficient developers.

## VS Code Extension

Well, lucky for us the folks who develop .NET Interactive love and support us. They have created an extension for VSCode called [.NET Interactive Notebooks](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.dotnet-interactive-vscode)

Now before you go and download this extension be aware that it is in _preview_ and only will work with [Visual Studio Code Insiders](https://code.visualstudio.com/insiders/). This is just a fancy way of saying that it's in active development and stuff will be broken.

That said, lets take a look at how well it works at the moment.

### The Setup Experience

In order to get Visual Studio Code to set everything up properly you'll need to attempt to open a .ipynb file.

You can use the [one from my gist](https://gist.github.com/RobotOptimist/1bfd719dc621af45a0e633ffa7ecb9ec#file-ml_net_simple_regression-ipynb) if you don't have another one handy.

You'll be prompted to install the Python extension. Also, if you had the .ipynb file open when Python installed then you may need to close and reopen it. VSCode will also handle installing .NET Interactive in the background. In fact, VSCode is doing so much for me automatically it was a pretty nice experience to get setup.

Once everything is setup you should see the notebook render properly:

<picture-wrapper file-name="screen-shots/ipynb_in_vscode" alt-text="A screenshot of an interactive notebook." classes="hero-height-128"></picture-wrapper>

So, that's a fairly friendlier experience than Jupyter Notebooks - but do I get my intellisense?!

The answer is... I do!

<picture-wrapper file-name="screen-shots/intellisense_yay" alt-text="A screenshot of an interactive notebook." classes="hero-height-128"></picture-wrapper>

So I know how _I'll_ be writing my .NET notebooks from now on!

But if you still prefer Jupyter Notebooks then [here is the guide to get set up with that too.](/blog/get-set-up-with-dotnet-and-jupyter-notebooks)

