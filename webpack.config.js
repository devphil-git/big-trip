const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");  // Плагин для копирования файлов (html и css)

module.exports = {
  entry: './src/main.js',                     // точка входа - главный JS-файл проекта
  output: {
    filename: 'bundle.js',                    // Имя итогового файла
    path: path.resolve(__dirname, 'build'),   // Расположение итогового фала
    clean: true,                              // Удаление предыдущих файлов
  },
  devtool: 'source-map',                      // Активация генерации source-map
  plugins: [
    new CopyPlugin({                          // Создание инстанса (экземпляра) CopyPlugin
      patterns: [{ from: 'public' }],         // Все файлы из public
    }),
  ],
  module: {
    rules: [
      {
        test: /\\.js$/,               // Регулярное выражение для вытора JS-файлов
        exclude: /(node_modules)/,    // Исключение директории node_modules
        use: ['babel-loader']         // Указываем, какой лоадер использовать
      }
    ]
  }
};

