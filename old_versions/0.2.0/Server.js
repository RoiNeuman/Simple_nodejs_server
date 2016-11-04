var express = require('express'),
	logger = require('morgan'),
	path = require('path'),
	fs = require('fs');

var app = express();
app.use(logger('dev'));

//		/ , /index , /index.html
//		/content/:folder/:file

app.get('/', function(req, res) {
	serverStaticContent('content/', 'pages/index.html', res);
});
app.get('/index', function(req, res) {
	res.redirect('/');
});
app.get('/index.html', function(req, res) {
	res.redirect('/');
});
app.get("/content/:folder/:fileName", function(req, res) {
	serverStaticContent('content/' + req.params.folder + '/', req.params.fileName, res);
});
app.get('*', function(req, res) {
	serverStaticContent('content/', 'Generate_error.html', res);
});


function serverStaticContent(folder, fileName, res) {

	var rs = fs.createReadStream(folder + fileName);
	var contentType = getContentType(fileName);
	
	rs.on(
		'error',
		function(err) {
			res.status(404);
			res.setHeader("Content-Type", "text/html");
			rs = fs.createReadStream('content/pages/error.html');
			rs.pipe(res);
		}
	);
	
	res.setHeader("Content-Type", contentType);
	rs.pipe(res);
}

/**
 * Content-Type filter for the HTTP respond.
 * 
 * @param fileName
 *            The requested file.
 * @returns {String} The correct Content-Type of the file.
 */
function getContentType(fileName) {
	var ext = path.extname(fileName).toLowerCase();

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

// Server setup
app.listen(7000);