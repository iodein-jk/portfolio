
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
      }
    ]
  ],
  generate: {
    fallback: true,
    routes () {
      return Promise.all([
        axios.get('https://aoiblog.org/blog/entry/wp-json/wp/v2/works_category/?per_page=100'),
        axios.get('https://aoiblog.org/blog/entry/wp-json/wp/v2/works_tag/?per_page=100'),
        axios.get('https://aoiblog.org/blog/entry/wp-json/wp/v2/works?_embed&per_page=100')
      ])
      .then((res) => {
        const worksCategorys = res[0]
        const worksTags = res[1]
        const worksDetails = res[2]
        return worksCategorys.data.map((worksCategory) => {
          return {
            route: '/works/category/' + worksCategory.id,
            payload: worksCategory
          }
        }).concat(worksTags.data.map((worksTag) => {
          return {
            route: '/works/tag/' + worksTag.id,
            payload: worksTag
          }
        })).concat(worksDetails.data.map((worksDetail) => {
          return {
            route: '/works/entry/' + worksDetail.id,
            payload: worksDetail
          }
        }))
      })
    }
  }
}
