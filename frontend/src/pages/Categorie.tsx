import React from 'react';
import { Table, Button, Container, Modal } from 'react-bootstrap';

export interface Categorie {
  categorie_id?: number;
  nom: string;
  description: string;
}

interface Props {
  categories: Categorie[];
  supprimerCategorie: (categorieId: number) => void;
}

const Categories: React.FC<Props> = ({ categories, supprimerCategorie }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [categorieIdToDelete, setCategorieIdToDelete] = React.useState<number | null>(null);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = (categorieId: number) => {
    setCategorieIdToDelete(categorieId);
    setShowModal(true);
  };

  const handleDelete = () => {
    if (categorieIdToDelete !== null) {
      supprimerCategorie(categorieIdToDelete);
      handleCloseModal();
    }
  };

  return (
    <Container className="mt-4">
      <h3>Liste des Catégories</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((categorie) => (
            <tr key={categorie.categorie_id}>
              <td>{categorie.categorie_id}</td>
              <td>{categorie.nom}</td>
              <td>{categorie.description}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => handleShowModal(categorie.categorie_id!)}
                >
                  Supprimer
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Modal de confirmation */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Êtes-vous sûr de vouloir supprimer cette catégorie ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Annuler
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Supprimer
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Categories;
