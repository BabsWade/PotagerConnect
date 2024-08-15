import Login from './admin/auth/login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';

import './App.css';
import Dashbord from './admin/components/dashbord';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Ajoutez votre logique d'authentification ici
    // Si l'authentification est réussie, définissez `isAuthenticated` sur true
    setIsAuthenticated(true); // Simule une connexion réussie
  }
  return (
    <Router>
      <Routes>
        <Route path="/admin/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/admin/dashbord" element={<Dashbord />} />
        <Route path="/" element={<Navigate to="/accueil" />} />
      </Routes>
    </Router>
    
  );
}

export default App;
