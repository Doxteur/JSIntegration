
-- -- GRANT administrateur applicatif on online bdd
GRANT ALL PRIVILEGES ON *.* TO 'administrateur'@'localhost' IDENTIFIED BY 'administrateur' WITH GRANT OPTION;

-- Grant Utilisateur regulier
GRANT SELECT ON *.* TO 'utilisateur'@'localhost' IDENTIFIED BY 'utilisateur' WITH GRANT OPTION;

--  Grant security admin
GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO 'securite'@'localhost' IDENTIFIED BY 'securite' WITH GRANT OPTION;



-- Create user name jimmy that is admin with a password hashed

CREATE USER foo2@test IDENTIFIED BY PASSWORD '*54958E764CE10E50764C2EECBB71D01F08549980' PASSWORD EXPIRE INTERVAL 180 DAY WITH MAX_USER_CONNECTIONS 3;
CREATE USER foo5@test IDENTIFIED BY PASSWORD '*54958E764CE10E50764C2EECBB71D01F08549980' PASSWORD EXPIRE INTERVAL 180 DAY;
GRANT SELECT ON *.* TO 'foo5'@'test' IDENTIFIED BY 'foo5' WITH MAX_USER_CONNECTIONS 3;

