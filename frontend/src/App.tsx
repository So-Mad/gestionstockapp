import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import ProduitDetail from './pages/ProduitDetail';
import History from './pages/History';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/product/:id" element={<ProduitDetail />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
};

export default App;
