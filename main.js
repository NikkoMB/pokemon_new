'use strict';

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.listen(process.env.PORT || 3000);
console.log('we live!');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/styles.css', express.static(path.join(__dirname, '/styles.css')));
app.use('/images', express.static(path.join(__dirname, '/images')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});


/*---------------BULBASAUR EVOLUTION -----------------------------*/
app.get('/bulbasaur.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'bulbasaur.html'));
});

app.get('/ivysaur.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'ivysaur.html'));
});

app.get('/venusaur.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'venusaur.html'));
});

////////////////////////////////////////////////////////////

/*-------------------CHARMANDER EVOLUTION-----------------------*/
app.get('/charmander.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'charmander.html'));
});

app.get('/charmeleon.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'charmeleon.html'));
});

app.get('/charizard.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'charizard.html'));
});


////////////////////////////////////////////////////////////

app.get('/squirtle.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'squirtle.html'));
});

app.get('/wartortle.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'wartortle.html'));
});

app.get('/blastoise.html', (req,res) => {
    res.sendFile(path.join(__dirname, 'blastoise.html'));
});
