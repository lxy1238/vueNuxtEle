module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtdemo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
  
    babel: {
      'plugins': [['component', [
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]],
      comments: true
    }
  },
  vendor: ['element-ui'],
  plugins: [{
    src: '~plugins/element-ui',
    ssr: true,
  }],
  css: [
    'element-ui/lib/theme-chalk/display.css',
    '~/styles/index.less',
    // 'muse-ui/dist/muse-ui.css'
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style', 'font'].includes(type)
      }
    }
  }
}

