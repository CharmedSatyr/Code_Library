//2. STATIC
const express = require('express');
const app = express();

const port = process.argv[2];
const index = process.argv[3] || path.join(__dirname, 'public'); //path.join is used to produce cross-platform path (Win vs. Linux/Mac); could be added as a fallback to public folder

app.use(express.static(index));
app.listen(port);
