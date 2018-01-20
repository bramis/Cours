var myModule = require('./myModule');

const pathname = process.argv[2];
const extname = process.argv[3];

myModule(pathname, extname, function(err, files) {
    files.forEach(file => console.log(file));
});