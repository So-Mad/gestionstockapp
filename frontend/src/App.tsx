import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ProduitDetail from './pages/ProduitDetail';
import History from './pages/History';
import CategoriesPage from './pages/CategoriesPage'; 
import ProduitTable from './pages/ProduitTable'; // Assurez-vous que ProduitTable est bien importé

// Définir des données simulées pour les produits et catégories
const produits = [
  { id: 1, nom: 'Produit 1', description: 'Description 1', unite_mesure: 'kg', categorie_id: 1 },
  { id: 2, nom: 'Produit 2', description: 'Description 2', unite_mesure: 'm', categorie_id: 2 },
];

const categories = [
  { id: 1, nom: 'Catégorie 1', description: 'Description catégorie 1' },
  { id: 2, nom: 'Catégorie 2', description: 'Description catégorie 2' },
];

// Définir la fonction onDelete
const onDelete = (id: number) => {
  console.log(`Produit avec id ${id} supprimé`);
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProduitDetail />} />
        <Route path="/history" element={<History />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route 
          path="/produitTable" 
          element={<ProduitTable produits={produits} categories={categories} onDelete={onDelete} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
