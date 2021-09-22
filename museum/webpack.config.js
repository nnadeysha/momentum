const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
   
    assetModuleFilename: 'assets/[name][ext][query]'
  },
  plugins: [new HtmlWebpackPlugin({
      
      template: './index.html'
  }),
  new MiniCssExtractPlugin({
    filename: '[name].[contenthash].css',
  })],
  module: {
    rules: [
     
        
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
      {
        test: /\.css$/i,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          //options: { publicPath: "." }
        }, "css-loader", 'sass-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
      },
      {
        test: /\.(?:png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource'
      },
      
      
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource'
      },
     
    ],
  },
 
    
  

  devtool: "source-map",

  resolve: {
    extensions: [".js", ".jsx"],
  },

  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};