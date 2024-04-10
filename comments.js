// Create web server
// Run node comments.js
// Go to localhost:3000

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  fs.readFile('index.html', function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
});

// Listen on port 3000, IP defaults to