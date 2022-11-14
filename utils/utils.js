function clearBDD(connection) {
  connection.query("SET FOREIGN_KEY_CHECKS=0", function (err, result) {
    if (err) throw err;
    console.log("Foreign key check disabled");
  });
  //delete all table
  connection.query("DELETE FROM acteur", function (err, result) {
    if (err) throw err;
    console.log("Acteurs supprimés");
  });
  connection.query("DELETE FROM film", function (err, result) {
    if (err) throw err;
    console.log("Films supprimés");
  });
  connection.query("DELETE FROM realisateur", function (err, result) {
    if (err) throw err;
    console.log("Realisateurs supprimés");
  });
  connection.query("DELETE FROM role", function (err, result) {
    if (err) throw err;
    console.log("Roles supprimés");
  });
  connection.query("DELETE FROM place", function (err, result) {
    if (err) throw err;
    console.log("Places supprimés");
  });
  connection.query("DELETE FROM seance", function (err, result) {
    if (err) throw err;
    console.log("Seances supprimés");
  });
  connection.query("DELETE FROM categorie_place", function (err, result) {
    if (err) throw err;
    console.log("CategoriePlace supprimés");
  });
  connection.query("DELETE FROM categorie_seance", function (err, result) {
    if (err) throw err;
    console.log("Categorie Seance supprimés");
  });
  connection.query("DELETE FROM tarif", function (err, result) {
    if (err) throw err;
    console.log("Tarif supprimés");
  });
  connection.query("DELETE FROM reservation", function (err, result) {
    if (err) throw err;
    console.log("Reservation supprimés");
  });

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("clearBDD");
    }, 1000);
  });
}

//Insert

function insertActeur(connection, faker) {
  //reset auto increment
  resetIncrement(connection, "acteur");
  var sql =
    "INSERT INTO acteur (NOM_ACTEUR, PRENOM_ACTEUR,NATION_ACTEUR,DATE_DE_NAISSANCE) VALUES ?";
  var values = [];

  for (var i = 0; i < 10; i++) {
    values.push([
      faker.name.lastName(),
      faker.name.firstName(),
      faker.address.country(),
      faker.date.past(),
    ]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Acteurs insérés =>" + result.affectedRows);
  });
}

function insertRole(connection) {
  //reset auto increment
  resetIncrement(connection, "role");
  var sql = "INSERT INTO role (NOM_DU_ROLE,NUMERO_ACTEUR,NUMERO_FILM) VALUES ?";
  var values = [];
  // Role cinema
  var role = [
    "Protagoniste",
    "Antagoniste",
    "Figurant",
    "Second rôle",
    "Cameo",
    "Voix Off",
  ];

  for (var i = 0; i < role.length; i++) {
    values.push([role[i], i + 1, i + 1]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Roles insérés => " + result.affectedRows);
  });
}

function insertRealisateur(connection, faker) {
  //reset auto increment
  resetIncrement(connection, "realisateur");
  var sql =
    "INSERT INTO realisateur (NOM_REALISATEUR, PRENOM_REALISATEUR,NATION_REALISATEUR) VALUES ?";
  var values = [];

  for (var i = 0; i < 10; i++) {
    values.push([
      faker.name.lastName(),
      faker.name.firstName(),
      faker.address.country(),
    ]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Realisateurs insérés => " + result.affectedRows);
  });
}
function insertFilm(connection, faker) {
  //reset auto increment
  resetIncrement(connection, "film");

  //array of 10 movie name
  var movieName = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Godfather: Part II",
    "The Dark",
    "12 Angry",
    "Schindler's List",
    "The Lord of the Rings: The Return of the King",
    "Pulp Fiction",
    "The Good, the Bad and the Ugly",
    "The Lord of the Rings: The Fellowship of the Ring",
  ];
  var movieLength = [142, 175, 202, 152, 96, 195, 201, 154, 161, 178];
  var movieGenre = [
    "Drama",
    "Crime",
    "Drama",
    "Crime",
    "Drama",
    "Biography",
    "Adventure",
    "Crime",
    "Western",
    "Adventure",
  ];
  var movieReleaseDate = [
    "1994-09-23",
    "1972-03-14",
    "1974-12-20",
    "2008-09-18",
    "1957-04-10",
    "1993-11-30",
    "2003-12-01",
    "1994-10-14",
    "1966-12-23",
    "2001-12-19",
  ];
  var sql =
    "INSERT INTO film (TITRE_FILM, DATE_DE_SORTIE,DUREE,GENRE,REALISER) VALUES ?";
  var values = [];

  for (var i = 0; i < 10; i++) {
    values.push([
      movieName[i],
      movieReleaseDate[i],
      movieLength[i],
      movieGenre[i],
      i + 1,
    ]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Films insérés => " + result.affectedRows);
  });
}

function insertseance(connection, faker) {
  //reset auto increment
  resetIncrement(connection, "seance");
  var horaire = [
    "08:00:00",
    "09:00:00",
    "10:00:00",
    "12:00:00",
    "14:00:00",
    "16:00:00",
    "18:00:00",
    "20:00:00",
    "22:00:00",
    "00:00:00",
  ];
  var sql =
    "INSERT INTO seance (DATE_SEANCE,HORAIRE,PROJETER,A_POUR_CATEGORIE) VALUES ?";
  var values = [];

  for (var i = 0; i < 10; i++) {
    values.push([faker.date.past(), horaire[i], i + 1, i + 1]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Seances insérés => " + result.affectedRows);
  });
}

function insertcategorieSeance(connection) {
  //reset auto increment
  resetIncrement(connection, "categorie_seance");

  var sql = "INSERT INTO categorie_seance (TYPE_SEANCE) VALUES ?";
  var values = [];
  // Role cinema
  var typeSeance = ["3D", "4DX", "IMAX", "VO", "VF", "VO-STF"];

  for (var i = 0; i < typeSeance.length; i++) {
    values.push([typeSeance[i]]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Categorie Seances insérés => " + result.affectedRows);
  });
}

function insertcategoriePlace(connection) {
  resetIncrement(connection, "categorie_place");

  var sql = "INSERT INTO categorie_place (TYPE_PLACE) VALUES ?";
  var values = [];
  var categorie = [
    "Normale",
    "Enfant",
    "Senior",
    "Etudiant",
    "Handicapé",
    "VIP",
  ];

  for (var i = 0; i < categorie.length; i++) {
    values.push([categorie[i]]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Categorie place insérés => " + result.affectedRows);
  });
}

function insertplace(connection) {
  //reset auto increment
  resetIncrement(connection, "place");
  var sql = "INSERT INTO place (CATEGORIE_DE_LA_PLACE) VALUES ?";
  var values = [];

  for (var i = 0; i < 5; i++) {
    values.push([i]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Places insérés => " + result.affectedRows);
  });
}

function insertTarif(connection) {
  //reset auto increment
  resetIncrement(connection, "tarif");
  var sql =
    "INSERT INTO tarif (TARIF,CATEGORIE_DE_LA_SEANCE,CATEGORIE_DE_LA_PLACE) VALUES ?";
  var values = [];
  for (var i = 1; i < 7; i++) {
    for (var j = 1; j < 7; j++) {
      values.push([i + j, i, j]);
    }
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Tarifs insérés => " + result.affectedRows);
  });
}

function insertReservation(connection, faker) {
  //reset auto increment
  resetIncrement(connection, "reservation");
  var sql =
    "INSERT INTO reservation (NUMERO_SEANCE,NOM_SPECTATEUR,NUMERO_PLACE) VALUES ?";
  var values = [];
  var length = 100;

  for (var i = 1; i < length; i++) {
    var random = Math.floor(Math.random() * 10) + 1;
    var random2 = Math.floor(Math.random() * length) + 1;
    values.push([random, faker.name.fullName(), random2]);
  }

  connection.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Reservations insérés => " + result.affectedRows);
  });
}

function resetIncrement(connection, table) {
  connection.query(
    "ALTER TABLE " + table + " AUTO_INCREMENT = 1",
    function (err, result) {
      if (err) throw err;
    //   console.log("Auto increment reset");
    }
  );
}

module.exports = {
  clearBDD: clearBDD,
  insertActeur: insertActeur,
  insertFilm: insertFilm,
  insertRealisateur: insertRealisateur,
  insertseance: insertseance,
  insertRole: insertRole,
  insertcategoriePlace: insertcategoriePlace,
  insertplace: insertplace,
  insertcategorieSeance: insertcategorieSeance,
  insertTarif: insertTarif,
  insertReservation: insertReservation,
};
