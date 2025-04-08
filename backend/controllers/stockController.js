const db = require('../config/db');

// Récupérer tous les stocks
const getStocks = (req, res) => {
  const query = 'SELECT * FROM stocks';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des stocks:', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération des stocks' });
    }
    res.json(results);
  });
};

// Récupérer l'historique des mouvements
const getHistorique = (req, res) => {
  const query = `
    SELECT 
      p.nom AS produit,
      m.date_mouvement AS date,
      m.type,
      m.quantite,
      m.commentaire
    FROM mouvements_stock m
    JOIN produits p ON m.produit_id = p.produit_id
    ORDER BY m.date_mouvement DESC
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération de l\'historique des stocks:', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération de l\'historique des stocks' });
    }
    res.json(results);
  });
};

// Récupérer les alertes de stocks faibles
const getAlertesFaiblesStocks = (req, res) => {
  const query = 'SELECT * FROM stocks WHERE quantite < 10';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des alertes de stocks faibles:', err);
      return res.status(500).json({ message: 'Erreur lors de la récupération des alertes de stocks faibles' });
    }
    res.json(results);
  });
};

module.exports = {
  getStocks,
  getHistorique,
  getAlertesFaiblesStocks
};
