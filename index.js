var faker = require("@faker-js/faker");
var faker = faker.faker;

var utils = require("./utils/utils.js");
var bdd = require("./database/bddConnect.js");
//use mocka
var connection = bdd.connectBdd();


var separator = "====================================";

console.log(separator);
console.log("Suppression des tables");
console.log(separator);

utils.clearBDD(connection).then(function () {
  console.log(separator);
  console.log("BDD cleared");
  console.log(separator);
  console.log("Insertion des données");
  console.log(separator);
  utils.insertActeur(connection, faker);
  utils.insertRealisateur(connection, faker);
  utils.insertFilm(connection, faker);
  utils.insertseance(connection, faker);
  utils.insertRole(connection);
  utils.insertplace(connection);
  utils.insertcategoriePlace(connection);
  utils.insertcategorieSeance(connection);
  utils.insertTarif(connection);
  utils.insertReservation(connection, faker);
  bdd.closeConnection(connection);
});

// Run test