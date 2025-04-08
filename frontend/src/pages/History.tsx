import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Card, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const History = () => {
  const [historique, setHistorique] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/stocks/historique')
    .then(response => {
        setHistorique(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Erreur lors de la récupération de l'historique des stocks");
        setLoading(false);
        console.error("Erreur lors de la récupération de l'historique des stocks", error);
      });
  }, []);

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <h2 className="text-center text-primary">Historique des Stocks</h2>
        </Col>
      </Row>

      {error && (
        <Row>
          <Col>
            <Alert variant="danger">{error}</Alert>
          </Col>
        </Row>
      )}

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
                      <th>Commentaire</th>
                    </tr>
                  </thead>
                  <tbody>
                    {historique.length > 0 ? (
                      historique.map((entry, index) => (
                        <tr key={index}>
                          <td>{entry.produit}</td>
                          <td>{new Date(entry.date).toLocaleDateString()}</td>
                          <td>{entry.type}</td>
                          <td>{entry.quantite}</td>
                          <td>{entry.commentaire || '-'}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="text-center">Aucune donnée disponible</td>
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
            <Spinner animation="border" variant="primary" />
          </Col>
        </Row>
      )}

      <Row className="mt-3">
        <Col className="d-flex justify-content-center">
          <Link to="/">
            <Button variant="secondary">Retour au Tableau de Bord</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
