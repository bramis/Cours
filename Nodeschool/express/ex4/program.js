var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

const port = Number(process.argv[2]);
const filepath = process.argv[3];

app.set('view engine', 'pug');
app.set('views', filepath || path.join(__dirname, 'templates'));

app.use(bodyParser.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    res.send(req.body.str.split('').reverse().join(''));
});
app.listen(port);