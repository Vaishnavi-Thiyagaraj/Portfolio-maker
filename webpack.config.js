var path = require('path');
var SRC_DIR = path.join(__dirname, '/src');
var DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    // loaders : [
    //   {
    //     test : /\.jsx?/,
    //     include : SRC_DIR,
    //     loader : 'babel-loader',
    //     query: {
    //       presets: ['react', 'es2015']
    //    }
    //   }
    // ],
    rules: [
      {
        //test: /\.css$/i,
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test : /\.jsx?/,
        //include : SRC_DIR,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            //presets: ['react', 'es2015','@babel/preset-env']
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]

  }
};