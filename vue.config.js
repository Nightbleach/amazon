module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'request': '@/request',
        'views': '@/views'
      }
    }
  },
  'transpileDependencies': [
    'vuetify'
  ]
}
