const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

app.use(express.static("public"));

app.get('/productDetail', function(req, res){
    res.sendFile(path.join(__dirname, 'views/productDetail.html'))

});
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/home.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, 'views/register.html'));
});

app.get('/carrito', function(req, res){
    res.sendFile(path.join(__dirname, 'views/carrito.html'));
});
app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`));

