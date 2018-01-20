var express = require('express');
var app = express();
var crypto = require('crypto');

const port = Number(process.argv[2]);

app.get('/search', (req, res) => {
    res.send(req.query);
});

app.listen(port);