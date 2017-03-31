//My First Async I/O
var fs = require('fs');
var path = process.argv[2];

var text = fs.readFile(path, 'utf8', function(err, data) {
    if (err)
        throw err;

    var count = data.split('\n').length - 1;

    console.log(count);
});
