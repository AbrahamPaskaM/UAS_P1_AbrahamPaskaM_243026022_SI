-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 10 Des 2024 pada 03.22
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `basket_abraham`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `basket`
--

CREATE TABLE `basket` (
  `id` int(25) NOT NULL,
  `Pemain` varchar(25) NOT NULL,
  `Tim` varchar(25) NOT NULL,
  `Posisi` varchar(25) NOT NULL,
  `MVP` int(25) NOT NULL,
  `Trofi` int(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `basket`
--

INSERT INTO `basket` (`id`, `Pemain`, `Tim`, `Posisi`, `MVP`, `Trofi`) VALUES
(1, 'Curry', 'Golden state', 'Point Guard', 3, 3),
(2, 'LeBron James', 'LA Lakers', 'small forward', 4, 4),
(3, 'Michael Jordan', 'Bulls', 'Shooting Guard', 5, 6);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `basket`
--
ALTER TABLE `basket`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `basket`
--
ALTER TABLE `basket`
  MODIFY `id` int(25) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
