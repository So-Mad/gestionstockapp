import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import axios from 'axios';
import Filter from '../components/Filter'; // Assurez-vous que le composant Filter est bien créé

const Dashboard: React.FC = () => {
  const [produits, setProduits] = useState<any[]>([]);

  // Récupération des produits via l'API
  useEffect(() => {
    axios.get('http://localhost:5000/api/produits')  // Remplace avec l'URL de ton API
      .then(response => setProduits(response.data))
      .catch(error => console.error('Erreur lors de la récupération des produits', error));
  }, []);

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <h2>Tableau de Bord des Produits</h2>
        </Col>
      </Row>

      {/* Filtre */}
      <Row className="my-3">
        <Col>
          <Filter /> {/* Composant de filtre */}
        </Col>
      </Row>

      {/* Table des produits */}
      <Row>
        <Col>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Catégorie</th>
                <th>Quantité</th>
                <th>Seuil Critique</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {produits.map(prod => (
                <tr key={prod.id}>
                  <td>{prod.nom}</td>
                  <td>{prod.categorie}</td>
                  <td>{prod.quantite}</td>
                  <td>{prod.seuil}</td>
                  <td>
                    <Button variant="info" href={`/product/${prod.id}`}>Détails</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
