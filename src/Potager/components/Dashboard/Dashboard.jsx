import React from "react";
import './Dashboard.css'
import Header from "../Header/Header";
import { BiBarChart, BiLeaf, BiGroup } from "react-icons/bi";
const statsGeneral = [
    {
        titre: 'Fonds de caisse',
        chiffre: '18.111 F',
        icon: <BiBarChart />,
    },
    {
        titre: 'Stock plantes',
        chiffre: '100',
        icon: <BiLeaf />,
    },
    {
        titre: 'Collaborateur',
        chiffre: '9',
        icon: <BiGroup />,
    },
];
const stats2 = [
    {
        imageProduit: '/img1.png',
        quantiteProduit: '6',
        Catégorie: 'Aromatique',
    },
    {
        imageProduit: '/img2.png',
        quantiteProduit: '4',
        Catégorie: 'Aromatique',
    },
    {
        imageProduit: '/img3.png',
        quantiteProduit: '6',
        Catégorie: 'Aromatique',
    },
    {
        imageProduit: '', // L'espace réservé à la météo n'a pas d'image
        quantiteProduit: 'Météo',
        Catégorie: '',
    },
];

const commandes = [
    { id: 1, produit: 'Produit A', quantite: '10', date: '2024-08-10' },
    { id: 2, produit: 'Produit B', quantite: '5', date: '2024-08-12' },
    { id: 3, produit: 'Produit C', quantite: '7', date: '2024-08-13' },
];

const weatherData = {
    city: 'Thiès, Sénégal',
    temperature: '22°C',
    conditions: 'Ensoleillé',
    dateTime: '2024-08-15 15:00',
    forecast: [
        { day: 'Lun', tempMin: '20°C', tempMax: '24°C', condition: 'Nuageux' },
        { day: 'Mar', tempMin: '22°C', tempMax: '26°C', condition: 'Ensoleillé' },
        { day: 'Mer', tempMin: '18°C', tempMax: '21°C', condition: 'Pluvieux' },
        { day: 'Jeu', tempMin: '20°C', tempMax: '24°C', condition: 'Nuageux' },

    ],
};
const Dashboard = () => {
    return (
        <div className="contenu">
            <Header />
            <div className="stats">
                {statsGeneral.map((item) => (
                    <div className="carte">
                        <div className="card-cover">{item.icon}</div>
                        <div className="card-titre">
                            <p className="CardTitre1">{item.titre}</p>
                            <p className="CardTitre2">{item.chiffre}</p>
                        </div>


                    </div>
                ))}
            </div>
            <div className="ruptureContainer">
                <p className="titreRupture">En rupture de stock</p>
                <div className="statsWrapper">
                    <div className="statsLeft">
                        {stats2.slice(0, -1).map((item, index) => (
                            <div
                                className="carteRupture"
                                key={index}
                            >
                                <div className="qtiteProduit"></div>
                                {item.imageProduit ? (
                                    <img className="imageProduit" src={item.imageProduit} alt={item.Catégorie} />
                                ) : null}
                                {item.Catégorie && <p className="categoriePlantesRup">{item.Catégorie} <span className="qtiteProduit">({item.quantiteProduit})</span></p>}
                            </div>
                        ))}
                        <div className="tableauContainer">
                            <p className="titreCommandes">Commandes validées</p>
                            <table className="tableauCommandes">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Produit</th>
                                        <th>Quantité</th>
                                        <th>Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {commandes.map((commande) => (
                                        <tr key={commande.id}>
                                            <td>{commande.id}</td>
                                            <td>{commande.produit}</td>
                                            <td>{commande.quantite}</td>
                                            <td>{commande.date}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="statsRight">
                        <div className="carteMeteo">
                            <div className="météoHeader">
                                <h3>{weatherData.city}</h3>
                                <p className="dateTime">{weatherData.dateTime}</p>
                            </div>
                            <div className="météoCurrent">
                                <p className="temperature">{weatherData.temperature}</p>
                                <p className="conditions">{weatherData.conditions}</p>
                            </div>
                            <div className="météoForecast">
                                {weatherData.forecast.map((day, index) => (
                                    <div className="forecastDay" key={index}>
                                        <p className="day">{day.day}</p>
                                        <p className="condition">{day.condition}</p>
                                        <p className="tempRange">{day.tempMin} / {day.tempMax}</p>
                                    </div>


                                ))}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
}
export default Dashboard;