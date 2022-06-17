const express = require('express');
const app = express();

const users = require('./routes/usuario');
const Destinations = require('./routes/destino');
const roles = require('./routes/rol');
// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// routes
app.use("/User",users);
app.use("/Destiny",Destinations);
app.use("/role",roles);

app.listen(4000);
console.log('Server on port 4000');