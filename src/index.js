const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const users = require('./routes/user');
const Destinations = require('./routes/destiny');
const roles = require('./routes/role');
const excursion = require('./routes/excursion');
const hotel = require('./routes/hotel');
const country = require('./routes/country');
const type_package = require('./routes/type_package');
const package = require('./routes/package')
const meanOfTransport = require('./routes/meanOfTransport')
const location = require('./routes/location')
const promotion = require('./routes/promotion')
const shopping_cart = require('./routes/shopping_cart')
const line = require('./routes/line')
const type_transport = require('./routes/type_trasnport')

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// routes
app.use("/user",users);
app.use("/Destiny",Destinations);
app.use("/role",roles);
app.use("/excursion",excursion);
app.use("/hotel",hotel);
app.use("/country",country);
app.use("/type",type_package);
app.use('/package', package);
app.use('/meanOfTransport', meanOfTransport);
app.use('/location', location);
app.use('/promotion', promotion);
app.use('/shopping_cart', shopping_cart)
app.use('/line', line)
app.use('/type_transport', type_transport)

app.listen(4000);
console.log('Server on port 4000');