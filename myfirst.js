
var http = require('http');

var	dt = require('./myfirstmodule');

http.createServer(function(request, response){
	response.writeHead(200, {'Content-type' : "text/html"});
	response.end("Hello World" + dt.myDateTime());
}).listen(9000);

cont fs = require('fs');

