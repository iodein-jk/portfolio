import axios from 'axios'
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Aoiblog',
    titleTemplate: '%s | Aoiblog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/blog/entry/wp-content/themes/blog/favicon.ico' },
    ]
  },
  css: [
    '@/assets/css/ress.css',
    '@/assets/css/style.css',
  ],
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
    }
  },
  modules: [
    [
      '@nuxtjs/google-gtag',
      {
        id: 'UA-126623343-1', //あなたのGoogleアナリティクスのプロパティID
        debug: true //本番環境以外でもGAを有効にしたい場合はtrueに。
      },
      '@nuxtjs/axios',
    ]
  ],
  generate: {}
}
