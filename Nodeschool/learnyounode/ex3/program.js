var fs = require('fs');

const filename = process.argv[2];

const file = fs.readFileSync(filename, 'utf8');

console.log(file.split('\n').length - 1);