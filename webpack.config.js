module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      } 
    ]
  },
  context: __dirname + "/client/",
	entry: "./app.jsx",
	output: {
		path: __dirname + "/public/js",
		filename: "app.js"
  }
};