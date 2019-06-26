/**
 * webpack.config.js
 * Config file to build webpack bundle with respect to the environment
 */

const PATH = require('path');
const APP_DIRECTORY = PATH.resolve(__dirname, 'src/client');
const BUILD_DIRECTORY = PATH.resolve(__dirname, 'public/js');
const PUBLIC_DIRECTORY = PATH.resolve(__dirname, 'public');

const directoryConfig = {
  app: APP_DIRECTORY,
  build: BUILD_DIRECTORY,
  public: PUBLIC_DIRECTORY,
};

module.exports = (env) => {
  if (env === 'development' || env === 'production') {
    const buildEnvironment = `./config/webpack.config.${env}.js`;
    // eslint-disable-next-line no-console
    console.log(require(buildEnvironment)(directoryConfig));
    return require(buildEnvironment)(directoryConfig);
  } else {
    console.error(`$'{env}' is an invalid build environment.`);
    console.error(`Valid parameters: 'development', 'production'`);
  }
};
