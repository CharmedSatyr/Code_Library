//WHAT'S IN QUERY
const express = require('express');
const app = express();

const port = process.argv[2] || 3000;

app.get('/search', function(req, res) {

    //q is the query object with all the keys accessible
    const q = req.query;

    res.send(q);

});
app.listen(port);
