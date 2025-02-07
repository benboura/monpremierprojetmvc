
CREATE TABLE utilisateur (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100) NOT NULL,
    prenom VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    mot_de_passe VARCHAR(255) NOT NULL,
    date_naissance DATE
);

INSERT INTO utilisateur (nom, prenom, email, mot_de_passe, date_naissance) VALUES
("Sert", "Tass","serta12@gmail.com", "serta12", "1998-05-14"),
("Gabouss","Sar","gabou32@gmail.com","gabouss32","1987-02-06"),
("The","Big","big77@gmail.com","notorious7","1987-11-11"),
("Sainte","May","sainte45@gmail.com","maysainte45","1991-09-04"); 