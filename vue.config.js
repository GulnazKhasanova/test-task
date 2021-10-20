const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      scss: {
        additionalData: '@import "~@/assets/scss/global.scss";'
      }
    }
  },

  configureWebpack: (config) => {
    return {
      devServer: {
        proxy: {
          '/api/': {
            target: 'http://0.0.0.0:3000',
            secure: false,
            changeOrigin: true
          }
        }
      }
    }
  },

  chainWebpack: config => {
    config.resolve.alias
      .set('@c', path.resolve(__dirname, 'src/components'))
      .set('@cf', path.resolve(__dirname, 'src/components/filterscomponents'))
      .set('@cv', path.resolve(__dirname, 'src/components/views'))
      // .set('@r', path.resolve(__dirname, 'src/router'))
      // .set('@p', path.resolve(__dirname, 'src/views'))
      // .set('@api', path.resolve(__dirname, 'src/api'))
       .set('@i', path.resolve(__dirname, 'src/assets/imgFilterPostcard/'))
      // .set('@a', path.resolve(__dirname, 'src/assets'))
      // .set('@config', path.resolve(__dirname, 'src/config'))
  }
}
