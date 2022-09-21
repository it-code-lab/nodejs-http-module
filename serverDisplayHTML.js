const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    console.log(`Request for ${pathname} received`);
    if (pathname == '/') {
        pathname = '/home';
    }
    fs.readFile('pages/' + pathname.substr(1) + '.html', (err, data) => {
        if (err) {
            console.error(err);
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.write('404 - file not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        res.end();
    });
});

server.listen(8081);
console.log('server running on port 8081');