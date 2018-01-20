var http = require('http');
var { Transform } = require('stream');

const port = Number(process.argv[2]);

const server = http.createServer();

const myTransform = new Transform({
    writableObjectMode: true,
    transform(chunk, encoding, callback) {
        // Transform the chunk into something else.
        callback(null, chunk.toUpperCase());
    }
}).setEncoding('utf-8');


server.on('request', (request, response) => {
    if (request.method !== 'POST') {
        return response.end('send me a POST\n');
    }

    request.setEncoding('utf-8');
    request.pipe(myTransform).pipe(response);
});

server.listen(port);