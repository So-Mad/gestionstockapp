// pages/CategoriesPage.tsx
import React, { useState } from 'react';
import Categories, { Categorie } from '../pages/Categorie';

const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<Categorie[]>([
    { categorie_id: 1, nom: 'Électronique', description: 'Appareils électroniques' },
    { categorie_id: 2, nom: 'Alimentation', description: 'Produits alimentaires' },
  ]);

  const supprimerCategorie = (id: number) => {
    setCategories(categories.filter(c => c.categorie_id !== id));
  };

  return (
    <div>
      <Categories categories={categories} supprimerCategorie={supprimerCategorie} />
    </div>
  );
};

export default CategoriesPage;
