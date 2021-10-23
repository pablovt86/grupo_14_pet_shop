const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

app.use(express.static("public"));

app.get('/productDetail', function(req, res){
<<<<<<< HEAD
    res.sendFile(path.join(__dirname, 'views/productDetail.htm'));
=======
    res.sendFile(path.join(__dirname, 'views/productDetail.html'))
>>>>>>> 5bc6229326342c52c064c090013e38dcea82c3a6

});
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

app.get('/register', function(req, res){
    res.sendFile(path.join(__dirname, 'views/register.html'));
});
app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`));

