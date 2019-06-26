/**
 * webpack.config.common.js
 * Common webpack configs used between build environments
 */

module.exports = (directoryConfig) => ({
  plugins: [],
  entry: ['@babel/polyfill', directoryConfig.app],
  output: {
    path: directoryConfig.build,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader', // Creates style nodes from js strings
          },
          {
            loader: 'css-loader', // Translates css into commonjs
          },
          {
            loader: 'postcss-loader', // Run post css actions
            options: {
              plugins: () =>
                // post css plugins
                [require('precss'), require('autoprefixer')],
            },
          },
          {
            loader: 'less-loader', // Compiles less code to css
          },
        ],
      },
    ],
  },
});
