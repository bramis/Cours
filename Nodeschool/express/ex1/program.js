var express = require('express');
var app = express();

const port = Number(process.argv[2]);

app.get('/home', (req, res) => {
    res.end('Bonjour, monde !');
});

app.listen(port);