
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';

const ProduitDetail = () => {
  const { id } = useParams<{ id: string }>(); // Récupérer l'ID du produit dans l'URL
  const [produit, setProduit] = useState<any | null>(null);

  useEffect(() => {
    // Remplacer par l'URL de ton API backend
    axios.get(`/api/products/${id}`)
      .then(response => setProduit(response.data))
      .catch(error => console.error('Erreur lors de la récupération du produit', error));
  }, [id]);

  if (!produit) return <p>Chargement...</p>;

  return (
    <Container>
      <Row>
        <Col>
          <h2>Détails du Produit</h2>
          <h4>{produit.nom}</h4>
          <p><strong>Catégorie:</strong> {produit.categorie}</p>
          <p><strong>Quantité:</strong> {produit.quantite}</p>
          <p><strong>Seuil Critique:</strong> {produit.seuil}</p>
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <h4>Historique des Entrées et Sorties</h4>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Quantité</th>
              </tr>
            </thead>
            <tbody>
              {produit.historique.map((entry: any, index: number) => (
                <tr key={index}>
                  <td>{entry.date}</td>
                  <td>{entry.type}</td>
                  <td>{entry.quantite}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" href="/">Retour au tableau de bord</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProduitDetail;
