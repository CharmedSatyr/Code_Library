//3. PUG
const express = require('express');
const app = express();

const port = process.argv[2] || 3000;
const path = process.argv[3];

app.set('views', path); //The default folder the file we'll render is in. (relative to app.get's first argument, I think)
app.set('view engine', 'pug'); //If we don't include an extension on res.render's first argument, this will be the default

app.get('/home', function(req, res) {
    res.render('index', {date: new Date().toDateString()})
});
app.listen(port);
