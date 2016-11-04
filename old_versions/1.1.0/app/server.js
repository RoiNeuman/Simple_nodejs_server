/*jshint esversion: 6 */
const express = require('express'),
	logger = require('morgan'),
	contentHandler = require('./modules/handle_static_content.js');

var webpack = require('webpack'),
	webpackConfig = require('../webpack.config.js'),
	compiler = webpack(webpackConfig);

const app = express();
const PORT = 7000;
//	Dev-mode
app.use(logger('dev'));
app.use(require("webpack-dev-middleware")(compiler, {
	noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(compiler));

/*
	/ , /index , /index.html
	/content/pages/errors/:file
	/content/:folder/:file
*/	// < Routes list

app.use('/content/pages/errors/', express.static(__dirname + '/../content/pages/errors/', contentHandler.contentErrorPageHeaders));

app.use('/content/', express.static(__dirname + '/../content/', contentHandler.contentHeader));

app.get('/', function(req, res) {
	//console.log("Process: " + cluster.worker.id);
	if(/mobile/i.test(req.header('user-agent')))
		contentHandler.serverStaticContent('/content/pages/mobile/', 'Mindex.html', res);
	else
		contentHandler.serverStaticContent('/content/pages/', 'index.html', res);
});
app.get('/index', function(req, res) {
	res.redirect('/');
});
app.get('/index.html', function(req, res) {
	res.redirect('/');
});
app.get('*', function(req, res) {
	res.redirect('/content/pages/errors/404.html');
});

// Server setup
app.listen(process.env.PORT || PORT);
