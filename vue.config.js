module.exports = {
  css                  : { loaderOptions: { css: { url: false } } },
  transpileDependencies: ['vuetify'],
  configureWebpack     : (config) => {
    config.module.rules = [
      ...config.module.rules,
      {
        test   : require.resolve('leader-line'),
        loader : 'skeleton-loader',
        options: { procedure: (content) => `${content} export default LeaderLine` },
      },
    ]
  },
}
