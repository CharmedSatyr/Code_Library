//JSON ME
'use strict';
const express = require('express');
const fs = require('fs');
const app = express();

const port = process.argv[2] || 3000;
const fpath = process.argv[3] || './public/text.txt';

app.get('/books', function(req, res) {
    const obj = fs.readFile(fpath, 'utf8', function(err, data) {
        if (err) {
            res.sendStatus(500);
            console.error(err);
        }

        let books;

        try {
            books = JSON.parse(data); //JSON.parse() crashes programs if its errors aren't handled
        } catch (err) {
            res.sendStatus(500);
        }
        res.json(books);
    });
});
app.listen(port);
