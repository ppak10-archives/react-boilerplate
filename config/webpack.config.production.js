/**
 * webpack.config.production.js
 * Webpack production build configuration
 */

module.exports = (directoryConfig) => {
  const config = {
    ...require('./webpack.config.common.js')(directoryConfig),
  };
  config.mode = 'production';
  return config;
};
