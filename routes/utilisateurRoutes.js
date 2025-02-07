const express = require('express');
const router = express.Router();
const utilisateurController = require('../controllers/utilisateurController');

// traiter l'inscription
router.post('/login', utilisateurController.login);

// Afficher la page d'inscription 
router.get('/login', (req, res)=> {
    res.render('login');
})
// traiter l'inscription 
router.post('/signup', utilisateurController.signup);

// Afficher la page d'inscription 
router.get('/signup', (req, res)=> {
    res.render('signup');
})
module.exports = router;