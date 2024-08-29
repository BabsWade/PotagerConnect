-- Adminer 4.8.4 MySQL 8.0.35 dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

SET NAMES utf8mb4;

DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `idAdmin` varchar(15) NOT NULL DEFAULT 'admin-{0000}',
  `prenom` varchar(255) NOT NULL,
  `nom` varchar(255) NOT NULL,
  `identifiant` varchar(255) NOT NULL,
  `motDePasse` varchar(255) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `admin` (`idAdmin`, `prenom`, `nom`, `identifiant`, `motDePasse`) VALUES
('admin-0001',	'Babacar',	'Wade',	'bwade@connect.com',	'Bwade@24'),
('admin-0002',	'Mouhamadou mansour',	'Ndiaye',	'mmndiaye@connect.com',	'Mmndiaye@24'),
('admin-0003',	'Safietou',	'Sarr',	'ssarr@connect.com',	'Ssarr@24');

DELIMITER ;;

CREATE TRIGGER `admin_auto-number` BEFORE INSERT ON `admin` FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(255);
    
    -- Obtenir le numéro actuel le plus élevé
    SELECT IFNULL(MAX(CAST(SUBSTRING(idAdmin, 7) AS UNSIGNED)), 0) INTO max_id FROM admin;
    
    -- Incrémenter le numéro
    SET max_id = max_id + 1;
    
    -- Générer le nouvel id avec le format désiré
    SET new_id = CONCAT('admin-', LPAD(max_id, 4, '0'));
    
    -- Assigner le nouvel id à l'insertion
    SET NEW.idAdmin = new_id;
END;;

DELIMITER ;

DROP TABLE IF EXISTS `categorie`;
CREATE TABLE `categorie` (
  `idCategorie` varchar(255) NOT NULL,
  `nomCategorie` varchar(255) NOT NULL,
  PRIMARY KEY (`idCategorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DELIMITER ;;

CREATE TRIGGER `categorie_bi` BEFORE INSERT ON `categorie` FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(255);
    
    -- Obtenir le numéro actuel le plus élevé
    SELECT IFNULL(MAX(CAST(SUBSTRING(idCategorie, 7) AS UNSIGNED)), 0) INTO max_id FROM categorie;
    
    -- Incrémenter le numéro
    SET max_id = max_id + 1;
    
    -- Générer le nouvel id avec le format désiré
    SET new_id = CONCAT('categorie-', LPAD(max_id, 4, '0'));
    
    -- Assigner le nouvel id à l'insertion
    SET NEW.idCategorie = new_id;
END;;

DELIMITER ;

DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `idClient` varchar(255) NOT NULL,
  `prenomClient` varchar(50) NOT NULL,
  `nomClient` varchar(25) NOT NULL,
  `telephone` int NOT NULL,
  `email` varchar(255) NOT NULL,
  `villeClient` varchar(25) NOT NULL,
  `adresseClient` varchar(255) NOT NULL,
  PRIMARY KEY (`idClient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DELIMITER ;;

CREATE TRIGGER `client_bi` BEFORE INSERT ON `client` FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(255);
    
    -- Obtenir le numéro actuel le plus élevé
    SELECT IFNULL(MAX(CAST(SUBSTRING(idClient, 7) AS UNSIGNED)), 0) INTO max_id FROM client;
    
    -- Incrémenter le numéro
    SET max_id = max_id + 1;
    
    -- Générer le nouvel id avec le format désiré
    SET new_id = CONCAT('client-', LPAD(max_id, 4, '0'));
    
    -- Assigner le nouvel id à l'insertion
    SET NEW.idClient = new_id;
END;;

DELIMITER ;

DROP TABLE IF EXISTS `commande`;
CREATE TABLE `commande` (
  `idCommande` varchar(255) NOT NULL,
  `quantite` int NOT NULL,
  `prixTotal` float NOT NULL,
  `date` date NOT NULL,
  `client` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `plante` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`idCommande`),
  KEY `client` (`client`),
  KEY `plante` (`plante`),
  CONSTRAINT `commande_ibfk_1` FOREIGN KEY (`client`) REFERENCES `client` (`idClient`),
  CONSTRAINT `commande_ibfk_2` FOREIGN KEY (`plante`) REFERENCES `plante` (`idPlante`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DELIMITER ;;

CREATE TRIGGER `commande_bi` BEFORE INSERT ON `commande` FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(255);
    
    -- Obtenir le numéro actuel le plus élevé
    SELECT IFNULL(MAX(CAST(SUBSTRING(idCommande, 7) AS UNSIGNED)), 0) INTO max_id FROM commande;
    
    -- Incrémenter le numéro
    SET max_id = max_id + 1;
    
    -- Générer le nouvel id avec le format désiré
    SET new_id = CONCAT('commande-', LPAD(max_id, 4, '0'));
    
    -- Assigner le nouvel id à l'insertion
    SET NEW.idCommande = new_id;
END;;

DELIMITER ;

DROP TABLE IF EXISTS `plante`;
CREATE TABLE `plante` (
  `idPlante` varchar(255) NOT NULL,
  `nomPlante` varchar(255) NOT NULL,
  `age` int NOT NULL,
  `taille` float NOT NULL,
  `prix` float NOT NULL,
  `potager` varchar(15) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `categorie` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`idPlante`),
  KEY `potager` (`potager`),
  KEY `categorie` (`categorie`),
  CONSTRAINT `plante_ibfk_1` FOREIGN KEY (`potager`) REFERENCES `potager` (`idPotager`),
  CONSTRAINT `plante_ibfk_2` FOREIGN KEY (`categorie`) REFERENCES `categorie` (`idCategorie`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


DELIMITER ;;

CREATE TRIGGER `plante_bi` BEFORE INSERT ON `plante` FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(255);
    
    -- Obtenir le numéro actuel le plus élevé
    SELECT IFNULL(MAX(CAST(SUBSTRING(idPlante, 7) AS UNSIGNED)), 0) INTO max_id FROM plante;
    
    -- Incrémenter le numéro
    SET max_id = max_id + 1;
    
    -- Générer le nouvel id avec le format désiré
    SET new_id = CONCAT('plante-', LPAD(max_id, 4, '0'));
    
    -- Assigner le nouvel id à l'insertion
    SET NEW.idPlante = new_id;
END;;

DELIMITER ;

DROP TABLE IF EXISTS `potager`;
CREATE TABLE `potager` (
  `idPotager` varchar(15) NOT NULL DEFAULT 'potager-{0000}',
  `nomPotager` varchar(255) NOT NULL,
  `telephone` int NOT NULL,
  `ville` varchar(15) NOT NULL,
  `adresse` varchar(100) NOT NULL,
  `Identifiant` varchar(255) NOT NULL,
  `motDePasse` varchar(50) NOT NULL,
  `prenomProprietaire` varchar(50) NOT NULL,
  `nomProprietaire` varchar(20) NOT NULL,
  PRIMARY KEY (`idPotager`) COMMENT 'potager-{000}'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='table pour stocker les données potager';


DELIMITER ;;

CREATE TRIGGER `potager_bi` BEFORE INSERT ON `potager` FOR EACH ROW
BEGIN
    DECLARE max_id INT;
    DECLARE new_id VARCHAR(255);
    
    -- Obtenir le numéro actuel le plus élevé
    SELECT IFNULL(MAX(CAST(SUBSTRING(idPotager, 7) AS UNSIGNED)), 0) INTO max_id FROM potager;
    
    -- Incrémenter le numéro
    SET max_id = max_id + 1;
    
    -- Générer le nouvel id avec le format désiré
    SET new_id = CONCAT('potager-', LPAD(max_id, 4, '0'));
    
    -- Assigner le nouvel id à l'insertion
    SET NEW.idPotager = new_id;
END;;

DELIMITER ;

-- 2024-08-20 21:50:57