const db = require('../config/db');

// Fonction pour récupérer les mouvements avec des filtres
const getStocks = (filters = {}) => {
  let query = `
    SELECT 
      m.*, 
      p.nom AS nom_produit 
    FROM mouvements_stock m 
    JOIN produits p ON m.produit_id = p.produit_id 
    WHERE 1=1
  `;
  const values = [];

  if (filters.produit) {
    query += ' AND p.nom LIKE ?';
    values.push(`%${filters.produit}%`);
  }
  if (filters.date) {
    query += ' AND m.date_mouvement >= ?';
    values.push(filters.date);
  }
  if (filters.type) {
    query += ' AND m.type = ?';
    values.push(filters.type);
  }

  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Récupérer l'historique complet
const getHistorique = () => {
  const query = `
    SELECT 
      m.*, 
      p.nom AS nom_produit 
    FROM mouvements_stock m 
    JOIN produits p ON m.produit_id = p.produit_id 
    ORDER BY m.date_mouvement DESC
  `;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Stocks faibles (moins de 10 dans la table des *stocks*)
const getAlertesFaiblesStocks = () => {
  const query = `
    SELECT 
      s.*, 
      p.nom AS nom_produit 
    FROM stocks s 
    JOIN produits p ON s.produit_id = p.produit_id 
    WHERE s.quantite < 10
  `;
  return new Promise((resolve, reject) => {
    db.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  getStocks,
  getHistorique,
  getAlertesFaiblesStocks
};
