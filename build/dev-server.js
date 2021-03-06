var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.dev.conf')

config.entry.app.unshift("webpack-dev-server/client?http://localhost:3001", "webpack/hot/dev-server")

var proxy = {
  "/hzgj/*": { target: "http://localhost:8080", host: "localhost:8080" },
};

var compiler = webpack(config)
var app = new WebpackDevServer(compiler, {
  // publicPath: config.output.publicPath,
  historyApiFallback: true,
  proxy: proxy,
  hot: true,
  stats: {
    colors: true,
    chunks: false
  }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
   	hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

app.use(hotMiddleware)

app.listen(3001, '0.0.0.0', function (err, result) {
  console.log('http://localhost:3001');
  if (err) {
    console.log(err);
  }
});
