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
