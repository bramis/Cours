var fs = require('fs');
var path = require('path');

module.exports = function filterDir(pathname, extname, callback) {
    const realextname = '.' + extname;

    fs.readdir(pathname, (err, files) => {
        if (err) return callback(err);
        callback(null, files.filter((file) => {
            if (path.extname(file) === realextname) {
                return true;
            }
        }));
    });
};