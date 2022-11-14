var faker = require('@faker-js/faker');
var faker = faker.faker;

var utils = require('./utils.js');
var bdd = require('./bddConnect.js');

var connection = bdd.connectBdd();

utils.clearBDD(connection);


utils.insertActeur(connection,faker);
utils.insertRealisateur(connection,faker);
utils.insertFilm(connection,faker);
utils.insertseance(connection,faker);
utils.insertRole(connection);
utils.insertplace(connection);
utils.insertcategoriePlace(connection);
utils.insertcategorieSeance(connection);
utils.insertTarif(connection);
utils.insertReservation(connection,faker);


bdd.closeConnection(connection);





