var http = require('http');

const urls = process.argv.slice(2);
let waitingString = [];
let finishedCount = 0;

function printResult() {
    console.log(waitingString.join('\n'));
}

urls.forEach((url, index) => {
    http.get(url, (response) => {
        let data = "";
        
        response.setEncoding('utf-8');
        response.on('data', (chunk) => {
            data += chunk;
        });
        
        response.on('end', () => {
            waitingString[index] = data;
            finishedCount++;
            
            if (finishedCount === urls.length) {
                printResult();
            }
            
            data = "";
        });
        
        response.on('error', console.error);
    }).on('error', console.error);
});