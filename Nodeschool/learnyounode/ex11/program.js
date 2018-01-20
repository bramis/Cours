var fs = require('fs');
var http = require('http');

const port  = Number(process.argv[2]);
const filename = process.argv[3];

const server = http.createServer((req, res) => {
    const fd = fs.createReadStream(filename);
    
    res.writeHead(200, { 'content-type': 'text/plain' });
    fd.pipe(res);
});

server.listen(port);