module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt_boilerplate',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'nuxt_boilerplate' },
      { hid: 'keywords', name: 'keywords', content: 'nuxt_boilerplate' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', href: '/img/icons/apple-touch-icon.png' },
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3b8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
    babel: {
      presets: ['vue-app'],
    },
    postcss: [
      /* eslint-disable */
      require('postcss-import')(),
      require('postcss-url')(),
      require('postcss-cssnext')(),
      require('postcss-extend')(),
      /* eslint-enable */
    ],
    analyze: false,
  },
  css: [
    '@/assets/css/reset.css',
  ],
  modules: [
    '@nuxtjs/pwa',
  ],
  manifest: {
    name: 'nuxt_boilerplate',
    lang: 'jp',
    short_name: 'nuxt_boilerplate',
    title: 'nuxt_boilerplate',
    'og:title': 'nuxt_boilerplate',
    description: 'nuxt_boilerplate',
    'og:description': 'nuxt_boilerplate',
    theme_color: '#000',
    background_color: '#fff',
  },
  workbox: {
    dev: true,
  },
};
