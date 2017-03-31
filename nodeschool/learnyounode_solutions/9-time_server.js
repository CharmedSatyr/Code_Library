//TIME SERVER
const net = require('net');
const strftime = require('strftime');

let server = net.createServer(function(socket) {
    //    console.log('connected');
    let d = strftime('%F %R');
    socket.write(d + '\n');
    socket.end( //'TEST\n',
            function() {
        //        console.log('disconnected');
    });
})
server.listen(process.argv[2]);
