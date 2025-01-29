const db = require('./db');

exports.getAllProgrammes = (callback) => {
    db.query('SELECT * FROM programmediffusion', (err, results) => {
        if (err) throw err;
        callback(results);
    });
};

exports.ajouterProgramme = (programme, callback) => {
    const { titre, heure, description } = programme;
    db.query(
        'INSERT INTO programmediffusion (titre, heure, description) VALUES (?, ?, ?)',
        [titre, heure, description],
        (err, results) => {
            if (err) throw err;
            callback(results);
        }
    );
};