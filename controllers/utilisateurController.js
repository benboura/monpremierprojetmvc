// importation du module de connexion a la base de données 
const db = require('../models/db');
// importation de bcrypt pour le hachage des mots de passe
const bcrypt = require('bcrypt');

// Inscription d'un utilisateur
exports.signup = async (req, res) => {
    const { nom, prenom, email, date_naissance, password } = req.body;
   
    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    db.query(
        'INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, date_naissance) VALUES (?, ?, ?, ?, ?)',
        [nom, prenom, email, hashedPassword, date_naissance],
        (err, result) => {
            if (err) {
                console.error(err);
                return res.send('Erreur lors de l\'inscription');
            }
            res.redirect('/login');
        }
    );
};

// Connexion de l'utilisateur
exports.login = (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM utilisateur WHERE email = ?', [email], async (err, results) => {
        if (err) {
            console.error(err);
            return res.send('Erreur de connexion');
        }

        if (results.length === 0) {
            return res.send('Utilisateur non trouvé');
        }

        const utilisateur = results[0];

        // Vérification du mot de passe
        const match = await bcrypt.compare(password, utilisateur.mot_de_passe);

        if (match) {
            res.send('Connexion réussie !'); // À remplacer par une redirection
        } else {
            res.send('Email ou mot de passe incorrect');
        }
    });
};
