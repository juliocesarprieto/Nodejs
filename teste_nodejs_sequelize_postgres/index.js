const express = require('express');
const requireDir = require('require-dir');

const app = express();
app.use(express.json());

requireDir('./src/models/');

app.use('/api', require('./src/routes'));

app.listen(3000, () => {
    console.log('Server running on port 3000');
});