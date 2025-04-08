// App.tsx
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import AjoutProduit from './pages/AjoutProduit';
import ProduitTable from './pages/ProduitTable';
import AjoutCategorie from './pages/AjoutCategorie';
import 'bootstrap/dist/css/bootstrap.min.css';

// Définir et exporter les types Produit et Categorie
export interface Produit {
  produit_id?: number;
  nom: string;
  description: string;
  unite_mesure: string;
  categorie_id: number | null;
}

export interface Categorie {
  categorie_id?: number;
  nom: string;
  description: string;
}

const App: React.FC = () => {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [produitEnEdition, setProduitEnEdition] = useState<Produit | null>(null);

  const ajouterProduit = (produit: Produit) => {
    if (produit.produit_id != null) {
      setProduits(produits.map(p => (p.produit_id === produit.produit_id ? produit : p)));
    } else {
      const nouveauProduit = {
        ...produit,
        produit_id: produits.length ? produits[produits.length - 1].produit_id! + 1 : 1,
      };
      setProduits([...produits, nouveauProduit]);
    }
    setProduitEnEdition(null);
  };

  const supprimerProduit = (id: number) => {
    setProduits(produits.filter(p => p.produit_id !== id));
  };

  const ajouterCategorie = (categorie: Categorie) => {
    setCategories([...categories, categorie]);
  };

  const supprimerCategorie = (categorieId: number) => {
    setCategories(categories.filter(c => c.categorie_id !== categorieId));
  };

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Gestion des produits et catégories</h2>
      
      <div>
        <h3>Ajouter un produit</h3>
        <AjoutProduit
          onSubmit={ajouterProduit}
          produitEnEdition={produitEnEdition}
          annulerEdition={() => setProduitEnEdition(null)}
          categories={categories} // Passer les catégories aux formulaires de produit
        />
      </div>

      <div>
        <h3>Ajouter une catégorie</h3>
        <AjoutCategorie
          onSubmit={ajouterCategorie}
        />
      </div>

      <div>
        <ProduitTable
          produits={produits}
          categories={categories}
          onDelete={supprimerProduit}
        />
      </div>
    </Container>
  );
};

export default App;
