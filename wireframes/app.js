const express = require('espress');
const app = express();
const path = require('path');
let port = 3000;

app.use(static("public"))

app.listen(port, ()=>console.log(`servidor Escuchando en Puerto ${port} http://localhost:${port}`))
