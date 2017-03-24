module.exports = {

  entry: './app/components/Main.js',
  
  output: {
    filename: 'public/bundle.js'
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  }
};
