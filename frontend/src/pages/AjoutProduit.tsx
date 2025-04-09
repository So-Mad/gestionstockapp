import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Produit, Categorie } from '../types';

interface Props {
  onSubmit: (produit: Produit) => void;
  produitEnEdition: Produit | null;
  annulerEdition: () => void;
  categories: Categorie[];
}

const AjoutProduit: React.FC<Props> = ({ onSubmit, produitEnEdition, annulerEdition, categories }) => {
  const [produit, setProduit] = useState<Produit>({
    nom: '',
    description: '',
    unite_mesure: '',
    categorie_id: null,
  });

  useEffect(() => {
    if (produitEnEdition) {
      setProduit(produitEnEdition);
    }
  }, [produitEnEdition]);

  // Correction du type d'événement pour FormControlElement
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProduit({
      ...produit,
      [name]: name === 'categorie_id' ? (value ? Number(value) : null) : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(produit);
    setProduit({ nom: '', description: '', unite_mesure: '', categorie_id: null });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nom</Form.Label>
        <Form.Control
          name="nom"
          value={produit.nom}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          value={produit.description}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Unité de mesure</Form.Label>
        <Form.Control
          name="unite_mesure"
          value={produit.unite_mesure}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Catégorie</Form.Label>
        <Form.Select
          name="categorie_id"
          value={produit.categorie_id ?? ''}
          onChange={handleChange}
          required
        >
          <option value="">Sélectionnez une catégorie</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.nom}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Button type="submit" className="mt-2">
        {produitEnEdition ? 'Modifier' : 'Ajouter'}
      </Button>
      {produitEnEdition && (
        <Button variant="secondary" className="mt-2 ms-2" onClick={annulerEdition}>
          Annuler
        </Button>
      )}
    </Form>
  );
};

export default AjoutProduit;
