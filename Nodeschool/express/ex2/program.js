var express = require('express');
var path = require('path');
var app = express();

const port = Number(process.argv[2]);
const indexFile = process.argv[3];

app.use(express.static(indexFile || path.join(__dirname, 'public')));

app.listen(port);