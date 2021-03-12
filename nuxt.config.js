const fs = require('fs').promises;
const path = require('path');

let posts = [];

const constructFeedItem = async (post, dir, hostname) => {  
  const filePath = path.join(__dirname, `dist/rss/${post.slug}/index.html`);
  const content = await fs.readFile(filePath, 'utf8');
  const url = `${hostname}/${dir}/${post.slug}`;
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description,
    content: content
  }
} 

const createSitemapRoutes = async () => {
  let routes = [];
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content('blog').fetch();
  for (const post of posts) {
    routes.push(`blog/${post.slug}`);
  }
  return routes;
}

const create = async (feed, args) => {
  const [filePath, ext] = args;
  const hostname = process.env.NODE_ENV === 'production' ? 'https://www.macivortech.com' : 'http://localhost:3000'
  feed.options = {
    title: "James MacIvor's Blog",
    description: "Technology, Business, Teaching and Mentoring",
    link: `${hostname}/feed.${ext}`
  }
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content(filePath).fetch();

  for (const post of posts) {
    const feedItem = await constructFeedItem(post, filePath, hostname);
    feed.addItem(feedItem);
  }
  return feed;
}

export default {  
  target: 'static',
  head: {
    title: 'James MacIvor Website' || '',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'All about my career, my company and my blog.' || '' },
      { name:"msapplication-TileColor", content:"#ffffff"},
      { name:"msapplication-TileImage", content:"/ms-icon-144x144.png"},
      { name:"theme-color", content:"#ffffff" }
    ],
    link: [
      { rel:'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"apple-touch-icon", sizes:"57x57", href:"/apple-icon-57x57.png" },
      { rel:"apple-touch-icon", sizes:"60x60", href:"/apple-icon-60x60.png"},
      { rel:"apple-touch-icon", sizes:"72x72", href:"/apple-icon-72x72.png"},
      { rel:"apple-touch-icon", sizes:"76x76", href:"/apple-icon-76x76.png"},
      { rel:"apple-touch-icon", sizes:"114x114", href:"/apple-icon-114x114.png"},
      { rel:"apple-touch-icon", sizes:"120x120", href:"/apple-icon-120x120.png"},
      { rel:"apple-touch-icon", sizes:"144x144", href:"/apple-icon-144x144.png"},
      { rel:"apple-touch-icon", sizes:"152x152", href:"/apple-icon-152x152.png"},
      { rel:"apple-touch-icon", sizes:"180x180", href:"/apple-icon-180x180.png"},
      { rel:"icon", type:"image/png", sizes:"192x192",  href:"/android-icon-192x192.png"},
      { rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32x32.png"},
      { rel:"icon", type:"image/png", sizes:"96x96", href:"/favicon-96x96.png"},
      { rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16x16.png"},
      { rel:"manifest", href:"/manifest.json"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/globalComponents'
  ],

  components: true,

  content: {
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-177865005-1'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/dotenv',
    '@nuxt/content',
    '@nuxtjs/feed',
    '@nuxtjs/sitemap',
    '@nuxtjs/cloudinary'
  ],

  cloudinary: {
    cloudName: 'macivortech'
  },

  sitemap: {
    hostname: 'https://www.macivortech.com',
    gzip: true,
    routes: createSitemapRoutes
  },

  feed: [
    {
      path: '/feed.xml',
      create,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: [ 'blog', 'xml' ]
    },
    {
      path: '/feed.json',
      create,
      cacheTime: 1000 * 60 * 15,
      type: 'json1',
      data: [ 'blog', 'json' ]
    }
  ],

  svgLoader: {
    svgoConfig: {
      plugins: [
        {removeTitle: false}
      ]
    }
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: false,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      
    }
  }
}
