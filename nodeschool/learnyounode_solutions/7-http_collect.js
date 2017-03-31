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
