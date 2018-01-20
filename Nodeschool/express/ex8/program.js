var express = require('express');
var app = express();
var fs = require('fs');

const port = Number(process.argv[2]);
const filename = process.argv[3];

app.get('/books', (req, res) => {
    fs.readFile(filename, 'utf-8', (err, file) => {
        let books = {};
        if (err) return console.log(err);
        try {
            books = JSON.parse(file);
        } catch (e) {
            res.sendStatus(500);
        }
        res.json(books);
    });
});


app.listen(port);