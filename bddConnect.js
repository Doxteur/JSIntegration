
var mysql = require('mysql');

function connectBdd() {
    var connection = mysql.createConnection({
        host: 'b3-sql-cinema.cvb2mw4ufkxt.eu-west-3.rds.amazonaws.com',
        user: 'admin',
        password: 'jimmynils',
        database: 'B3_SQL_CINEMA',
        port: 3306
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