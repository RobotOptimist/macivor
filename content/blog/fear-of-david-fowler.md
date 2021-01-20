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

## Forewarned

This article starts out talking about .NET culture and patterns and swiftly transforms into a discussion on my personal experience contributing to OSS. But if you want to engage with me on the former topic please reach out to me on [Twitter](https://twitter.com/macivortech) or [LinkedIn](https://www.linkedin.com/in/jamesmacivor/). I'd love to hear from you.

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

Fowler's initial 2019 tweet was about his backend [Todo app implementations](https://github.com/davidfowl/Todos) where developers criticized the repo for lacking some of the common patterns found in many .NET projects.

The exchange generated an entertaining and informative back and forth. As I read Fowler's tweets and started to feel like I understood his point of view I felt an affinity for his approach. I even agreed to his stance on testing in that many unit tests do not add value and once again we should exercise good judgement. A blanket requirement for test coverage makes sense for some development teams but sometimes it tramples the question that should be asked: "Do these tests make sense?"

Reading his tweets made me think about all the times I _didn't_ reach for .NET Core for a personal project or proof of concept. Why not? Because it seemed like a lot of overhead. I didn't want my internal code reviewer berating me for not using the patterns necessary for a normal project. I didn't want to show it to another .NET developer and immediately feel like I have to apologize for not having those things - even though in the context of the project it does not make sense! So I'll just write it in Node.js or something because the expectation for fully thought out patterns are not as prevalent. I can focus on the functionality I want to explore and not deal with the overhead of Domain Driven Development or whatever.

Hearing David Fowler sound out a few of those same thoughts made me realize that all of this expectation in .NET isn't necessary. I felt I had permission to also dissent against the tyranny of over-architected patterns.

So, when I saw in late December that Fowler had created a new project called FeatherHttp I was stoked. It appeared to me that this project was a manifestation of his thoughts around .NET bloat. I jumped on it and quickly started buzzing around the threads. I wanted to help write the documentation. I wanted to be a part of this effort. Also, here was a .NET open source project in the initial stages. I felt I could contribute. I was also very excited to work with David Fowler.

## Getting Involved

Have you ever worked with someone who you admired so much that it actively caused you anxiety? I have.

I mean, not at first. At first I was 100% excitement. "Here's a starter template for the docs! Why are we doing this? Let me write the docs with an angle in mind for people who are not .NET. Also, who are we targeting? Should expect .NET familiarity?" So many questions. Buzz buzz buzz.

I create a basic statically generated site to host the docs. I am brimming with enthusiasm as I start trying to convert the examples into docs and show my worth. Things move quickly. I initially think to use Netlify but somebody says "lets use GitHub pages instead" so I reconfigure everything for that. This is actually kind of hard. GitHub pages requires a branch dedicated to the static pages. The static site generator needs to create the files and then GitHub Actions has to pick up that output and commit it to the github-pages branch. It's a solved problem, but just the idea of a dedicated branch only for the static pages seemed pretty different and novel to me. 

Anyway, there are plenty of tutorials and guides to explain how to do that. I was pretty happy once I had a build system figured out and had submitted the PR to David.

I remember feeling so proud. "This is going great."

## Fear

After that I saw there was an opportunity to help out with the GitHub actions to package up the dotnet template into a NuGet package. I had done none of this before and I was excited for the opportunity to learn. I had a fairly bare bones description in the issue but it cited another project that did something similar and I could crib off of that. 

However, there were challenges. The FeatherHttp project used Nerdbank Git Versioning, but the example project did not. Also, the example project used a PowerShell script to set a couple of things up, but along the way David let me know that he's prefer not to use a PowerShell script unless absolutely necessary.

I iterated a lot. I made faulty assumptions and was misled by GitHub issues on other projects. I worked on these GitHub actions every night for a couple of weeks. I submitted several versions of it as a PR and found I was frequently missing the mark.

In fact, it's kind of fun to look back at my [commit history](https://github.com/RobotOptimist/FeatherHttp/commits/ci-changes) for that and just... marvel at the struggle. 

But with each breakthrough in understanding something else was happening. I allowed my insecurity to eat away at me. 

> "Why can't I just _do_ this?" 

David seemed to have the exact idea of what he wanted, and I felt like I was discovering that in jibs and jabs along the way.

I remember how I felt proud when David finally approved the PR and my code merged. I followed it closely to make sure it built properly and the GitHub Actions behaved exactly as I had tested. It worked!

But then, David found an issue and had to fix a few things. I felt like I had failed and missed the mark. 

After that, when my confidence should have been soaring I felt disappointed instead. What I wanted was to talk to David and hear him actually talk about the project. Communicating over GitHub issues and PR comments felt like a poor substitute. 

I puttered around with the docs site for a little while longer, but my anxiety continued its patter. 

## Why So Serious?

David Fowler, among the many software architects and coders that I'm aware of, is a strong leader endowed with uncommon skill, like an Achilles of code or something. Working with him, I believed, would be a step along the way to becoming _like_ him. Where, now I am a strong coder for creating business solutions, I could become like David who is a strong programmer and architect creating tools for other developers to use.

So, my error was allowing David to become larger than life in my own head. The project became overshadowed by my inability to communicate well with David. Also, I felt the eyes of his other followers on me. By becoming part of this journey I opened myself up to scrutiny and criticism. Even though none was forthcoming from other developers, my inner voice provided plenty! I was unprepared for such feelings. I imagined a group of fellow software developers who were unfeeling and unkind, like a host of StackOverflow curmudgeons prepared to descend upon me.

All of this while constructing some docs pages and a few GitHub actions. How can the voices of my insecurity be so loud?

If you have ever suffered from anxiety you know there is a threshold that, when crossed, the anxiety cannot be calmed. No one can say anything to assuage it. There is nothing that can be done except to either walk away if you can, or to soldier on and shove the unpleasant emotions to the side. 

For me, time and emotional distance will eventually lessen the anxiety. In fact, I've come to recognize that when I heap too much expectation on an experience or outcome I will almost surely self-sabotage. I find that keeping calm and resisting excitement is the key to preventing my fears and insecurities from overwhelming me in the face of a big opportunity.

Ultimately, this time, it was important to walk away.

## Remembering Strength

I could think of no way to rid myself of this weakness and so I decided to do the coder equivalent of "hitting the gym." I doubled down on my projects at work and trained hard to be a better technical lead and developer. 

This is not the first time my confidence has betrayed me. I know the cause of it and I know how to recover. The fact is that I'm pretty good at what I do. I occupy a great spot in my local community of developers. I can provide a leg up to less experienced developers, and I can be a steady pillar on a project. These fears rarely surface when I'm in somewhere "doing the work." 

And therein is the answer for me, to practice my craft within a team, either leading or following. I can shine so long as I'm connected to a community of people. I am an extrovert in a field favoring introverts. It's no wonder that OSS is difficult for me as it's lonely hours spent in code away from the life giving connections. Others in OSS seek it out for that same quality. However, fellowship within work is the top coinage that can be offered to me, and I am eternally greedy for it.

Remembering this, I could reflect accurately on my experiences. What I wanted was to speak to David to hear him talk directly about his thoughts and goals and what he believed was right. That is the true work. The code is a reflection of those ideas. Lacking a supply of that, I'm left to create my own meaning based on what I can see written already. And herein I come to my second error.

OSS is a conversation occurring over a long time. Patience is key.

I know this because months later I contributed to a different project, rewriting a section of their docs. I'm tremendously proud of that contribution but it was made with completely different motivations. There was a task I wanted to do that was not accurately covered in the docs. This annoyed me and I decided no one else needed to suffer after me. I wrote up the change and put it in a PR. I felt completely confident in my motivation and my understanding of the project goals. I imagined a shared bond with a bunch of other similarly irritated developers. It all sailed through without a single problem and I felt rewarded. It was the equivalent of saying a single sentence in a very long conversation involving many other developers. This is as it should be. The developers with the vision for the project drive not just the technology itself, but the entire conversation. This conversation happens at a pace with which they are comfortable. 

Now I can see that the fire of enthusiasm I brought into the FeatherHttp project would have better served as a slow burn, ready to be stoked to flames when the time was right.

Further I can see that big personalities don't matter. The code matters. The problem we seek to solve matters. Yes, even your local yokel tech lead can be awed by the fame and technical acumen of others. But the developer versions of the heroes from the Iliad do not walk among us. They don't have Twitter accounts. They are not real. All are normal people, some knowing more than others but still people just the same.

## Onward

Why did I write this? What did I hope to gain by revealing a weakness, no matter if I did learn from it? One thing I hope happens is that others will find their own motivation to contribute to open source. Where I did it because I believed in the project and sought a connection with a person I admired, others will do it because they want to create a better experience for the next developer. Or maybe because they want to learn something new. There are no wrong reasons to contribute. 

Another reason I wrote this is to better understand myself. Sometimes the act of putting a lesson to words defines it and brings it into clarity. This is, after all, a story of me versus myself. These internal struggles happen to all of us and it's good to reveal that. I want you to see that I struggle sometimes. I don't want to forget the lessons learned either.

Also this internal conflict represents a huge reason why people don't want to contribute to OSS. Why wrestle with OSS when I can write code within my team and receive the validation of having done a good job, or the gentle criticism from people who will look me in the eye when they say it. 

Yes, in OSS experience and conviction are assets, just as anywhere. But unlike in a job, for example, we can replace those qualities with patience and determination, where our contributions can be measured out over months instead of sprinted over in a matter of days.

:::

:::