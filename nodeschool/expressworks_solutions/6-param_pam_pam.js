//6. PARAM PAM PAM
const express = require('express');
const app = express();
//const crypto = require('crypto'); //Old package; seems to be deprecated
const sha1 = require('crypto-js/sha1');

const port = process.argv[2] || 3000;

app.put('/message/:id', function(req, res) {
    const id = req.params.id;
    const str = new Date().toDateString() + id;

    //res.send(crypto.createHash('sha1').update(str).digest('hex')); //Uses crypto package

    res.send(sha1(str).toString()); //Uses newer crypto-js package

});
app.listen(port);
