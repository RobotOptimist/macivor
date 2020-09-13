---
title: Nuxt, Offline First PWA Tutorial
description: Explains Nuxt and walks through a simple offline first PWA project
date: 2020-09-12
tags: nuxtjs, vuejs, pwa, workbox, bootstrap, tutorial
---

<page-header title="Nuxt: Offline First PWA Tutorial"></page-header>

::: div container-center

<picture-wrapper file-extension="jpg" file-name="heroes/nuxt_title" alt-text="The Nuxt logo with the text, Nuxt a great case for vue. The quick and easy way to spin up a Vue.js application"></picture-wrapper>

::: div article-container

## I Love Vue

I love Vue.js. It's a fantastic JavaScript framework - easily outclassing in my mind the other offerings - which is saying something because I think they are cool too. And yeah, they do some things better than Vue. Some of them have done things *before* Vue and Vue adopted it later. But even so, there are solid reasons for preferring Vue.

Just to run through them quickly: 

::: div max-w-xs md:max-w-md

1. Vue has a great learning curve.
2. It encourages incremental adoption into legacy projects.
3. Development is driven by community needs.
4. Vue maintainers have friendly relationships with other framework maintainers, allowing for a free exchange of ideas and concepts.

:::

## Maybe Some Things Could be Better

There are more points to make here but, let me move on to a criticism of Vue.js - depending on the type of application you intend to build, or the size of the application, scaffolding a Vue.js app, even with the CLI can be a chore. 

Also, there are details around creating the Vue app that must be observed - it's not difficult, but if you intend to use Vuex or Vue router then a small amount of configuration is required before you can spin up a store or expect your routes to work.

There can be quite a bit of variation in where files are kept as well, whether there is a components folder, or how to do the layouts. Certainly the Vue CLI helps with this when it scaffolds a new project, however for Vue router for example, you'll need to continue to modify the router index.js in order to keep an accurate record of routes.

It's small changes, but something that could easily be forgotten as an application continues to grow and change. While it's true that any application, regardless of language or framework will eventually have a checklist of items that need maintained, we should try as best we can to keep the list small and automate when it makes sense.

## Enter Nuxt.js.

If I'm creating a new Vue project, unless it's very small, it's rare when I'll use the Vue CLI instead of using Nuxt. Nuxt makes everything easy. Routing is already preconfigured out of the box and dynamically determined based on the directory structure. It has easily understood options for determining layout, middleware and components.

In fact, you can view the structure of this blog as an example. Here is the [GitHub](https://github.com/RobotOptimist/macivor).

Nuxt can fill many roles. In the case of this blog, it's a git based CMS and static site generator. But I've also used it to create a single page application, providing a rich experience for the browser. It also can be a universal application, providing prerendered or even server side rendered pages very easily. In fact, to create a server side rendered application instead of a single page application here is the line of configuration from nuxt.config.js: 

```
ssr: true, // will be a spa if set to false
```

It's difficult to describe how Nuxt can be used without providing an example - so lets create a Nuxt application together.

### Example App Requirements

First, lets get some requirements. 

Let's make this a survey app. It's for fire hydrant inspectors who are required to periodically inspect fire hydrants (pretty sure this is a fake job). So it has these requirements:

::: div max-w-xs md:max-w-md

1. Requires log in of a user.
2. Collects data about a fire hydrant as a form. (Hydrant serial number and condition)
3. Must work offline (fire hydrants aren't always in proximity to cell towers or WIFI).
4. Must transmit fire hydrant data when connected (or reconnected).
5. Made to work on mobile or tablet.

:::

Okay great. Lets make some decisions about the app's architecture then.

It needs a log in, so we'll use Auth0. Auth0 will allow us to integrate with other authentication systems so we can have a support for a variety of fire hydrant inspector companies.

It needs to have a form, so we'll use bootstrap to cover that requirement. There are newer, better(?), CSS frameworks available but bootstrap will give us everything we need (and a lot we don't) with very little work.

Hmm, requirements 3, 4, and 5 really point to PWA ([Progressive Web Application](https://web.dev/what-are-pwas/)). So we'll make this app a PWA as well.

OK. Now what? Well all of this can be done via Nuxt. 

### Do It In Nuxt

For authentication we could use [@nuxtjs/auth](https://auth.nuxtjs.org/). This is perfect because it has a built in integration with Auth0. But if I didn't want to use Auth0, it has built-in support for a handful of other Auth providers, or we can extend it to use any Auth provider we need. 

Nuxt auth has a dependency of [@nuxtjs/axios](https://axios.nuxtjs.org/) an ajax library - which is perfect since we'll need that to transmit our form data anyway.

We'll also need to create this form. We'd selected bootstrap, so we'll use [bootstrap-vue](https://bootstrap-vue.org/docs#getting-started-with-nuxtjs) which has a handy Nuxt.js module to make all of this easy. Also, bootstrap-vue has a away to specify which bootstrap features we're using so we can use the JavaScript build tool to treeshake out the rest. Great! It's not a perfect fix for bootstrap's drawbacks, but it's something.

Finally, we have this PWA requirement. There is a module for that too. [@nuxtjs/pwa](https://pwa.nuxtjs.org/setup) looks to have everything we need as well. It will handle all of the icon and manifest stuff, and allow us to easily register a service worker and determine what routes and behavior should be used when a user is offline. 

Now, notice all of the things I'm not needing to specify. I don't need to call up Vue router because that's already in the mix. Vuex is also in there and it's a dependency of nuxt auth, but we may not need it ourselves.

We create the project by running this command:

```
npx create-nuxt-app <project-name>
```

While this runs it will allow us some options to pull in some of our dependencies. PWA is an option, but an additional npm installation is required for that. We'll also be using Axios so that could make more sense to use for now. We get bootstrap all set up though, which is nice.

Lets go ahead and pull in the auth module:

```
npm install @nuxtjs/auth
```

And, if you haven't already, make sure to install axios:

```
npm intall @nuxtjs/axios
```

and then we modify the nuxt.config.js to add to the modules property:

``` javascript
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

Next lets pull in the PWA module:

```
npm install @nuxtjs/pwa
```

And lets not forget to set up our manifest!

``` javascript
manifest: {
    name: 'Fire hydrant surveyor',
    short_name: 'Hydrant Surveyor',
    lang: 'en',
    display: 'standalone',
},
```

Nuxt PWA is actually 5 different modules in one, only one of which will need some custom code from us. 

* The icon module - which will configure and make available the icon for the PWA icon.
* The meta module - which will set up some some common options for the mobile application.
* The manifest module - which creates the manifest file with the configured values.
* The workbox module - which allows setting service workers and cacheable resources - this is where we'll be doing the bulk of the work for offline behavior.
* The one signal module - which injects an API which allows for creating push notifications on the mobile device.

Lets take look at what all of this looks like: 

[Here it is!](https://github.com/RobotOptimist/demo_survey_app/tree/initial-setup)


Just like that we have a functioning application with PWA capabilities, a CSS framework and authentication built in.

At this point we should consider our remaining tasks:

1. Create an Auth0 account and add the appropriate info to the nuxt config.
2. Build the appropriate pages with the auth0 log in and the fire hydrant survey form.
3. Add cacheable assets to workbox (included from PWA module).
4. Configure and customize the service worker to handle offline workflow.

Lets go for it. Starting with #1.

[Creating an Auth0](https://auth0.com/signup?&signUpData=%7B%22category%22%3A%22button%22%7D) account is super easy. You can log in using GitHub. Auth0 will automatically set up an application for you. You can then grab all of he information you need for the nuxtjs/auth module. You will need to set up a few things in Auth0 Application Settings, such as allowed origins, allowed callback URIs and similar. You can refer to [Auth0 documentation](https://auth0.com/docs/get-started/dashboard/application-settings) on how to do that.

In nuxt.config.js you'll need to define the redirect and strategies objects. Note that the callback and login cannot be the same value. The module needs to route to a different page in order to finish processing the user data returned from the login event.

``` javascript
auth: {
    redirect: {
      login: '/',
      callback: options.redirectUri
    },
    strategies: {
      local: false,
      auth0: {
        domain: options.domain,
        client_id: options.client_id,
      }
    }
  },
```

The options object is defined in a separate file: auth_config.js. I did this for my project for convenience, but for a real project I would use a .env file so I could inject the correct values for each environment via the CI/CD pipeline.

``` javascript
export const options = {
        domain: '...',
        client_id: '...',
        redirectUri: '/signed-in' //or whatever you configure in Auth0 Application Settings
} 
```

While the values contained therein are not secret it is nonetheless recommended that the file not be checked in to source control. You can later modify this file to have an audience property and to change the values based on build environment.

Next we'll modify the main route to contain a login button. 

``` html
<div class="links">
  <button
    class="button--green"
    @click="login"
  >
    Login
  </button>
</div>
```

and we'll define a login method in the Vue instance.

``` javascript
export default {
  methods: {
    login() {
      this.$auth.loginWith('auth0')
    }
  }
}
```

_Note: As of this writing there is an [issue](https://github.com/nuxt-community/auth-module/issues/750) that requires the installation of an additional npm package._

``` bash
npm install nanoid@2.1.11
```

Now when you test this out you should be redirected to an Auth0 login page. Upon successfully signing up or logging in you will be redirected back to the redirect_uri, which in this example project I set as http://localhost:3000.

Now, lets further modify the component template so as to display something different once we're logged in.

``` html
<div class="links">
  <b-button
    v-if="!$auth.loggedIn"
    variant="primary"
    size="lg"
    @click="login"
  >
    Login
  </b-button>
  <b-button
    v-else
    variant="warning"
    @click="logout"
    size="lg"
  >
    Logout
  </b-button>
</div>
```

Notice we're starting to switch to using bootstrap-vue components for the buttons. The b-button component accepts a variant and a size prop among other things.

Now lets make sure we get the script piece of the page right:

``` javascript
import { mapGetters } from 'vuex'
export default {
  methods: {
    login() {
      this.$auth.loginWith('auth0')
    },
    logout() {
      this.$auth.logout();
    }
  },
  computed: mapGetters(['isAuthenticated']),
}
```

Great! Now with these simple changes we have an application with authentication. So we've got #1 and part of #2 done now.

[Here's the result in GitHub.](https://github.com/RobotOptimist/demo_survey_app/tree/configured-nuxt-auth)

The remainder of #2 is to build the survey form. Lets do that real quick as a component.

Bootstrap-vue makes it all pretty easy. It encompasses the bootstrap classes as components

``` html
<template>
  <b-container fluid>
    <b-form-row>
      <b-col sm="3">
        <label for="serial-serialNumber">Hydrant Serial serialNumber</label>
      </b-col>
      <b-col sm="9">
        <b-form-input
          type="text"
          v-model="serialNumber"
          id="serial-serialNumber"
          placeholder="Enter the hydrant serial serialNumber"
        ></b-form-input>
      </b-col>
    </b-form-row>
    <b-form-row>
      <b-col sm="3">
        <label for="condition">Hydrant Condition</label>
      </b-col>
      <b-col sm="9">
        <b-form-select v-model="condition" :options="options" id="condition"></b-form-select>
      </b-col>
    </b-form-row>
    <b-form-row align-h="end">
        <b-col cols="*">
            <b-button @click="submit">Submit</b-button>
        </b-col>
    </b-form-row>
  </b-container>
</template>
```

A very simple form - we only need a couple of things. We'll be sending the completed result back to the parent by emitting the result. Here is the script portion of the component:

``` javascript
export default {
  data() {
    return {
      serialNumber: "",
      condition: null,
      options: [
        { value: null, text: "Please choose a hydrant condition." },
        { value: "poor", text: "Poor" },
        { value: "fair", text: "Fair" },
        { value: "good", text: "Good" },
        { value: "excellent", text: "Excellent" },
      ],
    };
  },
  methods: {
    submit() {
      this.$emit("submit-form", { serialNumber, condition });
    },
  },
};
```

Now the parent component can handle the result as necessary. Lets take a look at the parent actually. You know what? Lets go ahead and refactor that to use bootstrap-vue as well.

``` html
<template>
  <b-container class="pt-5">
    <b-row align-h="center" class="mt-5">
      <b-col cols="*">
        <h1 class="title">Fire Hydrant Surveyor</h1>
      </b-col>
    </b-row>
    <b-row align-h="center" v-if="$auth.loggedIn">
      <b-col sm="9" class="my-4">
        <survey-form @submitForm="handleFormResult"></survey-form>
      </b-col>
    </b-row>
    <b-row align-h="center" class="mt-3">
      <b-col cols="*">
        <b-button v-if="!$auth.loggedIn" variant="primary" size="lg" @click="login">Login</b-button>
        <b-button v-else variant="warning" @click="logout" size="lg">Logout</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>
```

In the parent we'll also need to import the component and define the handler:

``` javascript
import surveyForm from '../components/survey-form'

export default {
  components: [
    surveyForm
  ],
...
  methods: {
    ...
    async handleFormResult(formObj) {
      //do stuff
    }
  }
```

[Here is the GitHub for this leg of our adventure](https://github.com/RobotOptimist/demo_survey_app/tree/bootstrap-form)

Now we need to figure out what to do with this form data. We'll be sending the data to our server, but how do we want to do that? Also we'll need to create the service worker to handle the offline behavior. 

I found a nice test API someone created so I can send the form data without having to deploy a whole other project, I just needed to massage the data a little bit for it to work.

``` javascript
async handleFormResult(formObj) {
      //https://jsonplaceholder.typicode.com/posts is a test API I'm borrowing 
      //I'm making the data fit because I'm too lazy to make my own test API
      const post = {
        title: formObj.serialNumber,
        body: formObj.condition,
        userId: 1
      }
      try {
        const result = await this.$axios.$post('https://jsonplaceholder.typicode.com/posts', post);
        console.log(result);
      } catch(e) {
        console.log(e);
      }
    }
```

Okay, so now when I send the request I'm getting a result posted to the console. Everything looks good as long as I'm online.

But what about when I'm offline? 

When I initially did this, I looked at a lot of potential solutions - including initiating indexdb and creating a service worker that would detect if I was online and then send the data.

Turns out, all of that is unnecessary because the nuxt/pwa module workbox will take care of it all for us.

In order to enable the behavior we want - which is resending failed requests that occur when the app is offline - we need to create a special plugin for workbox.

In the plugins folder I created a file called ```workbox-sync.js``` and added this code:

``` javascript
const bgSyncPlugin = new workbox.backgroundSync.BackgroundSyncPlugin('formQueue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
});

workbox.routing.registerRoute(
    /https:\/\/jsonplaceholder\.typicode\.com\/posts/,
    new workbox.strategies.NetworkOnly({
      plugins: [bgSyncPlugin]
    }),
    'POST'
  );
```

We are creating a new background sync plugin  and then we're registering that plugin on a route. The workbox register route method takes 3 arguments, a regex for the route (so you can potentially use a regex to define the same behavior for a range of similar routes), a strategy, and the http verb. 

Next you need to add this plugin to the workbox via these lines of configuration in ```nuxt.config.js```:

``` javascript
  pwa: {
    ...
    workbox: {
      cachingExtensions: '@/plugins/workbox-sync.js',
      enabled: true //should be off actually per workbox docs due to complications when used in prod
    }
  }
```

Note that you cannot do imports in the ```workbox-sync.js``` file. The reason is that the plugin is injected into the middle of the sw.js script that the workbox module creates for us. Imports cannot be performed in the middle of a script.

Also, you'll have noticed that I have ```enabled: true``` but per the @nuxtjs/pwa workbox documentation you should not typically do this since it can cause issues when you are switching between dev and production environments. I do it here because it's so convenient.

Now when I run ```npm run dev``` workbox will create the service worker. If I toggle the application to offline via the browser devtools then the posts to the server will fail, but as soon as I switch back to online then the service worker re-sends the requests.

Lets see this in action.

Here we are sending a successful request.

<picture-wrapper file-extension="png" file-name="screen-shots/successful-send" alt-text="Chrome dev tools showing a succesful send to our api" class="overflow-scroll max-w-xs md:max-w-sm lg:max-w-full"></picture-wrapper>

But lets change our status to offline from the dev tools and watch a request fail.

<picture-wrapper file-extension="png" file-name="screen-shots/failed-send" alt-text="Chrome dev tools showing a failed send to our api" class="overflow-scroll max-w-xs md:max-w-sm lg:max-w-full"></picture-wrapper>

Now the service worker takes care of re-sending the request. It will use the same information as what was originally sent, so beware if you are using any sort of expiring authentication data. But if we're reasonable sure the authentication token will remain valid until our users can get back online then this solution will work great.

If you cannot count on that, then you may need to go with an alternate solution where you keep the data upon a failed request in an indexdb using [localforage](https://github.com/nuxt-community/localforage-module). Then you would need to create a custom service worker that would need to determine if you are back online and resend the data using the most recent authentication credentials available.

<picture-wrapper file-extension="png" file-name="screen-shots/successful-retry-send" alt-text="Chrome dev tools showing a succesful retry send to our api" class="overflow-scroll max-w-xs md:max-w-sm lg:max-w-full"></picture-wrapper>

For the final result of our code lets take a look [here.](https://github.com/RobotOptimist/demo_survey_app/tree/pwa-config)

We met all of our requirements with very little custom code.

Now for deployment, Auth0 needs configured to accept my production domain name.

Also, we need to go ahead and refactor out auth.config.js and replace it with .env.

I went ahead and did that, first installing cross-env

```
npm install cross-env
```

Then I created .env file and populated it like so:

```
DOMAIN='dev-iml-5t99.us.auth0.com'
CLIENTID='7ykFnxTHYpleErWfUtCajI6fr4Tfomtm'
REDIRECTURI='/signed-in'
```

I then removed the import of auth.config from nuxt.config and replaced the options with the following:

``` javascript
auth: {
    redirect: {
      login: '/',
      callback: process.env.REDIRECTURI
    },
    strategies: {
      local: false,
      auth0: {
        domain: process.env.DOMAIN,
        client_id: process.env.CLIENTID,
      }
    }
  },
```
Now I can inject the variables via the CI/CD pipeline.

[And here is the final result.](https://epic-ramanujan-cef898.netlify.app/)

Nuxt has a huge variety of libraries and plugins that can help you achieve what you're seeking to do. It's great to get something off the ground quickly so you can hone in on the business needs. 

:::

:::