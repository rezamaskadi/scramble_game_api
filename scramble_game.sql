-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Feb 06, 2019 at 12:26 AM
-- Server version: 5.7.21
-- PHP Version: 7.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `scramble_game`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `salt` text NOT NULL,
  `iterations` int(11) NOT NULL,
  `password` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `salt`, `iterations`, `password`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'rezamaskadi@gmail.com', 'fwhfxkBbnLJvsLf1KAb7TG12Ts/ZjquD/FgD0DJGkan6Yx46zGzAji44/2KD12+56MFG9LIC224Vpjmtaj6KVW6AyHSWQDAiGZQazzPqCgB+lG7toUOV77yReYyfCR5fqhe7jpnBhTPCtV4U4NzihDkihwsxi9FFKn6H0kB2xjzSw2hCr9vGU8guKdIeR3HbV5i5afnWzSPayAvcuJ8zEm1t6m8V7bJNmOlKbmcrpOC2H4UmLLzeo2teSHz1TKLilH5g38N07DdRbyPJJJP+3PP4Q2BvxJgDh36gu+KcXPfAbdAfaCAR++e9uxPq3eJfuiGWCYzk3YBbgRJqXWiltw==', 10000, 'd632af11adb10454ca3546ebf0748eb6034b3fdf616a48992b0018fad1d823cea9b434f6e12d388a21390572df3ce94378da6fc64c27fdb5bd832f2f8546bf46389509792c06ddd69d7f8a7196cb85adcbf02f053a55690221ae6038824445fbddd23c35a10f03462f7624fc8b541f15b097e42860392411b26d4585ec2c5a271be6332791b65c965cd4a2dec77ac2d36afedb68d68d33e77b5de327212bff758c4f44482fa73fd9b647166bb25d7482f91f24bc1a89cb304abd8e46689c84cd3b7a6a8eb02484122d5fb13f111537ec54e7abe5009dad88987fcb4c3a7622b02cc916e11dd86f7fee5d001c922282740f2d9507fe6c0205aee79191ead5eb34f3b0824fbabec267bebfbaf9b2bfab3b03b6dcf30305b08e3590aaa49374aa163f92271dd177f223370fc68ebb540178540f686b4c6f7a159a9a3e292765114fbbe7a7ea6efbc262fe2c2968c067de54575f1735c6f582f72e3874466157a7e55b7c2404f33d0ea9ac8a131410b849e3ac17d39e3e0365470a8cf82354b563bccbaeffe0394c8c52274cebf3c47a44f4d138375a5ca5ad46b007cecd0fcb4cc7025c5700443ee9fec1afc4c58ea03c9e1ae1028732c15b5b5525cedb98a96a5c62b06709361d691650de358bcc3ad9f3e06d4d1d2a6a6eae9cb50d2680533a8e93569a1e669f247f66d9da85b9143877e947576125f85b25fa59d60310117e39', '2019-02-03 02:22:55', '2019-02-03 02:22:55', NULL),
(2, 'justmoh@gmail.com', '2fKDANQcCYdoaU0Ho+Z92q1kbqHLReLdUKsIwSFfKHDjoJNaJImiHZfZV3ZIS+S1bnSYcpJZO3Xb+5/oPHV+lBmL8vldvY5PF0uhVXhAR7PNhHLuDmbFC5lwKQsXYWzWhOfyR5o0UMx/bjmlvCvaB+JeVKsLb5QEFs9HXtEMEraljiKXJ7INJfvZYmInxxqa5GpFJK2porqLdsYjnTroWy0j7wwK5tYsFn9Oo8ADBbXH6Ftje5NrDoMbyIXTbxOzyWnALKqVGXMt9ZHLO/G836WNuUqWm+w/rfi1QanezGojhWCd5hnDiGgtTUqpkoO2E6jo0i6gF7zjjDHrabQZcw==', 10000, '271789fcc327466623e540e59efb51ada0981f84f3836398fbfdb26ea55d755da4fbb42f8db14014b3d0ff70f8ca9eef3051bdd176ac09b741fb2202920d0ea476b47ed0549b4b7896a4514c57b573c9cd6d03d7904a0e73cd4e3971fb9b168556c2afa88444cda94592a2ec10b5a6dcbe7e3ef44bc5a3a6899c51822de44604c007d4ad1a90b0836de428c901c91b7696496b0ec90d0bd1761155e91dbded4a375d56f90773c393bcfa68ebea8cb4431c59a7b0cbbc5e348ba022e2fab4346b8a76af8bcb2b39aba8073a129c80e7dd115636c7cb4da5ee66470b16b1616f320bba449453c7808d513bc614a68dff1e5b8a6cea710e3bb3c91380cff067f6bc28982a92f79a13589cf6b8eae264952aafdbdf897d821a3ef62c5b6d3f8d26d6ef66427d3691f88c3ee45ee3dcb281c5d35f388e11e8146dc876f42a9eb234e81dfb0bb5475154e3e110f58dc83e8e56199e5b3894d62afe5854326102bc346518bd3bd09196b1700f7f9525356b62410ea1cf3a6515aa686db8b48c2aac581b5578fc565828b8105478de335cefd2ecef48d25d371814b8f9192e2859ff0a334e5f47f08d9d7459cf20380ed6c2bcd12a4dbeb9b1374d719f7e1f76dde6da0c9317e0852d55cb5bb1bccb7c8619a53f4655b260a77e86fcb02ae0778fdd3398f1966530c89a35a2387e71b57ec8b040997acfcfbbb4e68be04d0db3597c2821', '2019-02-03 02:52:10', '2019-02-03 02:52:10', NULL),
(3, 'admin@gmail.com', 'XogHZqUbV8vGXT+6kzOpxEsH00yPNMe5DvYHZRca0N7c8moLXD+jTCpLajPafmNVeGYr0GyoYc0DG6a1T1pP9BBW+d7rw8Yx5S1IchEpbjkVqJwhkbMMxPzdCCcru1BxOFX4Dsx3YEeF4hgFY8a66QQylNJP6yEvrdLYY2p1y/1Isu2Dkv9sJJVmvmsHKn1/CHUjRjX4Dc7bhofjWGcVfGPizgcYm/c6iLVoxpeva9VEhNzTVUp5y8vfDZeohe2S6y5eKI//jJIgwxFUXXjDRbFGOVTLIOu3KiIsB9S23xOVVWI6PqUgJqyyfu5vYZk/pk4ZZLotpd+yPLxXHAAGfw==', 10000, 'f355b3a2262dede875891688a6803aedba67d986858fdb9f699ff5d8a4e065c30e9eb4d8db05551b6a07aa938ec772061c7d8fcde0140b9d33644b82e2de852c2d52d8ee433d3d99ad308680ad165bca4e933a9acf6edf1e70d346c4d7730c3ae8f58197a9ea755b298d2e0915b6faa2faedbb2fd2b7ed063d26823c8de7b9197534ba0e9d093972ee486f0188b8d7c83ac9b901c9d20f47380195fa334c14af5b35bece4119f5bee0830c999217008e1947d45825d7f935f33948f321da5f8c40f45931343bd711cbe3f2cedcf4d8927df922918f826382d04fe587f78f2eb0245f95987af137e3939eee73e7e0516d25c7dcb89badf0c6d12b8478a9194931ff71395549108af7406b3ad7a6f47f87e781146d1dcb20408db774e8fc0ab61b2444f37647475e236d859cd5baa6b3eedff80878728395bbee8b2d2527cd6429801d713e3b36012a06bab1f8d5008954e50dc69852b33fc90273ed88222cf0832e74a6eeebe6e52aa20b5ad105d47df8a6df0b51a37195a6776babca54262691fce09ea8588bc5bc38d20c984ce332646ee8e2b68d3a9c3751f1ac4fe66a73a3964e20b3c239bf4acc6f6118641fa7f5b00592117fed4eb3d33833fefebc289742670a284d90a59abc1183addeeeb4ef14e82c497568fba0ecf3a1c49f6f1978ec32b37bcd068002fd2baba00805db5b2c4c807de65495b3452323e169e59974', '2019-02-05 09:14:42', '2019-02-05 09:14:42', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `total_hint` int(11) NOT NULL DEFAULT '3',
  `score` int(11) NOT NULL DEFAULT '100',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `total_hint`, `score`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(32, 'rezamaskadi2', 'rezamaskadi@gmail.com', 3, 190, '2019-02-05 07:53:44', '2019-02-05 07:54:14', NULL),
(33, 'onilrose', 'onilrose@gmail.com', 2, 190, '2019-02-05 09:26:35', '2019-02-05 09:27:26', NULL),
(34, 'rezamaskadi3', 'rezamaskadi3@gmail.com', 0, 1100, '2019-02-05 09:32:31', '2019-02-05 09:34:10', NULL),
(36, 'Nizar', 'nizar@gmail.com', 1, 300, '2019-02-05 13:30:02', '2019-02-05 13:30:40', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_answer`
--

CREATE TABLE `user_answer` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `word_id` int(11) NOT NULL,
  `status` enum('correct','timeout','wrong') NOT NULL,
  `answer` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_answer`
--

INSERT INTO `user_answer` (`id`, `user_id`, `word_id`, `status`, `answer`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(103, 32, 1, 'wrong', 'olin', '2019-02-05 07:53:52', '2019-02-05 07:53:52', NULL),
(104, 32, 1, 'correct', 'lion', '2019-02-05 07:54:14', '2019-02-05 07:54:14', NULL),
(105, 33, 1, 'wrong', 'onil', '2019-02-05 09:26:45', '2019-02-05 09:26:45', NULL),
(106, 33, 1, 'correct', 'lion', '2019-02-05 09:27:21', '2019-02-05 09:27:21', NULL),
(107, 34, 1, 'correct', 'lion', '2019-02-05 09:32:39', '2019-02-05 09:32:39', NULL),
(108, 34, 2, 'correct', 'mouse', '2019-02-05 09:32:45', '2019-02-05 09:32:45', NULL),
(109, 34, 3, 'correct', 'tiger', '2019-02-05 09:33:01', '2019-02-05 09:33:01', NULL),
(110, 34, 4, 'correct', 'computer', '2019-02-05 09:33:18', '2019-02-05 09:33:18', NULL),
(111, 34, 5, 'correct', 'batery', '2019-02-05 09:33:26', '2019-02-05 09:33:26', NULL),
(112, 34, 6, 'correct', 'ironman', '2019-02-05 09:33:38', '2019-02-05 09:33:38', NULL),
(113, 34, 7, 'correct', 'superman', '2019-02-05 09:33:45', '2019-02-05 09:33:45', NULL),
(114, 34, 8, 'correct', 'wolverine', '2019-02-05 09:33:59', '2019-02-05 09:33:59', NULL),
(115, 34, 9, 'correct', 'cabel', '2019-02-05 09:34:03', '2019-02-05 09:34:03', NULL),
(116, 34, 10, 'correct', 'jakarta', '2019-02-05 09:34:09', '2019-02-05 09:34:09', NULL),
(117, 36, 1, 'correct', 'lion', '2019-02-05 13:30:13', '2019-02-05 13:30:13', NULL),
(118, 36, 2, 'correct', 'mouse', '2019-02-05 13:30:29', '2019-02-05 13:30:29', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `word`
--

CREATE TABLE `word` (
  `id` int(11) NOT NULL,
  `word` varchar(100) NOT NULL,
  `scramble_word` varchar(100) NOT NULL,
  `hint` varchar(100) NOT NULL,
  `hint_2` varchar(100) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `word`
--

INSERT INTO `word` (`id`, `word`, `scramble_word`, `hint`, `hint_2`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'lion', 'olni', 'animal', 'Raja hutan dalam bahasa inggris', '2019-02-03 02:47:47', '2019-02-03 02:47:47', NULL),
(2, 'mouse', 'eumso', 'animal', 'Binatang pengerat dalam bahasa inggris', '2019-02-03 02:48:58', '2019-02-03 02:48:58', NULL),
(3, 'tiger', 'eritg', 'animal', 'Kucing besar dan belang dalam bahasa inggris', '2019-02-03 02:53:35', '2019-02-03 02:53:35', NULL),
(4, 'computer', 'mtreuocp', 'electronics', 'Laptop', '2019-02-03 06:40:51', '2019-02-03 06:40:51', NULL),
(5, 'batery', 'aerytb', 'power supply', 'Digunakan pada remote', '2019-02-03 06:41:33', '2019-02-03 06:41:33', NULL),
(6, 'ironman', 'oarnnim', 'superhero', 'Manusia besi', '2019-02-03 06:42:28', '2019-02-03 06:42:28', NULL),
(7, 'superman', 'rmausnep', 'superhero', 'Manusia super', '2019-02-03 06:42:44', '2019-02-03 06:42:44', NULL),
(8, 'wolverine', 'rwieolenv', 'superhero', 'Manusia bercakar', '2019-02-03 06:43:46', '2019-02-03 06:43:46', NULL),
(9, 'cabel', 'ebalc', 'electronics', 'Penghantar listrik', '2019-02-03 06:44:14', '2019-02-03 06:44:14', NULL),
(10, 'jakarta', 'atkraja', 'Indonesia city', 'Ibu kota negara Indonesia', '2019-02-03 06:44:47', '2019-02-03 06:44:47', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `admin_id_unique` (`id`),
  ADD UNIQUE KEY `admin_email_unique` (`email`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `user_id_unique` (`id`),
  ADD UNIQUE KEY `user_username_unique` (`username`);

--
-- Indexes for table `user_answer`
--
ALTER TABLE `user_answer`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `user_answer_id_unique` (`id`);

--
-- Indexes for table `word`
--
ALTER TABLE `word`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `word` (`word`),
  ADD UNIQUE KEY `word_id_unique` (`id`),
  ADD UNIQUE KEY `word_word_unique` (`word`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `user_answer`
--
ALTER TABLE `user_answer`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=119;

--
-- AUTO_INCREMENT for table `word`
--
ALTER TABLE `word`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
