import React from 'react';

interface StatsProps {
  totalProducts: number;
  lowStockCount: number;
}

const Stats: React.FC<StatsProps> = ({ totalProducts, lowStockCount }) => {
  return (
    <div className="row mt-4">
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Total Produits</h5>
            <p className="card-text">{totalProducts}</p>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Produits en rupture de stock</h5>
            <p className="card-text">{lowStockCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
