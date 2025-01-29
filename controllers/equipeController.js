const Equipe = require('../models/equipeModel');

exports.afficherEquipe = (req, res) => {
    Equipe.getAllEquipe((equipe) => {
        res.render('apropos', { equipe });
    });
};
