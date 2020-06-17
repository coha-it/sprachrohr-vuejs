module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'de',
      fallbackLocale: 'de',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  devServer: {
    proxy: 'http://127.0.0.1:3000/',
  }
}
