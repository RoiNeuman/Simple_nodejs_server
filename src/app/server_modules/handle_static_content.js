/*jshint esversion: 6 */

export const version = "0.1.0";


export var contentErrorPageHeaders = {
	setHeaders: function(res, path) {
		res.setHeader("Content-Type", "text/html");
		if(path && path.indexOf('404.html') !== -1)
		res.status(404);
	}
};

export var contentHeader = {
	setHeaders: function(res, path) {
		res.setHeader("Content-Type", getContentType(path));
	}
};

export default function serverStaticContent(folder, fileName, res) {
	const rs = fs.createReadStream(__dirname + '/../../../' + folder + fileName);
	const contentType = getContentType(fileName);

	rs.on(
		'error',
		function(err) {
			console.log(err);
			res.redirect('/content/pages/errors/404.html');
		}
	);

	res.setHeader("Content-Type", contentType);
	rs.pipe(res);
};

import path from 'path'
import fs from 'fs'

function getContentType(fileName) {
	const ext = path.extname(fileName).toLowerCase();

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
