const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    camelCase: true,
    localIdentName: '[local]--[hash:base64]',
  },
});
