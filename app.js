// impotation du module Expresse pour créer l'application web
const express = require('express');

// Création de l'application Expresse 
const app = express();

// Importation du module Path pour gérer les chemin de fichiers
const path = require('path');

// Importation du module Body-Parser  pour traiter les requetes POST 
const bodyParser = require('body-parser');

// configuration du moteur de vues EJS pour générer des pages HTML dynamiquement 
app.set('view engine', 'ejs');

// Définition du dossier contenant les vues EJS 
app.set('views', path.join(__dirname, 'views'));

// Définition du dossier "public" pour servir des fichiers statiques (CSS, Images, script)
app.use(express.static('public'));

// Inclusion des routes définies dans le fichier "equipeRoutes.js"
app.use('/', require('./routes/equipeRoutes'));

// Inclusion des routes définies dans le fichier "programmeRoutes.js"
app.use('/', require('./routes/programmeRoutes'));

// Middleware pour analyser les données des formulaires envoyées via POST
app.use(bodyParser.urlencoded({ extended: true }));

// Inclusion des routes définies dans le fichiers "utilisateurRoutes.js"
app.use('/', require('./routes/utilisateurRoutes'));

// Exportation de l'application Expresse pour qu'elle puisse etre utilisée ailleurs (ex: server.js)
module.exports = app;
