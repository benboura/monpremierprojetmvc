const Programme = require('../models/programmeModel');

exports.afficherProgrammeTV = (req, res) => {
    Programme.getAllProgrammes((programmes) => {
        res.render('programmeTv', { programmes });
    });
};

exports.ajouterProgramme = (req, res) => {
    const { titre, heure, description } = req.body;
    Programme.ajouterProgramme({ titre, heure, description }, () => {
        res.redirect('/programme-tv');
    });
};


