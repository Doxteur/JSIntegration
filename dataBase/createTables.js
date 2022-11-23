var bdd = require("./bddConnect");
var fs = require("fs");
var sql = fs.readFileSync("database/createBdd.sql").toString();

var connection = bdd.connectNoDatabaseName();

// Format file for sql request
sql = sql.replace(/(\r\n|\n|\r)/gm, " ");
sql = sql.replace(/\s+/g, " ");
sql = sql.split(";");

// Create database
connection.query(
  "CREATE DATABASE IF NOT EXISTS TP_YNOV_CINEMA",
  function (err, result) {
    if (err) throw err;

    // Create Tables
    var connectionWithName = bdd.connectBdd();
    sql.forEach(function (element) {
      if (element != "") {
        connectionWithName.query(element, function (err, result) {
          if (err) throw err;
          console.log("Table created");
        });
      }
    });
    bdd.closeConnection(connectionWithName);
  }

);


bdd.closeConnection(connection);
