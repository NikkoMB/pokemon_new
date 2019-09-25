'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.listen('3000' || process.env.PORT);
console.log('we live!');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/styles.css', express.static(path.join(__dirname, '/styles.css')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/bulbasaur', (res,req) => {
    res.sendFile(path.join(__dirname, 'bulbasaur.html'));
});

app.get('/charmander', (res,req) =>{
    res.sendFile(path.join(__dirname, 'charmander.html'));
});

app.get('/squirtle', (res,req) => {
    res.sendFile(path.join(__dirname, 'squirtle.html'));
});