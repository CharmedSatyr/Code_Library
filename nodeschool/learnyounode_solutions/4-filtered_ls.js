//Filtered ls
var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function(err, list) {

    var arr = list.filter(x => path.extname(x) === ext);
    arr.map(item => console.log(item));

});
