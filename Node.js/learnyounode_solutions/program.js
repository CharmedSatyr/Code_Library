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

/*
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
*/
/*
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
*/
/*
//TIME SERVER
const net = require('net');
const strftime = require('strftime');

let server = net.createServer(function(socket) {
    //    console.log('connected');
    let d = strftime('%F %R');
    socket.write(d + '\n');
    socket.end(//'TEST\n',
    function() {
        //        console.log('disconnected');
    });
})
server.listen(process.argv[2]);
*/
/*
// JUGGLING ASYNC
const http = require('http');
const concat = require('concat-stream');
let results = [];
let tracker = 0;

function out() {
    results.map(item => console.log(item));
};

function juggle(index) {
    http.get(process.argv[index], function(response) {
        response.setEncoding('utf8').on('error', console.error);
        response.pipe(concat(function(data) {
            results[index] = data;
            tracker++;

            if (tracker === process.argv.length - 2) {
                out();
            }

        }));
    });
}

for (var i = 2; i < process.argv.length; i++) {
    juggle(i);
}
*/
/*
//HTTP COLLECT
var http = require('http');

//Two ways to do this: withOutLibrary and withLibrary
function withOutLibrary() {
    var collection = '';

    http.get(process.argv[2], function(data) {
        data.setEncoding('utf8');

        data.on('error', function(err) {
            console.error(err);
        });

        data.on('data', function(data) {
            collection += data;
        });

        data.on('end', function(data) {
            console.log(collection.length);
            console.log(collection);
        });
    });
}
//withOutLibrary();

var concat = require('concat-stream');

function withLibrary() {
    http.get(process.argv[2], function(data) {
        data.setEncoding('utf8');
        data.on('error', function(err) {
            console.error(err);
        });

        data.pipe(concat(function(data) {
            console.log(data.length);
            console.log(data);
        }));

    });
}
withLibrary();

/*
//HTTP Client
var http = require('http');

var lnk = process.argv[2];

http.get(lnk, function(data) {
    data.setEncoding('utf8');
    data.on('data', function(data) {
        console.log(data);
    }).on('error', function(err) {
        console.error(err);
    });
});
*/
/*
//Make It Modular
var dir = process.argv[2];
var ext = process.argv[3];
var fn = require('./module.js');

fn(dir, ext, function(err, data) {
    if (err) {
        console.error(err)
    } else {
        data.map(item => console.log(item));
    }
});
*/
//Filtered ls
/*
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err, list) {

    var arr = list.filter(x => path.extname(x) === ext);
    arr.map(item => console.log(item));

});
*/
/*
//My First Async I/O
var fs = require('fs');
var path = process.argv[2];

var text = fs.readFile(path, 'utf8', function (err, data) {
if (err) throw err;

var count = data.split('\n').length - 1;

console.log(count);
});
*/
/*
//My First I/O!

var fs = require('fs');
//import fs from 'fs'; //Doesn't work

var path = process.argv[2];

var buf = fs.readFileSync(path, 'utf8');

var countNL = buf.split('\n').length - 1;

console.log(countNL);
*/
/*
//Baby Steps

let sum = 0;

for (let i = 2; i < process.argv.length; i++) {
sum += Number(process.argv[i]);
}

console.log(sum);
*/
