// importation de la bibliotheque bcrypt pour le hachage des mot de passe 
const bcrypt = require('bcrypt');
// définition d'une fonction asynchrone pour hacher un mot de passe 
async function hashPassword() {
    // hachage du mot de passe "serta12" avec un cout d'interaction de 10 (nombre d'interaction de l'algorithe)
    // bcrypt.hash() genere un hash securise avec un salt integree  
    const hash = await bcrypt.hash("serta12", 10);
    // affichage du mot de passe haché dans la console
    console.log("Mot de passe haché :", hash);
}
// appel de la fonction hashPassword pour executer le hachage 
hashPassword();