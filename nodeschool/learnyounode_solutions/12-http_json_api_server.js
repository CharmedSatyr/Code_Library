//HTTP JSON API SERVER
const http = require('http');
const url = require('url');

const portNumber = process.argv[2];

const server = http.createServer(function(req, res) {
    if (req.method !== 'GET') {
        res.writeHead(404);
        res.end('Send me a GET!\n');
    }

    res.writeHead(200, {'content-type': 'application/json'});
    const isoTime = url.parse(req.url, true).query.iso;
    const d = new Date(isoTime);

    let h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds(),
        u = d.getTime();

    if (url.parse(req.url, true).pathname == '/api/parsetime') {
        res.write(JSON.stringify({hour: h, minute: m, second: s}))
    }

    if (url.parse(req.url, true).pathname == '/api/unixtime') {
        res.write(JSON.stringify({unixtime: u}));
    }
    res.end();
});

server.listen(portNumber);
