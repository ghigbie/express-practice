const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shops');


// app.use(bodyParser.urlencoded({extended: false}));
app.use(adminRoutes);
app.use(shopRoutes);
//app.use(errorRoutes);
 app.use((req, res, next) => {
     res
        .status(404)
        .send('<h1>What are you doing with your life?</h1>');
 });

app.listen(3000);