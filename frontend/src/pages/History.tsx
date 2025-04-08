import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Card, Button, Spinner, Alert } from 'react-bootstrap'; // Ajout du Spinner et Alert
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = () => {
  const [historique, setHistorique] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Indicateur de chargement
  const [error, setError] = useState<string>(''); // Message d'erreur

  useEffect(() => {
    // Remplacer par l'URL de ton API backend
    axios.get('http://localhost:5000/api/history') // Met à jour l'URL ici si nécessaire
      .then(response => {
        setHistorique(response.data);
        setLoading(false); // Fin du chargement
      })
      .catch(error => {
        setError('Erreur lors de la récupération de l\'historique des stocks');
        setLoading(false); // Fin du chargement même en cas d'erreur
        console.error('Erreur lors de la récupération de l\'historique des stocks', error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <h2 className="text-center text-primary">Historique des Stocks</h2>
        </Col>
      </Row>
      
      {/* Affichage du message d'erreur s'il y en a */}
      {error && (
        <Row>
          <Col>
            <Alert variant="danger">
              {error}
            </Alert>
          </Col>
        </Row>
      )}

      {/* Affichage du tableau s'il n'y a pas d'erreur et que les données sont disponibles */}
      {!loading ? (
        <Row>
          <Col>
            <Card className="shadow-lg">
              <Card.Body>
                <Table striped bordered hover responsive>
                  <thead className="table-light">
                    <tr>
                      <th>Produit</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Quantité</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historique.length > 0 ? (
                      historique.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.produit}</td>
                          <td>{entry.date}</td>
                          <td>{entry.type}</td>
                          <td>{entry.quantite}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={4} className="text-center">Aucune donnée disponible</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" /> {/* Affichage du loader pendant le chargement */}
          </Col>
        </Row>
      )}

      {/* Bouton de retour */}
      <Row className="mt-3">
        <Col className="d-flex justify-content-center">
          <Link to="/">
            <Button variant="secondary">Retour au Tableau de Bord</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default History;
