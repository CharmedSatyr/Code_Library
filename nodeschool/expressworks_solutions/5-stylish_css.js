//5. STYLISH CSS
const express = require('express');
const stylus = require('stylus');
const app = express();

const port = process.argv[2] || 3000;
const fpath = process.argv[3] || 'public'; //Directed toward ./public as fallback

app.use(stylus.middleware(fpath));

app.use(express.static(fpath));
app.listen(port);
