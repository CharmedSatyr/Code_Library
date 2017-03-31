//Make It Modular
//MODULE: Must export fn that takes parameters dir, ext, cb
//cb must take parameters err, data
//data = filtered list of files

var fs = require('fs');
var path = require('path');

var fn = function dirReadFil(a, b, cb) { //where a is directory and b is extension
    fs.readdir(a, function(err, list) {
        err
            ? cb(err)
            : cb(null, list.filter(x => path.extname(x) === '.' + b));
    });
};

module.exports = fn;
