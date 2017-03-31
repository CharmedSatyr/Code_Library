//HTTP UPPERCASERER
const http = require('http');
const map = require('through2-map');

//Listen on this port
const portNumber = process.argv[2];

const server = http.createServer(function(req, res) {
    if (req.method !== 'POST') {
        return res.end('Send me a POST!\n');
    }

    res.writeHead(200, {'content-type': 'text/plain'});
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(portNumber);
