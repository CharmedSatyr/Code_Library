//My First I/O!

var fs = require('fs');
//import fs from 'fs'; //Doesn't work

var path = process.argv[2];

var buf = fs.readFileSync(path, 'utf8');

var countNL = buf.split('\n').length - 1;

console.log(countNL);
