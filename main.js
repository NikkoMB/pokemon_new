'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/styles.css', express.static(path.join(__dirname, '/styles.css')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    alert('choose your Pokémon');
});

app.get('/bulbasaur', (res,req) => {
    res.sendFile(path.join(__dirname, 'bulbasaur.html'));
    alert('you chose Bulbasaur!');
    alert('Feed, drink, and give love to your pokémon until it evolves!');
});