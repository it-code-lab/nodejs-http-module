var http = require('http');

const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('Hello World!'); //write a response to the client
  res.end();
})

server.listen(8080);

console.log('server running on port 8080');