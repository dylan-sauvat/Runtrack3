-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3307
-- Généré le : lun. 23 jan. 2023 à 09:37
-- Version du serveur : 10.10.2-MariaDB
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `utilisateurs`
--

-- --------------------------------------------------------

--
-- Structure de la table `utilisateurs`
--

DROP TABLE IF EXISTS `utilisateurs`;
CREATE TABLE IF NOT EXISTS `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prénom` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

--
-- Déchargement des données de la table `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `nom`, `prénom`, `email`, `password`) VALUES
(1, 'Shakur', 'Tupac', '2pac@laplateforme.io', '2paclypse71!'),
(2, 'The Notorious', 'B.I.G', 'Biggie@laplateforme.io', 'Biggie72!'),
(3, 'Marshal', 'Eminem', 'Eminem@laplateforme.io', 'Eminem71!'),
(4, 'Cube', 'Ice', 'Icecube@laplateforme.io', 'Icecube69!'),
(5, 'Pun', 'BIG', 'Bigpun@laplateforme.io', 'BIgpun71!'),
(6, 'Dogg', 'Snoop', 'Snoopdogg@laplateforme.io', 'Snoopdoog71!'),
(7, 'Dr.', 'Dre', 'Dr.dre@laplateforme.io', 'Drdre65!'),
(8, 'E', 'Eazy', 'Eazy-E@laplateforme.io', 'Eazye63!'),
(9, 'Digy', 'Pro', 'Prodigy@laplateforme.io', 'Prodigy72!'),
(10, 'DMX', 'DMX', 'Dmx@laplateforme.io', 'Dmx71!'),
(11, 'Tang', 'Wu', 'Wu-tang@laplateforme.io', 'Wutang70!'),
(12, 'Joe', 'Fat', 'Fatjoe@plateforme.io', 'Fatjoe71!'),
(13, 'Onyx', 'Onyx', 'Onyx@laplateforme.io', 'Onyx70!'),
(14, 'Smoke', 'Pop', 'Popsmoke@laplateforme.io', 'Popsmoke99!'),
(15, 'Ross', 'Rick', 'Rickross@laplateforme.io', 'Rickross76!'),
(16, 'Foreign', 'Fivio', 'Fivioforeign@laplateforme.io', 'Fivioforeign91!'),
(17, 'Suno', 'Ron', 'Ronsuno@laplateforme.io', 'Ronsuno92!'),
(18, 'Lamar', 'Kendrick', 'Kendricklamar@laplateforme.io', 'Kendricklamar86!'),
(19, 'Nas', 'Nas', 'Nas@laplateforme.io\r\n', 'Nas71!');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
