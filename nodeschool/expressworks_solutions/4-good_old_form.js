//4. GOOD OLD FORM
//Process form input and respond with the value of the input string backwards
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.argv[2] || 3000;

//Change the URL encoding to a string or array with bodyParser & extended:false
app.use(bodyParser.urlencoded({extended: false}));

//Handle the POST request
app.post('/form', function(req, res) {
    //I added this because it seems proper
    req.on('error', function(err) {
        console.error(err);
    });
    //Express uses res.send() rather than res.write(). The req.body syntax is bodyParser's
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(port);
