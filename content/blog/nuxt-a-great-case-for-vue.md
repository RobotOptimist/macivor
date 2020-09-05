---
title: Nuxt, A Great Case For Vue
description: Different Use Cases For Nuxt
date: 2020-09-01
---

<page-header title="Nuxt: A Great Case For Vue"></page-header>

::: div container-center mt-8

<picture-wrapper file-extension="jpg" file-name="heroes/nuxt_title" alt-text="The Nuxt logo with the text, Nuxt a great case for vue. The quick and easy way to spin up a Vue.js application"></picture-wrapper>

::: div article-container

## I Love Vue

I love Vue.js. It's a fantastic JavaScript framework - easily outclassing in my mind the other offerrings - which is saying something because I think they are cool too. And yeah, they do some things better than Vue. Some of them have done things *before* Vue and Vue adopted it later. But even so, there are solid reasons for preferring Vue.

Just to run through them quickly: 

1. Vue has a great learning curve.
2. It encourages incremental adoption into legacy projects.
3. Development is driven by community needs.
4. Vue maintainers have friendly relationships with other framework maintainers, allowing for a free exchange of ideas and concepts.

## Maybe Some Things Could be Better

There are more points to make here but, let me move on to a criticism of Vue.js - depending on the type of application you intend to build, or the size of the application, scaffolding a Vue.js app, even with the CLI can be a chore. 

Also, there are details around creating the Vue app that must be observed - it's not difficult, but if you intend to use Vuex or Vue router then a small amount of configuration is required before you can spin up a store or expect your routes to work.

There can be quite a bit of variation in where files are kept as well, whether there is a components folder, or how to do the layouts. Certainly the Vue CLI helps with this when it scaffolds a new project, however for Vue router for example, you'll need to continue to modify the router index.js in order to keep an accurate record of routes.

It's small changes, but something that could easily be forgotten as an application continues to grow and change. While it's true that any application, regardless of language or framework will eventually have a checklist of items that need maintained, we should try as best we can to keep the list small and automate when it makes sense.

## Enter Nuxt.js.

If I'm creating a new Vue project, unless it's very small, it's rare when I'll use the Vue CLI instead of using Nuxt. Nuxt makes everything easy. Routing is already preconfigured out of the box and dynamically determined based on the directory structure. It has easily understood options for determining layout, middleware and components.

In fact, you can view the structure of this blog as an example. Here is the [github](https://github.com/RobotOptimist/macivor).

Nuxt can fill many roles. In the case of this blog, it's a git based CMS and static site generator. But I've also used it to create a single page application, providing a rich experience for the browser. It also can be a universal application, providing prerendered or even server side rendered pages very easily. In fact, to create a server side rendered application instead of a single page application here is the line of configuration from nuxt.config.js: 

```
mode: 'universal', // can also be spa
```

It's difficult to describe how Nuxt can be used without providing an example - so lets create a Nuxt application together.

### Example App Requirements

First, lets get some requirements together. 

Let's make this a survey app. It's for fire hydrant inspectors who are required to periodically inspect fire hydrants. So it has these requirements:

1. Requires log in of a user.
2. Collects data about a fire hydrant as a form. (Hydrant serial number and condition)
3. Must work offline (fire hydrants aren't always in proximity to cell towers or wifi).
4. Must transmit fire hydrant data when connected (or reconnected).
5. Made to work on mobile or tablet.

Okay great. Lets make some decisions about the app's architecture then.

It needs a log in, so we'll use Auth0. Auth0 will allow us to integrate with other authentication systems so we can have a support for a variety of fire hydrant inspector companies.

It needs to have a form, so we'll use bootstrap and some sort of easy form validation to cover that requirement. There are newer, better(?), css frameworks available but bootstrap will give us everything we need (and a lot we don't) with very little work.

Hmm, requirements 3, 4, and 5 really point to PWA ([Progressive Web Application](https://web.dev/what-are-pwas/)). So we'll make this app a PWA as well.

OK. Now what? Well all of this can be done via Nuxt. 

### Do It In Nuxt

For authentication we could use [@nuxtjs/auth](https://auth.nuxtjs.org/). This is perfect because it has a built in integration with Auth0. But if I didn't want to use Auth0, it has builtin support for a handful of other Auth providers, or we can extend it to use any Auth provider we need. 

Nuxt auth has a dependency of [@nuxtjs/axios](https://axios.nuxtjs.org/) an ajax library - which is perfect since we'll need that to transmit our form data anyway.

We'll also need to create this form. We'd selected bootstrap, so we'll use [bootstrap-vue](https://bootstrap-vue.org/docs#getting-started-with-nuxtjs) which has a handy Nuxt.js module to make all of this easy. Also, bootstrap-vue has a away to specify which bootstrap features we're using so we can use the Javascript build tool to treeshake out the rest. Great! It's not a perfect fix for bootstrap's drawbacks, but it's something.

Finally, we have this PWA requirement. There is a module for that too. [@nuxtjs/pwa](https://pwa.nuxtjs.org/setup) looks to have everything we need as well. It will handle all of the icon and manifest stuff, and allow us to easily register a service worker and determine what routes and behavior should be used when a user is offline. 

Now, notice all of the things I'm not needing to specify. I don't need to call up Vue router because that's already in the mix. Vuex is also in there, and you can bet we'd create a store to manage our state for this form. 

We create the project by running this command:

```

npx create-nuxt-app <project-name>

```

While this runs it actually gives the option to add almost all of the modules we need. The scaffolding tool will then add and configure the module to reasonables defaults. The only thing we need to add is the @nuxt/auth.

```

npm install @nuxtjs/auth

```

and then we modify the nuxt.config.js to add to the modules property:

```

modules: [
  '@nuxtjs/axios',
  '@nuxtjs/auth'
],

auth: {
  // Options
}

```

The scaffolding tool also helped us to select a testing tool. I chose Jest. 

Thanks for the reminder Nuxt! Testing is important.

Finally, @nuxtjs/auth reminds us that we need to initialize the vuex store by adding an index.js file to the store directory. Nuxt will automatically import vuex and configure it for use when the index.js file is added. (This prevents vuex being added to projects that don't need it.)

Lets take look at what all of this looks like: 

[Here it is!](https://github.com/RobotOptimist/demo_survey_app)


:::

:::