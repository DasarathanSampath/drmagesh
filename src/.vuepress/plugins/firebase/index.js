const { path } = require('@vuepress/shared-utils')

module.exports = {
  name: 'firebase',
  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
}
