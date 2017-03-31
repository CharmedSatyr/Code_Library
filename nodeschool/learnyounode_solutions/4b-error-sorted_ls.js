//Outputs a directory's files sorted by extension. Takes a directory as an argument.
//A good result, but not what was actually called for by exercise 4

var fs = require('fs');
var path = require('path');
var file = process.argv[2];

function sorter(err, list) {

    list.sort(function(x, y) {

        var a = path.extname(x);
        var b = path.extname(y);

        return a < b
            ? -1
            : a > b
                ? 1
                : 0;
    });
    console.log(list);
}

fs.readdir(file, sorter)
