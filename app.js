var express = require("express");
var bdd = require("./database/bddConnect.js");

var app = express();
var connection = bdd.connectBdd();

app.listen(3000, function () {
  console.log("Server is running on port http://localhost:3000");
});

app.get("/films", function (req, res) {
    connection.query("SELECT * FROM film", function (err, result, fields) {
        res.send(result);
    });
});

app.get("/film/:id", function (req, res) {
        connection.query("SELECT * FROM film WHERE NUMERO_FILM = ?", [req.params.id], function (err, result, fields) {
            res.send(result);
        });
    }
);

app.get("/acteurs", function (req, res) {
        connection.query("SELECT * FROM acteur", function (err, result, fields) {
            res.send(result);
        });
    }
);

app.get("/acteur/:id", function (req, res) {
        connection.query("SELECT * FROM acteur WHERE NUMERO_ACTEUR = ?", [req.params.id], function (err, result, fields) {
            res.send(result);
        });
    }
);

app.get("/seances", function (req, res) {
        connection.query("SELECT * FROM seance", function (err, result, fields) {
            res.send(result);
        });
    }
);

