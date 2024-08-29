import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [identifiant, setIdentifiant] = useState('');
    const [mot_de_passe, setMotDePasse] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                identifiant,
                mot_de_passe
            });

            if (response.data) {
                // Réponse de connexion réussie
                alert('Connexion réussie!');
            } else {
                setError('Identifiant ou mot de passe incorrect');
            }
        } catch (error) {
            setError('Erreur lors de la connexion');
        }
    };

    return (
        <div>
            <h2>Connexion</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Identifiant:</label>
                    <input
                        type="text"
                        value={identifiant}
                        onChange={(e) => setIdentifiant(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mot de passe:</label>
                    <input
                        type="password"
                        value={mot_de_passe}
                        onChange={(e) => setMotDePasse(e.target.value)}
                    />
                </div>
                <button type="submit">Se connecter</button>
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
        </div>
    );
}

export default Login;
