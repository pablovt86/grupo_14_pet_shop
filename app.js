const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

<<<<<<< HEAD
 app.use(express.static("public"))

app.get('/productDetail', function(req, res){
    res.sendFile(path.join(__dirname, 'views/productDetail.htm'))

})
app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`))
=======
app.use(express.static("public"));

app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`));
>>>>>>> 8a7de334b419de05471b943edbb19aa9c1457b36
