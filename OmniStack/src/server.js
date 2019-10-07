const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-zlptg.mongodb.net/omnistackTest?retryWrites=true&w=majority', {
    userNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, ()=> {
    console.log('Server running on Port: 3333');
});
