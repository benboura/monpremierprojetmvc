const express = require('express');
const router = express.Router();
const programmeController = require('../controllers/programmeController');

router.get('/programme-tv', programmeController.afficherProgrammeTV);
router.get('/programme-tv/ajouter', (req, res) => {
    res.render('formulaireProgrammeTv');
});
router.post('/programme-tv/ajouter', programmeController.ajouterProgramme);

module.exports = router;

