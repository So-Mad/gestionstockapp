const db = require('../config/db');  // Connexion à la base de données

const ajouterProduit = (data, callback) => {
  const { nom, description, entreprise_id, categorie_id, unite_mesure } = data;
  const query = `INSERT INTO produits (nom, description, entreprise_id, categorie_id, unite_mesure) 
                 VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [nom, description, entreprise_id, categorie_id, unite_mesure], callback);
};

const getProduits = (callback) => {
  const query = 'SELECT * FROM produits';
  db.query(query, callback);
};

const supprimerProduit = (id, callback) => {
  const query = 'DELETE FROM produits WHERE produit_id = ?';
  db.query(query, [id], callback);
};

module.exports = {
  ajouterProduit,
  getProduits,
  supprimerProduit
};
