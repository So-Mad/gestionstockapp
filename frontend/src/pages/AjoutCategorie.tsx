// pages/AjoutCategorie.tsx
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Categorie } from '../App'; // Importer l'interface Categorie

type Props = {
  onSubmit: (categorie: Categorie) => void;
};

const AjoutCategorie: React.FC<Props> = ({ onSubmit }) => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const categorie: Categorie = {
      nom,
      description,
    };
    onSubmit(categorie);
    setNom('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Form.Group className="mb-3">
        <Form.Label>Nom de la catégorie</Form.Label>
        <Form.Control type="text" value={nom} onChange={(e) => setNom(e.target.value)} required />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Ajouter
      </Button>
    </Form>
  );
};

export default AjoutCategorie;
