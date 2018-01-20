var express = require('express');
var app = express();
var crypto = require('crypto');

const port = Number(process.argv[2]);

app.put('/message/:id', (req, res) => {
    const id = req.params.id;
    res.send(crypto.createHash('sha1')
        .update(new Date().toDateString() + id)
        .digest('hex'));
});

app.listen(port);