import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Produit, Categorie } from '../types';

type Props = {
  produits: Produit[];
  categories: Categorie[];
  onDelete: (id: number) => void;
};

const ProduitTable: React.FC<Props> = ({ produits, categories, onDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nom</th>
          <th>Description</th>
          <th>Unité</th>
          <th>Catégorie</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {produits.map((produit) => (
          <tr key={produit.id}>
            <td>{produit.id}</td>
            <td>{produit.nom}</td>
            <td>{produit.description}</td>
            <td>{produit.unite_mesure}</td>
            <td>
              {
                categories.find((cat) => cat.id === produit.categorie_id)?.nom || 'Non spécifiée'
              }
            </td>
            <td>
              <Button variant="danger" onClick={() => produit.id && onDelete(produit.id)}>
                Supprimer
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default ProduitTable;
