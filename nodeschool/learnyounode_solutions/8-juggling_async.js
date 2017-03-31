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
