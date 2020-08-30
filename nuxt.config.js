let posts = [];

const create = async (feed) => {
  feed.options = {
    title: "James MacIvor's Blog",
    description: "Technology, Business, Teaching and Mentoring",
    link: process.env.NODE_ENV === 'production' ? 'https://www.macivortech.com/feed.xml' : 'localhost:3000/feed.xml'
  }

  // eslint-disable-next-line global-require
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0)
    posts = await $content('blogs').fetch()

  posts.forEach((post) => {
    const url = process.env.NODE_ENV === 'production' ? `https://www.macivortech.com/blog/${post.slug}` : `localhost:3000/blog/${post.slug}`
    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.stuff
    })
  })
}

export default {
  mode: 'universal',
  target: 'static',
  head: {
    title: 'MacIvor Website' || '',
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

  content: {
    markdown: {
      remarkPlugins: [
        'remark-containers',
        'remark-bracketed-spans'
      ]
    }
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/dotenv',
    '@nuxt/content',
    '@nuxtjs/feed'    
  ],

  feed: [
    {
      path: '/feed.xml',
      create,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2'
    },
    {
      path: '/feed.json',
      create,
      cacheTime: 1000 * 60 * 15,
      type: 'json1'
    }
  ],

  hooks: {
    'content:file:beforeInsert': async (document) => {
      const { Database, getOptions } = require('@nuxt/content')

      const database = new Database(getOptions())

      if (document.extension === '.md' && document.body) {
        const stuff = await database.markdown.toJSON(document.text);

        document.stuff = stuff;
      }
    }
  },

  // hooks: {
  //   'content:file:beforeInsert': (document) => {
  //     if (document.extension === '.md') {
  //       const text = document.text;
  //       const resolvedComponents = VueWithCompiler.compile(text);
  //       document.bodyPlainText = text;
  //     }
  //   }
  // },

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
