const express = require('express');
const app = express();

const users = require('./routes/user');
const Destinations = require('./routes/destiny');
const roles = require('./routes/role');
const excursion = require('./routes/excursion');
const hotel = require('./routes/hotel');
const country = require('./routes/country');
const tipo_paquete = require('./routes/type_paquete');
const package = require('./routes/package')
const meanOfTransport = require('./routes/meanOfTransport')
const location = require('./routes/location')

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// routes
app.use("/User",users);
app.use("/Destiny",Destinations);
app.use("/role",roles);
app.use("/excursion",excursion);
app.use("/hotel",hotel);
app.use("/country",country);
app.use("/tipo",tipo_paquete);
app.use('/package', package);
app.use('/meanOfTransport', meanOfTransport);
app.use('/location', location);

app.listen(4000);
console.log('Server on port 4000');