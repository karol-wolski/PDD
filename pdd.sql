-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 15 Maj 2017, 12:02
-- Wersja serwera: 5.7.14
-- Wersja PHP: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `pdd`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `comments`
--

CREATE TABLE `comments` (
  `id` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `name` text NOT NULL,
  `comment` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `comments`
--

INSERT INTO `comments` (`id`, `id_product`, `name`, `comment`) VALUES
(29, 15, 'ff', 'ff'),
(28, 5, 'aaa', 'dddaa'),
(27, 5, 'Ddd', 'ddd'),
(26, 2, 'asd', 'adss'),
(25, 2, 'asd', 'adss'),
(24, 2, 'aa', 'dd'),
(23, 1, 'Aaa', 'aaa'),
(22, 1, 'Aaa', 'aaa'),
(21, 2, 'Marek', 'Mirek'),
(20, 2, 'Marek', 'Mirek'),
(39, 2, 'Test3', 'test3'),
(18, 2, 'Adam', 'MogÅ‚o byÄ‡ lepiej'),
(17, 2, 'Wicek', 'super produkt'),
(30, 6, 'aa', 'aa'),
(31, 6, 'aa', 'aa'),
(32, 2, 'ww', 'ww'),
(33, 2, 'dd', 'dd'),
(34, 1, 'DD', 'dd'),
(35, 2, 'QQQQQQQQQQ', 'qqq'),
(38, 2, 'Test', 'test'),
(40, 2, 'Test3', 'test3'),
(41, 1, 'MichaÅ‚', 'aaa'),
(42, 1, '', ''),
(43, 2, '', ''),
(44, 2, '', ''),
(45, 2, '', ''),
(46, 2, '', ''),
(47, 2, '', ''),
(48, 2, '', ''),
(49, 2, '', ''),
(50, 2, '', ''),
(51, 2, '', ''),
(52, 2, '', ''),
(53, 1, 'Karol', 'Dobre'),
(54, 43, 'Karol', 'Komentarz'),
(55, 45, 'Karol', 'Dobry produkt.'),
(56, 46, 'Karol', 'Dobry proodukt.'),
(57, 2, 'Aaa', 'ssss');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `js`
--

CREATE TABLE `js` (
  `id` int(11) NOT NULL,
  `nazwa` text CHARACTER SET latin1 NOT NULL,
  `netto` double NOT NULL,
  `vat` int(11) NOT NULL,
  `brutto` double NOT NULL,
  `kategoria` longtext CHARACTER SET latin1 NOT NULL,
  `opcja` text CHARACTER SET latin1 NOT NULL,
  `ocena` int(11) NOT NULL,
  `kod` text CHARACTER SET latin1 NOT NULL,
  `zdjecie` text COLLATE utf8_polish_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;

--
-- Zrzut danych tabeli `js`
--

INSERT INTO `js` (`id`, `nazwa`, `netto`, `vat`, `brutto`, `kategoria`, `opcja`, `ocena`, `kod`, `zdjecie`) VALUES
(2, 'ProduktB', 10, 23, 12.3, 'Kategoira 2', 'Opcja1 Opcja2 ', 2, '10-01', 'img/produktB.jpg'),
(1, 'ProduktA', 5, 23, 6.15, 'Kategoira 1', 'Opcja1 Opcja2 ', 1, '10-00', 'img/produktA.jpg'),
(3, 'ProduktC', 14.99, 23, 18.44, 'Kategoira 1', 'Opcja2 Opcja3 ', 2, '10-02', 'img/produktC.jpg'),
(5, 'ProduktE', 19.99, 23, 24.59, 'Kategoira 3', 'Opcja1 Opcja2 Opcja3 ', 3, '10-04', 'img/produktE.jpg'),
(6, 'ProduktF', 29.99, 23, 36.89, 'Kategoira 3', 'Opcja2 Opcja3 ', 4, '10-05', 'img/produktF.jpg'),
(7, 'ProduktG', 29.99, 23, 36.89, 'Kategoira 3', 'Opcja1 Opcja2 ', 3, '10-06', 'img/produktG.jpg'),
(8, 'ProduktH', 39.99, 23, 49.19, 'Kategoira 1', 'Opcja2 Opcja4 ', 4, '10-07', 'img/produktH.jpg'),
(9, 'ProduktI', 79.99, 23, 98.39, 'Kategoira 1', 'Opcja3 Opcja4 ', 5, '10-08', 'img/produktI.jpg'),
(10, 'ProduktJ', 99.99, 23, 122.99, 'Kategoira 1', 'Opcja4 Opcja5 ', 5, '10-09', 'img/produktJ.jpg'),
(47, 'abc', 22, 22, 26.84, 'Kategoira 1', 'Opcja2 Opcja3 ', 3, '11-22', ''),
(48, 'towar', 22, 22, 26.84, 'Kategoira 1', 'Opcja2 Opcja3 ', 3, '11-45', '');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `js`
--
ALTER TABLE `js`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `comments`
--
ALTER TABLE `comments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=58;
--
-- AUTO_INCREMENT dla tabeli `js`
--
ALTER TABLE `js`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
