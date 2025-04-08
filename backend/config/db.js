// backend/config/db.js
require('dotenv').config();  // Charger les variables d'environnement à partir du fichier .env

const mysql = require('mysql');

// Créer une connexion à la base de données MySQL en utilisant les variables d'environnement
const db = mysql.createConnection({
  host: process.env.DB_HOST,       // Utiliser la variable d'environnement DB_HOST
  user: process.env.DB_USER,       // Utiliser la variable d'environnement DB_USER
  password: process.env.DB_PASSWORD, // Utiliser la variable d'environnement DB_PASSWORD
  database: process.env.DB_NAME,   // Utiliser la variable d'environnement DB_NAME
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    throw err;  // Gérer les erreurs de connexion
  }
  console.log('Connexion à la base de données réussie');
});

module.exports = db;
