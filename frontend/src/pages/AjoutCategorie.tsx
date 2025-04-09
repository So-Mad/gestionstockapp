import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AjoutCategorie: React.FC<{ onSubmit: (categorie: any) => void }> = ({ onSubmit }) => {
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newCategorie = { nom, description };
    onSubmit(newCategorie);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Nom</Form.Label>
        <Form.Control
          type="text"
          value={nom}
          onChange={e => setNom(e.target.value)}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">Ajouter Catégorie</Button>
    </Form>
  );
};

export default AjoutCategorie;
