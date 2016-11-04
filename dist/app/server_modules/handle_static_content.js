"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.contentHeader = exports.contentErrorPageHeaders = exports.version = undefined;
exports.default = serverStaticContent;

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*jshint esversion: 6 */

var version = exports.version = "0.1.0";

var contentErrorPageHeaders = exports.contentErrorPageHeaders = {
	setHeaders: function setHeaders(res, path) {
		res.setHeader("Content-Type", "text/html");
		if (path && path.indexOf('404.html') !== -1) res.status(404);
	}
};

var contentHeader = exports.contentHeader = {
	setHeaders: function setHeaders(res, path) {
		res.setHeader("Content-Type", getContentType(path));
	}
};

function serverStaticContent(folder, fileName, res) {
	var rs = _fs2.default.createReadStream(__dirname + '/../../../' + folder + fileName);
	var contentType = getContentType(fileName);

	rs.on('error', function (err) {
		console.log(err);
		res.redirect('/content/pages/errors/404.html');
	});

	res.setHeader("Content-Type", contentType);
	rs.pipe(res);
};

function getContentType(fileName) {
	var ext = _path2.default.extname(fileName).toLowerCase();

	switch (ext) {
		case '.html':
			return "text/html";
		case '.css':
			return "text/css";
		case '.js':
			return "text/javascript";
		case '.jpg':
		case '.jpeg':
			return "image/jpeg";
		case '.gif':
			return "image/gif";
		case '.png':
			return "image/png";
		default:
			return "text/plain";
	}
}
//# sourceMappingURL=handle_static_content.js.map