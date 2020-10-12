---
title: Tale of Terror - A Scary Web Dev Story
description: The story of a project gone awry.
date: 2020-10-12
tags: webdev, developer, Halloween
---

<page-header title="Tale of Terror - A Scary Web Dev Story"></page-header>

::: div container-center

<picture-wrapper file-extension="jpg" file-name="heroes/jackolanterns" alt-text="A collection of lit jackolanterns with a dark background." attribution="Mark Menzies" attribution-link="https://www.flickr.com/photos/markybon/1813406901"></picture-wrapper>

::: div article-container

## A Warm October

My story takes place in 2016-2017. I was hired by a consulting company to work on an EPiServer (CMS) implementation for a client. My skill level at the time was probably just barely mid-level, but mainly in C# and .NET tech, not so much with JavaScript. I was a pretty fair hand with the internals of the CMS though so I thought I could figure it out, also I reasoned that my tech lead had a decade of experience so I could lean on him a little bit.

Arriving on site, the first thing the client told us was "No frameworks, plain JavaScript / jQuery only". 

Okay, I thought, but then won't it take longer for us to have a reactive site? But there was more.

"We'll be ajaxing in the widgets from the CMS to other projects so the JavaScript can't conflict with any of those projects."
When I asked what version of jQuery the other projects were using he said "Oh, various. Some are on version 2, others on version 1.9. That's not a problem, right?"

This sounded bad to me - wouldn't that be rough to know whether our code would work if we couldn't be sure what dependencies were available?

My tech lead was confident though - "No problem! We can do it!"

Okay, whew, well at least my tech lead had the goods. Over the next week or so while we familiarized with the project, the client would make some more restrictions around the JavaScript and CSS to use. Like no build steps for JavaScript, no jQuery plugins, etc etc. 

The tech lead would sagely nod his head. "No problem!" He'd say.

## A Cold November 

One day I was working on some frontend stuff and had a problem. I was inexperienced with JavaScript and CSS and some elements just would not position themselves correctly. I asked my tech lead for help. As I'm explaining the problem he gestures at my screen and says "What is this tool you're using here?"

I had a dual monitor set up. One screen had the page and the other had Chrome Dev Tools. I didn't have anything fancy on the screen so I was puzzled.

::: div dialogue-container

"What do you mean? The console? Or something else?"

"No, what is this tool? It seems pretty useful."

"You mean... Chrome Dev Tools?"

"Oh! Is that what that is? That's built into Chrome then?"

:::

My heart was in my stomach. Did he not know Chrome Dev Tools? What else might he not know? Am I the one who's wrong? Maybe dev tools aren't standard tooling for all web dev. 

From a place of pure self doubt I withheld judgement and explained the tools. Then I asked "So what do you use?"

He showed me how he worked through JavaScript using an elaborate system of alert statements to debug his code. I kept my face straight, but internally I knew. I was in danger.

::: div flex justify-center my-4

::: div giphy-container

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/55itGuoAJiZEEen9gg" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/reaction-55itGuoAJiZEEen9gg">via GIPHY</a></p>

:::

:::

I soon learned that he also didn't know MVC. He elected to keep the demo project originally because he didn't know how to start with a clean project. He also didn't know JavaScript too well, he asked me if I had ever used Moo Tools. This was the first time I had ever heard of Moo Tools. 

::: div dialogue-container

"I'm so glad you're on this project and can help me out with this stuff." He said to me one day. 

Cold sweat trickled down my spine. I smiled. 

"Sure. No problem."

:::

Over the weeks he struggles with user stories and I pick up more. Soon, the client was bypassing him and asking me directly to plan and implement the features.

## The Real Horror Begins

::: div flex justify-center my-4

::: div giphy-container

<div style="width:100%;height:0;padding-bottom:140%;position:relative;"><iframe src="https://giphy.com/embed/FJh8oUprQx8w8" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/halloween-trick-r-treat-movie-FJh8oUprQx8w8">via GIPHY</a></p>

:::

:::

I, barely a midlevel developer, start to plan the architecture of our little piece of the project. The .NET piece seems fine just following the established patterns I already knew. The JavaScript left a lot to be desired. I read a lot. I made friends with developers on other projects and started asking them lots of questions. I was determined to nail this. I believed I could do it.

I decided that since we couldn't use frameworks but needed framework like behavior then I would build my own custom framework. A mini-framework. Just enough to get things working. I started writing JavaScript - **a lot of JavaScript!** 

I had read about something called [MutationObserver](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) which is something in JavaScript that allowed me to observe changes to elements and then react to them. I decided that would be the core of my project. I built a central engine around this. I made JavaScript functions representing pieces of functionality I needed and overloaded the prototype to get the functionality I needed. 

::: div flex justify-center my-4

::: div giphy-container

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/YQitE4YNQNahy" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/YQitE4YNQNahy">via GIPHY</a></p>

:::

:::

I created a custom dependency injection setup for my functions. I believed I could create something similar to Angular.js, just a touch simpler. I worked late every night for weeks. I was marking features as completed but I would frequently revisit them. 

**Really, nothing was ever finished because I kept changing it.** 

I worked into a delirium. I worked until I thought I was crazy. 

I believed, I really believed I was making a fairy tale palace of JavaScript. You read this and you think you know how bad it was.

::: div flex justify-center my-4

::: div giphy-container

<div style="width:100%;height:0;padding-bottom:105%;position:relative;"><iframe src="https://giphy.com/embed/gzUvbluaZdneo" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/black-and-white-horror-scary-gzUvbluaZdneo">via GIPHY</a></p>

:::

:::

It was worse.

## The Dungeon

Things were getting close to completed, or so I thought. But everything always seemed to be broken. 

Things happened on the site but I had no idea why. Race conditions abounded. The off-by-one errors had off-by-one errors.

Slowly, painfully, I began to realize that this was my fault. My design was flawed. My assumptions, wrong. All the work, the long hours - wasted. I became bitter. 

I was behind schedule but I was not alone. Every project the client had seemed to be struggling. The depth of the issues in the application I was working were lost as other pieces of the project seemed to fly off the rails. One project team eventually admitted they had completely forgot to implement security. Other teams scrambled to offer personnel for a "security task force" to "shore up" the security. One senior level project manager joked "Well it's like we built the car and forgot to put locks on the doors 🤷‍♂️ Oopsies!"

::: div flex justify-center my-4

::: div giphy-container

<div style="width:100%;height:0;padding-bottom:75%;position:relative;"><iframe src="https://giphy.com/embed/pnPfFgZi3lnO" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/pnPfFgZi3lnO">via GIPHY</a></p>

:::

:::

I kept sliding more and more fixes in, trying to fix my app - to make it good even. A good result seemed so close, yet so far away. I started to feel trapped within a prison of my own making. No one could really help me either. My tech lead was still there, but seemed lost and confused. He had been marginalized and now I owned this mess. The consultancy had long ago let me know that their hands were tied. I had made them aware of the situation with the tech lead and they had confirmed the problem, but could not act without disrupting the project. 

**I had turned this opportunity into an exercise in hubris.**

The client, realizing that there might be some issues maintaining the application after I left, assigned one of their own developers to the team. I went over the project and we laughed at it with typical gallows humor. We were now both imprisoned.

However, things started getting better. Now I had someone to bounce ideas off of. We began to conspire a way out of this mess. We were going to introduce Vue.js.

**Perhaps I would not be hoisted by my own petard!**

Vue.js was designed around being able to incrementally refactor. It was small and fast and we didn't need anything except the core functionality. It worked just fine alongside jQuery and we found a way to make it work with Angular.js. 

**We were saved!**

Slowly, we started to see bugs disappear. Things were working faster and more reliably. The code started to look less like a mess and more like something we could maintain. 

But the project as a whole was not getting better. Project management wanted more late nights. They wanted more sacrifices. Code for the Code God!

## Escape From New Work

At last, I had enough. I'd worked on the project for about 8 months and I didn't see anything that made me want to stay.

The consultancy I worked for had promised a $500 bonus if I stayed another 7 months, but I wasn't interested in peanuts. The client had pulled me into a room with three project managers and let me know it was time to start working 12 hour days. When I refused ( I wasn't getting paid for that time after all ) the handler from the consultancy emailed me from his tropical vacation letting me know that "You will comply with the overtime request."

**It was time to get out.**

::: div flex justify-center m-4

<picture-wrapper file-extension="jpg" file-name="escape-from-new-work" alt-text="The box art for the 90s classic film: Escape From New York with title changed from New York to New Work"></picture-wrapper>

:::

I did have one person who I owed an explanation though, and that was my co-conspirator developer who helped introduce Vue.js. Thing was, he completely understood - in fact he was already looking too. We were going to abandon this project and let this app fend for itself. The Vue.js refactoring had a long way to go, but neither of us could stomach the other dysfunctional pieces of the project.

I found another job that prioritized work/life balance and left. After a couple of weeks I referred my new friend and he left as well. 

**We ran out like the building was on fire.**

## Beware

That project is still there. Years later I saw wanted ads from the company. "EPiServer developer needed! JavaScript experience a must! Vue.js experience preferred!"

::: div flex justify-center my-4

::: div giphy-container

<div style="width:100%;height:0;padding-bottom:56%;position:relative;"><iframe src="https://giphy.com/embed/kmdSKqlSHQJMs" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/danger-law-school-lawblr-kmdSKqlSHQJMs">via GIPHY</a></p>

:::

:::

The refactor is still in progress. The old broken JavaScript still scraping by.

Fellow developers, the dungeon I created still exists, seeking new inmates. That JavaScript "framework", a monster that few can slay. When you're out there, scrolling through ads thinking about your next gig, remember this. 

**Be diligent lest you also be imprisoned!**

## But Hey I'm Fine

::: div flex justify-center m-4

<picture-wrapper file-extension="jpg" file-name="bad-dev" alt-text="A guy at a computer desk hoists his mug at the camera. A caption reads 'Writes Unmaintainable Code, Leaves Company'" attribution="Is this me? Am I the monster?"></picture-wrapper>

:::

:::

:::