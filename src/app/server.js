/*jshint esversion: 6 */
'use strict';

import express from 'express'
import logger from 'morgan'
import contentHandler from 'server_modules/handle_static_content'
import SocketIo from 'socket.io'
import socketIoHandler from 'server_modules/handle_socketIO'
import webpack from 'webpack'
import webpackConfig from '../../webpack.config.js'

//	Server setup
const app = express(),
	server = app.listen(process.env.PORT || 7000);

//	Socket.io
const io = new SocketIo(server, {path: ''});
const socketEvents = socketIoHandler(io);

//	Webpack creation
const webpackCompiler = webpack(webpackConfig);

//	Dev-mode
app.use(logger('dev'));
app.use(require("webpack-dev-middleware")(webpackCompiler, {
	noInfo: true, publicPath: webpackConfig.output.publicPath
}));
app.use(require("webpack-hot-middleware")(webpackCompiler));

/*
	/ , /index , /index.html
	/content/pages/errors/:file
	/content/:folder/:file
*/	// < Routes list
//	Routes
app.use('/content/pages/errors/', express.static(__dirname + '/../../src/content/pages/errors/', contentHandler.contentErrorPageHeaders));

app.use('/content/', express.static(__dirname + '/../../src/content/', contentHandler.contentHeader));

app.get('/', function(req, res) {
	//console.log("Process: " + cluster.worker.id);
	if(/mobile/i.test(req.header('user-agent')))
		contentHandler.serverStaticContent('src/content/pages/mobile/', 'Mindex.html', res);
	else
		contentHandler.serverStaticContent('src/content/pages/', 'index.html', res);
});
app.get('/index', function(req, res) {
	res.redirect('/');
});
app.get('/index.html', function(req, res) {
	res.redirect('/');
});
app.get('*', function(req, res) {
	contentHandler.serverStaticContent('src/content/pages/', 'index.html', res);
	//res.redirect('/content/pages/errors/404.html');
});