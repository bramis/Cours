var fs = require('fs');

const filename = process.argv[2];

const file = fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    console.log(data.split('\n').length - 1);
});