var net = require('net');
var strftime = require('strftime');

const port = Number(process.argv[2]);

const server = net.createServer((socket) => {
    socket.write(strftime('%F %H:%M', new Date()) + '\n');
    socket.end();
});

server.listen(port);