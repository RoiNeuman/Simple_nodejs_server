/*jshint esversion: 6 */
'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _handle_static_content = require('server_modules/handle_static_content');

var _handle_static_content2 = _interopRequireDefault(_handle_static_content);

var _socket = require('socket.io');

var _socket2 = _interopRequireDefault(_socket);

var _handle_socketIO = require('server_modules/handle_socketIO');

var _handle_socketIO2 = _interopRequireDefault(_handle_socketIO);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackConfig = require('../../webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//	Server setup
var app = (0, _express2.default)(),
    server = app.listen(process.env.PORT || 7000);

//	Socket.io
var io = new _socket2.default(server, { path: '' });
var socketEvents = (0, _handle_socketIO2.default)(io);

//	Webpack creation
var webpackCompiler = (0, _webpack2.default)(_webpackConfig2.default);

//	Dev-mode
app.use((0, _morgan2.default)('dev'));
app.use(require("webpack-dev-middleware")(webpackCompiler, {
	noInfo: true, publicPath: _webpackConfig2.default.output.publicPath
}));
app.use(require("webpack-hot-middleware")(webpackCompiler));

/*
	/ , /index , /index.html
	/content/pages/errors/:file
	/content/:folder/:file
*/ // < Routes list
//	Routes
app.use('/content/pages/errors/', _express2.default.static(__dirname + '/../../src/content/pages/errors/', _handle_static_content2.default.contentErrorPageHeaders));

app.use('/content/', _express2.default.static(__dirname + '/../../src/content/', _handle_static_content2.default.contentHeader));

app.get('/', function (req, res) {
	//console.log("Process: " + cluster.worker.id);
	if (/mobile/i.test(req.header('user-agent'))) _handle_static_content2.default.serverStaticContent('src/content/pages/mobile/', 'Mindex.html', res);else _handle_static_content2.default.serverStaticContent('src/content/pages/', 'index.html', res);
});
app.get('/index', function (req, res) {
	res.redirect('/');
});
app.get('/index.html', function (req, res) {
	res.redirect('/');
});
app.get('*', function (req, res) {
	_handle_static_content2.default.serverStaticContent('src/content/pages/', 'index.html', res);
	//res.redirect('/content/pages/errors/404.html');
});
//# sourceMappingURL=server.js.map