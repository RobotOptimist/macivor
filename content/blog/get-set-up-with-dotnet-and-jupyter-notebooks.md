---
title: Setup Jupyter Notebooks With .NET
description: Setup Jupyter Notebooks with the .NET Runtime so you can run .NET code in Jupyter
date: 2020-11-13
tags: machine-learning, dotnet, jupyter-notebooks, notebooks
---

<page-header title="Setup Jupyter Notebooks With .NET"></page-header>

::: div container-center

<picture-wrapper file-name="heroes/robotmlnet-yes" alt-text="The ML.NET logo with a robot face next to it."></picture-wrapper>

::: div article-container

## X Easy Steps

### 1. Download Juptyer Notebooks

Jupyter Notebooks is a product from Anaconda which allows you to run blocks of code in a notebook session. If you haven't seen it before, prepare to be impressed. Jupyter Notebooks is a great way to write code and explain that code along the way. 

To download it, go here: [Anaconda Downloads](https://www.anaconda.com/products/individual#download-section)

Then click the link for the platform you use (I'm using Windows) and download the installer.

Running the installer will present you with a few options. The first option (should Anaconda3 be on the PATH) is not recommended and should probably _not_ be selected. However  the second option is a good choice if you have not already downloaded Python 3.8. (If you have and you attempt to select this then the installer will warn you.)

### 2. Add dotnet to Anaconda

After the installation is completed find the Anaconda prompt from the start menu and run it. 

<picture-wrapper file-name="screen-shots/anaconda_prompt" alt-text="A screenshot of the anaconda prompt shortcut from the windows start menu."></picture-wrapper>

Test to see if you have the .NET SKD installed by typing `dotnet` and pressing enter in the Anaconda prompt. You should see the .NET help options in the prompt: 

<picture-wrapper file-name="screen-shots/dotnet-installed" alt-text="A screenshot of the anaconda prompt where dotnet SDK is shown to be installed."></picture-wrapper>

If you don't then you'll need to install that.
You can do that here: [Install .NET SDK](https://dotnet.microsoft.com/download)

Next you'll need to install the dotnet-interactive tool. From the Anaconda prompt type this command: `dotnet tool install -g --add-source "https://pkgs.dev.azure.com/dnceng/public/_packaging/dotnet-tools/nuget/v3/index.json" Microsoft.dotnet-interactive`

<picture-wrapper file-name="screen-shots/dotnet-interactive-successful-install" alt-text="A screenshot of the anaconda prompt where dotnet-interactive is successfully installed."></picture-wrapper>

Following the successful installation of dotnet-try run this command: `dotnet interactive jupyter install`

<picture-wrapper file-name="screen-shots/install-kernels-and-check" alt-text="A screenshot of the the .net kernels being installed"></picture-wrapper>

### Test the .NET Installation in Jupyter Lab

Finally we can run `jupyter lab` from the Anaconda prompt and see the launcher which will allow us to easily create a new notebook using the runtime of our choice, Python, C#, F#, and PowerShell.

<picture-wrapper file-name="screen-shots/jupyter-lab" alt-text="A screenshot of the running Jupyter lab"></picture-wrapper>

Click on .NET (C#) and test it out.

<picture-wrapper file-name="screen-shots/c-sharp-notebook-test" alt-text="A screenshot C# running in Juypter Notebooks"></picture-wrapper>

:::

:::