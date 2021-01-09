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

## An Opportunity For OSS

I was reading Twitter and saw an interesting series of conversations unfold with David Fowler. He wrote about how you don't need the full enterprise implementation for every little project. He wrote that not every tiny project benefits from dependency injection and repository patterns and so on. He encountered a lot of resistance from .NET developers, but I deeply agreed with what he wrote. Those patterns help on larger projects, but sometimes they're useless bloat and can be discarded for smaller projects. Fowler argued that we should be thoughtful about where and why we use those patterns. While some felt that they would always end up using the patterns (so why not just implement them right away) I recalled instances where I didn't want to deal with the overhead. I've certainly worked on projects with patterns that did not make sense or were implemented poorly. Some patterns are better off not used than implemented poorly.

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



:::

:::