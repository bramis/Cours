var fs = require('fs');
var path = require('path');

const pathname = process.argv[2];
const extname = '.' + process.argv[3];

fs.readdir(pathname, (err, files) => {
    if (err) return console.log(err);
    files.forEach((file) => {
        if (path.extname(file) === extname) {
            console.log(file);
        }
    });
});