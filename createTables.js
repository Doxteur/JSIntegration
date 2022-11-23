var bdd = require("./dataBase/bddConnect.js");
var fs = require("fs");
var sql = fs.readFileSync("./database/createBDD.sql").toString();


//use mocka
var connection = bdd.connectBdd();

var separator = "====================================";

//

connection.query(sql, function (err, result) {
  if (err) throw err;
  console.log("Tables created");
});
