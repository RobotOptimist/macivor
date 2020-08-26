export default {
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
    '@nuxt/content',
    '@nuxtjs/feed'    
  ],

  feed() {
    const baseUrlBlogs = "https://www.macivortech.com/blogs"
    const baseLinkFeedBlogs = "/feed/blogs"
    const feedFormats = {
      rss: {type: 'rss2', file: 'rss.xml'},
      json: {type: 'json1', file: 'feed.json'}
    }
    const {$content} = require ('@nuxt/content')
    const createFeedBlogs = async (feed) => {
      feed.options = {
        title: "James MacIvor's Blog",
        description: "Technology, Business, Teaching and Mentoring",
        link: baseUrlBlogs
      }
      const blogs = await $content('blogs').fetch()
      blogs.forEach(blog => {
        const url = `${baseUrlBlogs}/${blog.slug}`
        feed.addItem({
          title: blog.title,
          id: url,
          link: url,
          date: blog.published,
          description: blog.summary,
          content: blog.summary,
          author: blog.authors
        })
      })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedBlogs}/${file}`,
      type: type,
      create: createFeedBlogs
    }))
  },

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
