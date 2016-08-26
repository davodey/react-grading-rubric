const path = require('path');
module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {exclude: /node_modules/, loader: 'babel',
        query: {
            presets: ['react', 'es2015', 'stage-1']
        }
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.(woff|ttf|eot|svg)(\?[a-z0-9]+)?$/, loaders: ['file'] },
      { test: /\.json$/, loader: 'json' }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss'],
    alias: {
      'main.scss': path.join(__dirname, './style/scss/main.scss')
    }
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./style")]
  }
};
