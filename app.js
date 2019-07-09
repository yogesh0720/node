const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	//console.log(req.url, req.method, req.headers);
	//process.exit();
	//
	const url = req.url;
	const method = req.method;

	if(url === '/') {
		res.write('<html>');
		res.write('<head><title>Enter msg:</title></head>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>');
		res.write('</html>');	
		return res.end();
	}
	if (url === '/message' && method === 'POST') {
		const body = [];
		req.on('data', (chunk) => {
			console.log(chunk);
			body.push(chunk);
		});
		req.on('end', () => {
			const parseBody = Buffer.concat(body).toString();
			const message = parseBody.split('=')[1];
			fs.writeFileSync('message.txt', message);
			res.statusCode = 302;
			res.setHeader('location', '/');
			return res.end();
			//console.log(parseBody);
		});	
		
		
	}
	res.setHeader('Contain-Type', 'text-html');
	res.write('<html>');
	res.write('<head><title>THis is my first first page.</title></head>');
	res.write('<body>Welcome node js server</body>');
	res.write('</html>');
	res.end();
});
server.listen(3000);

