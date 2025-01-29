const express = require('express');
const router = express.Router();
const equipeController = require('../controllers/equipeController');

router.get('/apropos', equipeController.afficherEquipe);

module.exports = router;