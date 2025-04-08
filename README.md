# Application de Gestion de Stocks #

# Description
Application web de gestion de stocks avec backend Express.js, base MySQL, 
et frontend React.
Elle permet de gérer les produits, suivre les entrées/sorties et recevoir des 
alertes de stock faible.

# Architecture
- Frontend : React, Tailwind CSS
- Backend : Node, Express
- Base de données : MySQL
- Sécurité : JWT
- Notifications : 

# Routes API (exemples)

  ## Produits
    - GET /api/products
    - POST /api/products
    - PUT /api/products/:id
    - DELETE /api/products/:id

  ## Authentification
    - POST /api/login
    - GET /api/profile

# Lancement du projet

  ## Backend
    cd backend
    npm install
    npm run dev
    
  ## Frontend
    cd frontend
    npm install
    npm start
