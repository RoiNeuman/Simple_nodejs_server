var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	url = require('url');

/**
 * Handle all the incoming requests. Using URL routing.
 * 
 * @param req
 *            The HTTP request.
 * @param res
 *            The HTTP respond.
 */
function handleIncomingRequest(req, res) {
	// console.log("Incoming request: (" + req.method + ") " + req.url);

	req.parsed_url = url.parse(req.url, true);
	var core_url = req.parsed_url.pathname;

	// ~~~~ URL Router ~~~~
	// index page
	if (core_url == '/' || core_url == '/index.html'
			|| core_url == '/content/pages/index.html') {
		serverStaticContent('content/', 'pages/index.html', res);
		// Any content file, from '/content/...'
	} else if (core_url.substr(0, 9) == '/content/') {
		serverStaticContent('content/', core_url.substr(9), res, false);
		// Error page as a default page for any unknown requests
	} else {
		serverStaticContent('content/', 'pages/error.html', res, true);
	}
}

function serverStaticContent(folder, fileName, res, error) {

	var rs = fs.createReadStream(folder + fileName);
	var contentType = getContentType(fileName);

	rs.on('error', function(err) {
		serverStaticContent('pages/error.html', res, true);
		return;
	});
	if (error)
		res.writeHead(404, {
			"Content-Type" : "text/html"
		});
	else
		res.writeHead(200, {
			"Content-Type" : contentType
		});
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
var server = http.createServer(handleIncomingRequest);
server.listen(7000);