const http = require('http');
var url = require('url');

const server = http.createServer((req, res) => {

    var q = url.parse(req.url, true).query;

    if ((q.name != null) || (q.year != null)) {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ name: q.name,  year: q.year,}));
        res.end();

    } else {

        res.end('Invalid request');
    }
});

server.listen(8082);

console.log('server running on port 8082');