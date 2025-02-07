const express = require('express');
const router = express.Router();
const equipeController = require('../controllers/equipeController');

router.get('/', equipeController.afficherEquipe);

module.exports = router;