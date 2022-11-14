//use axios
var axios = require("axios");
var assert = require("assert");

axios
  .get("http://localhost:3000/films")
  .then(function (response) {
    assert.equal(response.data[0].TITRE_FILM, "The Shawshank Redemption");
    console.log("Test sur tous les films \u{1F44D}");
  })
  .catch(function (error) {
    console.log("Test sur tous les films \u{274C} => " + error);
  });

axios
  .get("http://localhost:3000/film/1")
  .then(function (response) {
    assert.equal(response.data[0].TITRE_FILM, "The Shawshank Redemption");
    console.log("Test sur un film \u{1F44D}");
  })
  .catch(function (error) {
    console.log("Test sur un film \u{274C} => " + error);
  });

axios
  .get("http://localhost:3000/acteurs")
  .then(function (response) {
    assert.equal(response.data[0].NOM_ACTEUR, "Kertzmann");
    console.log("Test sur tous les acteurs \u{1F44D}");
  })
  .catch(function (error) {
    console.log("Test sur tous les acteurs \u{274C} => " + error);
  });

axios
  .get("http://localhost:3000/acteur/1")
  .then(function (response) {
    assert.equal(response.data[0].NOM_ACTEUR, "Kertzmann");
    console.log("Test sur un acteur \u{1F44D}");
  })
  .catch(function (error) {
    console.log("Test sur un acteur \u{274C} => " + error);
  });

axios
  .get("http://localhost:3000/seances")
  .then(function (response) {
    assert.equal(response.data[0].NUMERO_SEANCE, 1);
    console.log("Test sur toutes les séances \u{1F44D}");
  })
  .catch(function (error) {
    console.log("Test sur toutes les séances \u{274C} => " + error);
  });
