// backend/app.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const produitRoutes = require('./routes/produitRoutes'); // Exemple de route

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/produits', produitRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
