const express = require('express');
const router = express.Router();
const stockController = require('../controllers/stockController');

// Récupérer les stocks avec filtres (via query params)
router.get('/stocks', async (req, res) => {
  try {
    const filters = {
      produit: req.query.produit,
      date: req.query.date,
      type: req.query.type
    };
    const stocks = await stockController.getStocks(filters);
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des stocks", error: error.message });
  }
});

// Historique des mouvements de stock
router.get('/history', async (req, res) => {
  try {
    const historique = await stockController.getHistorique();
    res.json(historique);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération de l'historique", error: error.message });
  }
});

// Alerte sur les faibles stocks
router.get('/alerts', async (req, res) => {
  try {
    const alertes = await stockController.getAlertesFaiblesStocks();
    res.json(alertes);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des alertes", error: error.message });
  }
});

module.exports = router;
