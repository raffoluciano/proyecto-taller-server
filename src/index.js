const express = require('express');
const cors = require('cors');
const app = express();
const upload = require('../src/upload');
const path = require('path');

app.use(cors());

const users = require('./routes/user');
const package = require('./routes/package')

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(upload);

// routes
app.use("/user",users);
app.use('/package', package);
app.use('/images', express.static(path.join(__dirname, 'public/uploads')))

app.listen(4000);
console.log('Server on port 4000');