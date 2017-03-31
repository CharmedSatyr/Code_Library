//HTTP FILE SERVER
const http = require('http');
const fs = require('fs');

//Listen on this port
const portNumber = process.argv[2];

//Stream this file using fs.createReadStream
const fileLocation = process.argv[3];

//Use src.pipe(dst) to link source stream and destination stream
const rStream = fs.createReadStream(fileLocation);

const server = http.createServer(function(req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    rStream.pipe(res);
});

server.listen(portNumber);
