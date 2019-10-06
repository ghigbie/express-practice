const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const rootRoute = require('./routes/root');
const userRoutes = require('./routes/user');
const errorRoutes = require('./routes/error');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(rootRoute);
app.use(userRoutes);
app.use(errorRoutes);

app.listen(3000);