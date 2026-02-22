//Ajuda com o caminho relativo
const path = require("path");

//Cria um segundo html que automaticamente injeta mudancas
const HtmlWebpackPlugin = require("html-webpack-plugin");

//Limpa os blundles antigos
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  // Chama o arquivo com ReactDOM para inicializar o projeto.
  // Como chamar uma classe main
  entry: path.resolve(__dirname, "src", "index.jsx"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "build[hash].js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new CleanWebpackPlugin(),
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css?/,
        exclude: /node_modules/,
        //Nessa ordem sytle-loader primeiro
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 3000,
  },
};
