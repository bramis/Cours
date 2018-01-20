var http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
    let data = "";
    
    response.setEncoding('utf-8');
    response.on('data', (chunk) => {
        data += chunk;
    });

    response.on('end', () => {
        console.log(data.length);
        console.log(data);
        data = "";
    })

    response.on('error', console.error);
}).on('error', console.error);