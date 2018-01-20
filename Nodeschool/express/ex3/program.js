var express = require('express');
var path = require('path');
var app = express();

const port = Number(process.argv[2]);
const filepath = process.argv[3];

app.set('view engine', 'pug');
app.set('views', filepath || path.join(__dirname, 'templates'));

app.get('/home', (req, res) => {
    res.render('index', {date: new Date().toDateString()});
});

app.listen(port);