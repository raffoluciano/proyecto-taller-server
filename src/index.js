const express = require('express');
const app = express();

const usuarios = require('./routes/usuario');
const destinos = require('./routes/destino');

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// routes
app.use("/usuario",usuarios);
app.use("/destino",destinos);

app.listen(4000);
console.log('Server on port 4000');