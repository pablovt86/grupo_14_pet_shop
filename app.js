const express = require('express');
const app = express();
const path = require('path');
let port = 3000;

app.use(express.static("public"));

app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`));
