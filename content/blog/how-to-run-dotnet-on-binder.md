---
title: Share Your Dotnet Notebooks on Binder
description: How to share your dotnet jupyter notebooks on binder
date: 2020-11-22
tags: binder, dotnet, jupyter-notebooks, notebooks
---

<page-header title="Share Your .NET Notebooks on Binder"></page-header>

::: div container-center

<picture-wrapper file-name="heroes/robotmlnet-yes" alt-text="The ML.NET logo with a robot face next to it."></picture-wrapper>

::: div article-container

## What is Binder?

[Binder](https://mybinder.org/) is a free online service that allows you to run your jupyter notebooks with other people. It's similar to [Google Colab](https://colab.research.google.com) but does not require a Google login. In fact, all it requires is a public repository with a `.ipynb` file. 

It's a wonderful service and supports many languages right out of the box. To spin up a Python notebook you only need a simple `requirements.txt` file. If you intend to use R or Julia then an `environment.yml` file will do. You can follow Binder's guides to get this up and running.

Sadly, this does not extend to .NET. In order to get a .NET notebook up and running you will need to use a Dockerfile in your repository. The binder service will automatically pick up and build the Dockerfile. There are additional misfortunes for users of .NET notebooks. There are no readily available base Docker images that contain all of the requirements for both .NET and Binder... until now.

I'm happy to provide you with this base docker image: jmacivor/dotnet-binder:0.1.1 which will provide you with the .NET SDK as well as everything necessary to work on Binder. You can then copy in your notebooks and related files and run them easily.

Here is an example of what a working Dockerfile looks like to get you up and running in Binder. Again, you just need something like this in the root of the repository containing your `*.ipynb`. 

``` docker
FROM jmacivor/dotnet-binder:0.1.1

ARG NB_USER=jovyan
ARG NB_UID=1000

USER $NB_USER

ENV HOME=/home/$NB_USER

WORKDIR $HOME

COPY ml_net_simple_regression.ipynb $HOME/ml_net_simple_regression.ipynb
COPY Salary_Data.csv $HOME/Salary_Data.csv
```

Checkout the [gist](https://gist.github.com/RobotOptimist/1bfd719dc621af45a0e633ffa7ecb9ec).

If you're curious about creating your own base image Dockerfile here is mine to use as an example. I hope it helps. 

Here is the [gist](https://gist.github.com/RobotOptimist/818873bd61e03a3c934d79d7612e4107).

```
FROM mcr.microsoft.com/dotnet/core/sdk:3.1-focal

USER root
RUN cd /tmp
# now get the key:
RUN wget https://apt.repos.intel.com/intel-gpg-keys/GPG-PUB-KEY-INTEL-SW-PRODUCTS-2019.PUB
# now install that key
RUN apt-key add GPG-PUB-KEY-INTEL-SW-PRODUCTS-2019.PUB
# now remove the public key file exit the root shell
RUN rm GPG-PUB-KEY-INTEL-SW-PRODUCTS-2019.PUB

# we have to get this because the linux mlnet nuget expects a dependency that only ships with windows.
# so we add the public key as shown above and apt-get install intel-mkl-64bit-2020.0.088 
RUN sh -c 'echo deb https://apt.repos.intel.com/mkl all main > /etc/apt/sources.list.d/intel-mkl.list'

RUN apt-get update \
    && apt-get -y upgrade \
    && apt-get -y install python3 python3-pip python3-dev ipython3 intel-mkl-64bit-2020.0-088

RUN find /opt -name "libiomp5.so"
RUN ldconfig /opt/intel/compilers_and_libraries_2020.0.166/linux/compiler/lib/intel64_lin/

RUN pip3 install --no-cache notebook

ARG NB_USER=jovyan
ARG NB_UID=1000
RUN useradd -m -s /bin/bash -N -u $NB_UID $NB_USER

USER $NB_USER

ENV HOME=/home/$NB_USER

WORKDIR $HOME

ENV PATH="${PATH}:$HOME/.dotnet/tools/"

RUN dotnet tool install -g --add-source "https://dotnet.myget.org/F/dotnet-try/api/v3/index.json" dotnet-interactive

RUN dotnet-interactive jupyter install

```

:::

:::