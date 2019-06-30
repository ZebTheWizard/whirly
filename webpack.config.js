const path = require('path')

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "awesome-typescript-loader"
        }
      } 
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  context: __dirname + "/client/",
	entry: "./app.tsx",
	output: {
		path: path.resolve(__dirname, 'public/js'),
		filename: "app.js"
  }
};