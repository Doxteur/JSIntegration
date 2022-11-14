
-- -- GRANT administrateur applicatif on online bdd
GRANT ALL PRIVILEGES ON *.* TO 'administrateur'@'localhost' IDENTIFIED BY 'administrateur' WITH GRANT OPTION;

-- Grant Utilisateur regulier
GRANT SELECT ON *.* TO 'utilisateur'@'localhost' IDENTIFIED BY 'utilisateur' WITH GRANT OPTION;

--  Grant security admin
GRANT SELECT, INSERT, UPDATE, DELETE ON *.* TO 'securite'@'localhost' IDENTIFIED BY 'securite' WITH GRANT OPTION;


