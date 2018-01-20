var http = require('http');
var url = require('url');

const port = Number(process.argv[2]);

const server = http.createServer().listen(port);

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixTime(time) {
    return {
        unixtime: time.getTime()
    };
}

server.on('request', (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method !== 'GET' || {'/api/parsetime': true, '/api/unixtime': true}[parsedUrl.pathname] !== true) {
        return res.end('send me a GET and in api parsetime or unixtime pathname\n');
    }

    const time = new Date(parsedUrl.query.iso);
    let result = '';

    
    switch(parsedUrl.pathname.substr(4)) {
        case '/parsetime':
            result = parseTime(time);
        break;
        case '/unixtime':
            result = unixTime(time);
        break;
    }

    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' }); 
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(404);
        res.end();
    }
    
});
