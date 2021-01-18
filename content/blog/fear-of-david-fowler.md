---
title: For The Fear Of David Fowler
description: A story about when I contributed to an OSS project authored by David Fowler.
date: 2020-12-28
tags: coder, developer, dotnet, oss
---

<page-header title="For The Fear Of David Fowler"></page-header>

::: div container-center

::: div article-container

<picture-wrapper :legacy="false" file-name="heroes/career-guy-up-the-steps_f1sjta" alt-text="A suit clad person climbing steps with a case in hand." classes="hero-height-128"></picture-wrapper>

## The Problem With Obligatory Patterns

I was reading Twitter and saw an interesting series of conversations unfold with David Fowler. He wrote about how you don't need the full enterprise implementation for every little project. He wrote that not every tiny project benefits from dependency injection and repository patterns and so on. 

He encountered a lot of resistance from .NET developers, but I deeply agreed with what he wrote. Those patterns help on larger projects, but sometimes they're useless bloat and can be discarded for smaller projects. Fowler argued that we should be thoughtful about where and why we use those patterns. While some felt that they would always end up using the patterns (so why not just implement them right away) I recalled instances where I didn't want to deal with the overhead. I've certainly worked on projects with patterns that did not make sense or were implemented poorly. Some patterns are better off not used than implemented poorly.

You can get a taste of the conversation from the following tweet from February 2020. 

<div class="flex justify-center">
<no-ssr>
    <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">Your .net code does not need 15 projects with a class per command and query. You don’t need an interface for everything either. It’s amazing to read extremely simple samples using .net vs node vs go. It seems our ecosystem is attracted to complexity... 
            <a href="https://twitter.com/hashtag/dotnet?src=hash&amp;ref_src=twsrc%5Etfw">#dotnet</a>
        </p>&mdash; David Fowler #BlackLivesMatter 🇧🇧 (@davidfowl) <a href="https://twitter.com/davidfowl/status/1225996008544460800?ref_src=twsrc%5Etfw">February 8, 2020</a>
    </blockquote> 
    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
</no-ssr>
</div>

Fowler's initial 2019 tweet was about his backend [Todo app implementations](https://github.com/davidfowl/Todos) where devs criticized the repo for lacking some of the common patterns found in many .NET projects.

The exchange generated an entertaining and informative back and forth. As I read Fowler's tweets and started to feel like I understood his point of view I felt an affinity for his approach. I even agreed to his stance on testing in that many unit tests do not add value and once again we should exercise good judgement. A blanket requirement for test coverage makes sense for some development teams but sometimes it tramples the question that should be asked: "Do these tests make sense?"

Reading his tweets made me think about all the times I _didn't_ reach for .NET Core for a personal project or proof of concept. Why not? Because it seemed like a lot of overhead. I didn't want my internal code reviewer berating me for not using the patterns necessary for a normal project. I didn't want to show it to another .NET developer and immediately feel like I have to apologize for not having those things - even though in the context of the project it does not make sense! So I'll just write it in Node.js or something because the expectation for fully thought out patterns are not as prevalent. I can focus on the functionality I want to explore and not deal with the overhead of Domain Driven Development or whatever.

Hearing David Fowler sound out a few of those same thoughts made me realize that all of this expectation in .NET isn't necessary. I felt I had permission to also dissent against the tyranny of over-architected patterns.

So, when I saw in late December that Fowler had created a new project called FeatherHttp I was stoked. It appeared to me that this project was a manifestation of his thoughts around .NET bloat. I jumped on it and quickly started buzzing around the threads. I wanted to help write the documentation. I wanted to be a part of this effort. Also, here was a .NET open source project in the initial stages. I felt I could contribute. I was also very excited to work with David Fowler.

## Getting Involved

Have you ever worked with someone who you admired so much that it actively caused you anxiety? I have.

I mean, not at first. At first I was 100% excitement. "Here's a starter template for the docs! Why are we doing this? Let me write the docs with an angle in mind for people who are not .NET. Also, who are we targeting? Should expect .NET familiarity?" So many questions. Buzz buzz buzz.

I create a basic statically generated site to host the docs. I am brimming with enthusiasm as I start trying to convert the examples into docs and show my worth. Things move quickly. I initially think to use Netlify but somebody says "lets use GitHub pages instead" so I reconfigure everything for that. This is actually kind of hard. GitHub pages requires a branch dedicated to the static pages. The static site generator needs to create the files and then GitHub Actions has to pick up that output and commit it to the github-pages branch. It's a solved problem, but just the idea of a dedicated branch 

## I Fly Too High



:::

:::