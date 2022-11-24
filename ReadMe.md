
# CinemaBDD

## Prérequis 

- Installer [NodeJS](https://nodejs.org/en/download/) (version 18.12 LTS)
- Lancer la machine virtuelle ubuntu pour avoir un serveur MariaDB fonctionnel
- Dupliquer le fichier .env.example et le renommer en .env

## Installation

- Configurer le fichier .env avec les informations de votre serveur MariaDB

### Installer les dépendances

    - npm install

## Créer la base de données

    - npm run migrate

## Lancer la migration

    - npm run seed

## Lancer les tests

    - npm test


### Pédagogie

- Les scripts sql se trouvent dans le dossier dataBase/*.sql
- Le script createBdd est joués par la commande npm run migrate
- Le scripts de seed se trouve dans utils/utils.js