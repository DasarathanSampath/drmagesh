const { description } = require('../../package')
const languagesList = require('./navigation/languageList')
const englishLang = require('./navigation/en')
const tamilLang = require('./navigation/ta')
const autometa_options = {
  site: {
    name   : 'drmagesh',
    twitter: 'drmagesh',
  },
  canonical_base: 'https://drmagesh.com'
};

module.exports = {
  title: 'Dr V Magesgh',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', integrity:'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin:'anonymous'}],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-app.js" }],
    ['script', { src: "https://www.gstatic.com/firebasejs/8.3.1/firebase-analytics.js" }],
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=254496054",async: true}]
  ],
  locales: languagesList.list,
  themeConfig: {
    logo: '/favicon.ico',    
    lastUpdated: false,
    locales:{
      '/': englishLang.list,
      '/ta/': tamilLang.list
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['clean-urls', {
      normalSuffix: '/',
      indexSuffix: '/'
    }],
    ['feed', {
      canonical_base: 'https://drmagesh.com',
      posts_directories: ['/articles/']
    }],
    ['autometa', autometa_options],
    ['sitemap', {hostname: 'https://drmagesh.com'}],
    ['@vuepress/google-analytics', {'ga': '254496054'}]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}
