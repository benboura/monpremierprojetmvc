const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.use('/', require('./routes/equipeRoutes'));
app.use('/', require('./routes/programmeRoutes'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', require('./routes/utilisateurRoutes'));

module.exports = app;
