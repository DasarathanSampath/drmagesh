const { description } = require('../../package')
const languagesList = require('./navigation/languageList')
const englishLang = require('./navigation/en')
const tamilLang = require('./navigation/ta')

module.exports = {
  title: 'Dr V Magesgh',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['link', { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', integrity:'sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN', crossorigin:'anonymous'}]
  ],
  locales: languagesList.list,
  themeConfig: {
    logo: '/favicon.svg',    
    lastUpdated: false,
    locales:{
      '/': englishLang.list,
      '/ta/': tamilLang.list
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
  postcss: {
    plugins: [
      require("tailwindcss")("./tailwind.config.js"),
      require("autoprefixer"),
    ],
  }
}
