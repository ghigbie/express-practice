const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express();

app.set('view engine', 'ejs');

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');
const errorRoutes = require('./routes/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(usersRoutes);
app.use(homeRoutes);
app.use(errorRoutes);

app.listen(3000);