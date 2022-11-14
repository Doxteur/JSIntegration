
var mysql = require('mysql');
require('dotenv').config();



function connectBdd() {
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT
    });
 

    connection.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return connection;
}

function closeConnection(connection) {
    connection.end();
    console.log("Connection closed");
}

module.exports = {
    connectBdd: connectBdd,
    closeConnection: closeConnection
}