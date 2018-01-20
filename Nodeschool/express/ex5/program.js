var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

const port = Number(process.argv[2]);
const filepath = process.argv[3];

app.set('view engine', 'pug');
app.set('views', filepath || path.join(__dirname, 'templates'));

app.use(require('stylus').middleware(filepath || __dirname + '/public'));
app.use(express.static(filepath || path.join(__dirname, 'public')));

app.listen(port);