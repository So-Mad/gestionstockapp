const express = require('express');
const cors = require('cors');
const app = express();
const stockRoutes = require('./routes/stockRoutes');
const produitRoutes = require('./routes/produitRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes pour les stocks et produits
app.use('/api', stockRoutes);  // Routes des stocks
app.use('/api/produits', produitRoutes);  // Routes des produits

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
