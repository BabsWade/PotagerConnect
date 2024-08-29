<<<<<<< HEAD
import './App.css';
import Menu from './Potager/components/Menu/Menu';
import Dashboard from './Potager/components/Dashboard/Dashboard';
=======
import Login from './admin/auth/login';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';
import Dashboard from './admin/components/dashboard';

>>>>>>> ac168ee1221eda19886f1dc08fed49230a72de3f
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (email, password) => {
    // Ajoutez votre logique d'authentification ici
    // Si l'authentification est réussie, définissez `isAuthenticated` sur true
    setIsAuthenticated(true); // Simule une connexion réussie
  }
  return (
<<<<<<< HEAD
    <div className="dashboard">
      <Menu />
      <div className="contenu-dashboard">
        <Dashboard />
      </div>

    </div>
=======
    <Router>
      <Routes>
        <Route path="/admin/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/admin/dashbord" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/accueil" />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
    
>>>>>>> ac168ee1221eda19886f1dc08fed49230a72de3f
  );
};

export default App;