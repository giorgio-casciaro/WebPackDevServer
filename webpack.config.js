var path = require("path");
module.exports = {
  entry: {
    app: ["./src/main.ts"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    //publicPath: "/assets/",
    filename: "bundle.js"
  },
  // resolve TypeScript and Vue file
  resolve: {
    alias: {
      //'src': path.resolve(__dirname, 'src'),
      'assets/Images': path.resolve(__dirname, 'CivilStyle-master/Images'),
      'components': path.resolve(__dirname, 'src/components')
    },
    extensions: ['', '.ts', '.vue', '.js']
  },
  module: {
      loaders: [
          { test: /\.vue$/, loader: 'vue' },
          { test: /\.tsx?$/, loader: 'vue-ts-loader' }
          //{ test: /\.tsx?$/, loader: 'ts-loader' },
          //{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
          //{ test: /\.css$/, loader: 'style-loader!css-loader' },
          //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' } // inline base64 URLs for <=8k images, direct URLs for the rest

      ],
  },
  vue: {
    // instruct vue-loader to load TypeScript
    loaders: { js: 'vue-ts-loader', },
    // make TS' generated code cooperate with vue-loader
    //esModule: true
  },
  devServer: {
   contentBase: __dirname + "/build",
   hot: true,
   inline: true,
   historyApiFallback: false
 },
}
