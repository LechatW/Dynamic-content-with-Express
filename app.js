const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public')); 

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname,'views','index.html'))
});

app.get('/restaurants', function(req, res) {
    res.sendFile(path.join(__dirname,'views','restaurants.html'))
});

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname,'views','about.html'))
});

app.get('/recommend', function(req, res) {
    res.sendFile(path.join(__dirname,'views','recommend.html'))
});

app.get('/confirm', function(req, res) {
    res.sendFile(path.join(__dirname,'views','confirm.html'))
});

app.listen(8000);