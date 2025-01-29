const db = require('./db');

exports.getAllEquipe = (callback) => {
    db.query('SELECT * FROM equipe', (err, results) => {
        if (err) throw err;
        callback(results);
    });
};