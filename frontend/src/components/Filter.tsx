import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';

const Filter: React.FC = () => {
  const [nom, setNom] = useState('');
  const [categorie, setCategorie] = useState('');
  const [seuil, setSeuil] = useState(0);

  const handleNomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNom(e.target.value);
  };

  const handleCategorieChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategorie(e.target.value);
  };

  const handleSeuilChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeuil(Number(e.target.value));
  };

  return (
    <Form className="mb-4">
      <Row className="g-3">
        <Col sm={12} md={4}>
          <Form.Group controlId="filterNom">
            <Form.Label>Nom du produit</Form.Label>
            <Form.Control
              type="text"
              placeholder="Filtrer par nom"
              value={nom}
              onChange={handleNomChange}
            />
          </Form.Group>
        </Col>

        <Col sm={12} md={4}>
          <Form.Group controlId="filterCategorie">
            <Form.Label>Catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Filtrer par catégorie"
              value={categorie}
              onChange={handleCategorieChange}
            />
          </Form.Group>
        </Col>

        <Col sm={12} md={4}>
          <Form.Group controlId="filterSeuil">
            <Form.Label>Seuil critique</Form.Label>
            <Form.Control
              type="number"
              placeholder="Seuil"
              value={seuil}
              onChange={handleSeuilChange}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col sm={12} md={12} className="text-center">
          <Button variant="primary" onClick={() => console.log({ nom, categorie, seuil })}>
            Appliquer les filtres
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Filter;
