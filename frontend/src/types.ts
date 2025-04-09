export type Categorie = {
    id: number;
    nom: string;
  };
  
  export type Produit = {
    id?: number;
    nom: string;
    description: string;
    unite_mesure: string;
    categorie_id: number | null;
  };
  
  