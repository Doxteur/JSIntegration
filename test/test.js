var bdd = require("../dataBase/bddConnect");
var assert = require('assert');

var connection = bdd.connectBdd();

// Donner les dates des séances (sans répétition) des films dans lesquels l’acteur numéro 1 joue​


// query SELECT seance.DATE_SEANCE FROM seance, film, role, acteur WHERE seance.PROJETER = film.NUMERO_FILM AND film.NUMERO_FILM = role.numero_film AND role.NUMERO_ACTEUR = acteur.NUMERO_ACTEUR AND acteur.NUMERO_ACTEUR = 1;

connection.query("SELECT seance.DATE_SEANCE FROM seance, film, role, acteur WHERE seance.PROJETER = film.NUMERO_FILM AND film.NUMERO_FILM = role.numero_film AND role.NUMERO_ACTEUR = acteur.NUMERO_ACTEUR AND acteur.NUMERO_ACTEUR = 1", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 1 : validé");
});

connection.query("SELECT film.TITRE_FILM,tarif.TARIF,seance.HORAIRE,seance.DATE_SEANCE FROM seance INNER JOIN film ON seance.PROJETER = film.NUMERO_FILM INNER JOIN categorie_seance ON seance.A_POUR_CATEGORIE = categorie_seance.CATEGORIE_DE_LA_SEANCE INNER JOIN tarif ON categorie_seance.CATEGORIE_DE_LA_SEANCE = tarif.CATEGORIE_DE_LA_SEANCE WHERE (dayofweek(seance.DATE_SEANCE) BETWEEN 2 AND 6) AND (seance.HORAIRE > '18:00:00') AND (tarif.TARIF<10)", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 2 : validé");
});

//SELECT acteur.NOM_ACTEUR , role.NOM_DU_ROLE FROM acteur, role WHERE role.NUMERO_ACTEUR = acteur.NUMERO_ACTEUR AND acteur.NUMERO_ACTEUR = 4 ORDER BY acteur.NOM_ACTEUR ASC;

connection.query("SELECT acteur.NOM_ACTEUR , role.NOM_DU_ROLE FROM acteur, role WHERE role.NUMERO_ACTEUR = acteur.NUMERO_ACTEUR AND acteur.NUMERO_ACTEUR = 4 ORDER BY acteur.NOM_ACTEUR ASC", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 3 : validé");
});

//SELECT film.NUMERO_FILM,seance.DATE_SEANCE,seance.HORAIRE

connection.query("SELECT film.NUMERO_FILM,seance.DATE_SEANCE,seance.HORAIRE FROM seance INNER JOIN film ON seance.PROJETER = film.NUMERO_FILM WHERE film.NUMERO_FILM=7 ORDER BY seance.DATE_SEANCE DESC,seance.HORAIRE ASC", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 4 : validé");
});

//SELECT COUNT(acteur.NUMERO_ACTEUR) AS Nombre_Acteur FROM acteur;
connection.query("SELECT COUNT(acteur.NUMERO_ACTEUR) AS Nombre_Acteur FROM acteur", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 5 : validé");
});

//SELECT film.TITRE_FILM

connection.query("SELECT film.TITRE_FILM FROM film INNER JOIN seance ON film.NUMERO_FILM = seance.PROJETER GROUP BY seance.PROJETER HAVING COUNT(seance.PROJETER)=2", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 6 : validé");
});

// SELECT realisateur.NOM_REALISATEUR, realisateur.PRENOM_REALISATEUR

connection.query("SELECT realisateur.NOM_REALISATEUR, realisateur.PRENOM_REALISATEUR FROM realisateur INNER JOIN film ON film.REALISER = realisateur.NUMERO_REALISATEUR INNER JOIN role ON role.NUMERO_FILM = film.NUMERO_FILM INNER JOIN acteur ON acteur.NUMERO_ACTEUR = role.NUMERO_ACTEUR WHERE acteur.NOM_ACTEUR ='Bale'", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 7 : validé");
});

// SELECT acteur.NOM_ACTEUR, COUNT(role.NOM_DU_ROLE) AS CLASSEMENT FROM acteur, role WHERE acteur.NUMERO_ACTEUR = role.NUMERO_ACTEUR GROUP BY acteur.NOM_ACTEUR ORDER BY COUNT(role.NOM_DU_ROLE) DESC;

connection.query("SELECT acteur.NOM_ACTEUR, COUNT(role.NOM_DU_ROLE) AS CLASSEMENT FROM acteur, role WHERE acteur.NUMERO_ACTEUR = role.NUMERO_ACTEUR GROUP BY acteur.NOM_ACTEUR ORDER BY COUNT(role.NOM_DU_ROLE) DESC", function (err, result) {
    if (err) {
        assert.fail(err);
    };
    console.log("Test 8 : validé");
});


bdd.closeConnection(connection);

