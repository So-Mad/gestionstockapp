// pages/AjoutProduit.tsx
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Produit, Categorie } from '../App'; // Importer les types

type Props = {
  onSubmit: (produit: Produit) => void;
  produitEnEdition: Produit | null;
  annulerEdition: () => void;
  categories: Categorie[]; // Passer les catégories dans les props
};

const AjoutProduit: React.FC<Props> = ({ onSubmit, produitEnEdition, annulerEdition, categories }) => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [uniteMesure, setUniteMesure] = useState('');
  const [categorieId, setCategorieId] = useState<number | null>(null);

  useEffect(() => {
    if (produitEnEdition) {
      setNom(produitEnEdition.nom);
      setDescription(produitEnEdition.description);
      setUniteMesure(produitEnEdition.unite_mesure);
      setCategorieId(produitEnEdition.categorie_id);
    } else {
      setNom('');
      setDescription('');
      setUniteMesure('');
      setCategorieId(null);
    }
  }, [produitEnEdition]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const produit: Produit = {
      produit_id: produitEnEdition?.produit_id,
      nom,
      description,
      unite_mesure: uniteMesure,
      categorie_id: categorieId,
    };
    onSubmit(produit);
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Nom du produit</Form.Label>
        <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Unité de mesure</Form.Label>
        <Form.Control type="text" value={uniteMesure} onChange={(e) => setUniteMesure(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Catégorie</Form.Label>
        <Form.Control as="select" value={categorieId || ''} onChange={(e) => setCategorieId(Number(e.target.value))}>
          <option value="">Sélectionner une catégorie</option>
          {categories.map((categorie) => (
            <option key={categorie.categorie_id} value={categorie.categorie_id}>
              {categorie.nom}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit" className="me-2">
        {produitEnEdition ? 'Mettre à jour' : 'Ajouter'}
      </Button>
      {produitEnEdition && (
        <Button variant="secondary" onClick={annulerEdition}>Annuler</Button>
      )}
    </Form>
  );
};

export default AjoutProduit;
