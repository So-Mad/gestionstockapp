const express = require('express');
const cors = require('cors');
const app = express();
const stockRoutes = require('./routes/stockRoutes');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', stockRoutes);

// Lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
