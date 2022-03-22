-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 22-03-2022 a las 20:41:28
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbnegociopetshop`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cart`
--

CREATE TABLE `cart` (
  `idcart` int(11) NOT NULL,
  `idorder` int(11) NOT NULL,
  `idproducts` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `quantity` bigint(12) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `cart`
--

INSERT INTO `cart` (`idcart`, `idorder`, `idproducts`, `iduser`, `quantity`, `created_at`, `update_at`) VALUES
(1, 24, 19, 4, 1, '2022-03-19 19:01:06', '2022-03-19 19:01:06'),
(2, 25, 18, 4, 1, '2022-03-19 19:09:32', '2022-03-19 19:09:32'),
(3, 26, 23, 4, 1, '2022-03-19 19:12:13', '2022-03-19 19:12:13'),
(4, 27, 18, 4, 1, '2022-03-19 19:15:05', '2022-03-19 19:15:05'),
(5, 28, 23, 4, 1, '2022-03-19 19:18:19', '2022-03-19 19:18:19'),
(6, 29, 18, 4, 1, '2022-03-19 19:21:21', '2022-03-19 19:21:21'),
(7, 30, 18, 4, 1, '2022-03-19 19:21:35', '2022-03-19 19:21:35'),
(8, 31, 23, 4, 1, '2022-03-19 19:25:51', '2022-03-19 19:25:51'),
(9, 32, 18, 4, 1, '2022-03-19 19:28:08', '2022-03-19 19:28:08'),
(10, 33, 18, 4, 1, '2022-03-19 19:35:49', '2022-03-19 19:35:49'),
(11, 34, 18, 4, 1, '2022-03-19 19:38:15', '2022-03-19 19:38:15'),
(12, 35, 19, 4, 1, '2022-03-19 19:40:14', '2022-03-19 19:40:14'),
(13, 36, 19, 4, 1, '2022-03-19 20:27:07', '2022-03-19 20:27:07'),
(14, 37, 23, 4, 1, '2022-03-19 20:30:51', '2022-03-19 20:30:51'),
(15, 38, 18, 4, 1, '2022-03-19 20:32:33', '2022-03-19 20:32:33'),
(16, 39, 19, 4, 1, '2022-03-19 20:34:04', '2022-03-19 20:34:04'),
(17, 40, 19, 4, 1, '2022-03-19 20:34:12', '2022-03-19 20:34:12'),
(18, 41, 18, 4, 1, '2022-03-19 20:34:37', '2022-03-19 20:34:37'),
(19, 42, 18, 4, 1, '2022-03-19 20:36:06', '2022-03-19 20:36:06'),
(20, 43, 18, 4, 1, '2022-03-19 20:36:16', '2022-03-19 20:36:16'),
(21, 44, 18, 4, 1, '2022-03-19 20:37:32', '2022-03-19 20:37:32'),
(22, 45, 18, 4, 1, '2022-03-19 20:47:27', '2022-03-19 20:47:27'),
(23, 46, 18, 4, 1, '2022-03-19 20:57:21', '2022-03-19 20:57:21'),
(24, 47, 19, 4, 1, '2022-03-19 21:01:07', '2022-03-19 21:01:07'),
(25, 48, 19, 4, 1, '2022-03-19 21:04:58', '2022-03-19 21:04:58'),
(26, 49, 18, 4, 1, '2022-03-19 21:07:11', '2022-03-19 21:07:11'),
(27, 50, 18, 4, 1, '2022-03-19 22:33:29', '2022-03-19 22:33:29'),
(28, 52, 18, 4, 1, '2022-03-19 22:42:24', '2022-03-19 22:42:24'),
(29, 53, 18, 4, 1, '2022-03-19 22:44:17', '2022-03-19 22:44:17'),
(30, 54, 18, 4, 1, '2022-03-19 22:50:37', '2022-03-19 22:50:37'),
(31, 55, 18, 4, 1, '2022-03-19 22:52:12', '2022-03-19 22:52:12'),
(32, 56, 18, 4, 1, '2022-03-19 22:57:02', '2022-03-19 22:57:02'),
(33, 57, 18, 4, 1, '2022-03-21 20:20:07', '2022-03-21 20:20:07'),
(34, 58, 18, 4, 1, '2022-03-21 20:23:52', '2022-03-21 20:23:52'),
(35, 59, 19, 4, 1, '2022-03-21 20:31:00', '2022-03-21 20:31:00'),
(36, 60, 18, 4, 1, '2022-03-21 20:32:56', '2022-03-21 20:32:56'),
(37, 61, 18, 4, 1, '2022-03-21 20:44:21', '2022-03-21 20:44:21'),
(38, 64, 19, 4, 1, '2022-03-21 20:55:18', '2022-03-21 20:55:18'),
(39, 65, 18, 4, 1, '2022-03-21 21:00:07', '2022-03-21 21:00:07'),
(40, 66, 18, 4, 1, '2022-03-21 21:52:30', '2022-03-21 21:52:30'),
(41, 67, 18, 4, 1, '2022-03-21 21:59:03', '2022-03-21 21:59:03'),
(42, 68, 18, 4, 1, '2022-03-21 22:31:42', '2022-03-21 22:31:42'),
(43, 69, 18, 4, 1, '2022-03-21 22:35:04', '2022-03-21 22:35:04'),
(44, 70, 18, 4, 1, '2022-03-21 22:36:30', '2022-03-21 22:36:30'),
(45, 73, 23, 4, 1, '2022-03-22 01:15:49', '2022-03-22 01:15:49'),
(46, 1, 23, 4, 5, '2022-03-22 01:15:56', '2022-03-22 11:55:08'),
(47, 1, 23, 4, 5, '2022-03-22 01:16:02', '2022-03-22 11:55:08'),
(48, 1, 23, 4, 5, '2022-03-22 01:16:31', '2022-03-22 11:55:08'),
(49, 1, 23, 4, 5, '2022-03-22 01:16:33', '2022-03-22 11:55:08'),
(50, 1, 18, 4, 8, '2022-03-22 01:24:05', '2022-03-22 18:38:08'),
(51, 1, 19, 4, 4, '2022-03-22 01:47:37', '2022-03-22 18:18:59'),
(52, 1, 21, 4, 1, '2022-03-22 02:35:30', '2022-03-22 02:35:30'),
(53, 1, 21, 4, 1, '2022-03-22 02:35:47', '2022-03-22 02:35:47'),
(54, 1, 22, 4, 1, '2022-03-22 02:38:30', '2022-03-22 02:38:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `idcategory` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `condicion` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`idcategory`, `name`, `condicion`) VALUES
(1, 'Aves', 1),
(2, 'Gatos', 1),
(3, 'Peces', 1),
(4, 'Perros', 1),
(5, 'Roedores', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order`
--

CREATE TABLE `order` (
  `idorder` int(11) NOT NULL,
  `idusers` int(11) NOT NULL,
  `state` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `creadted_at` datetime NOT NULL,
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `order`
--

INSERT INTO `order` (`idorder`, `idusers`, `state`, `creadted_at`, `update_at`) VALUES
(1, 4, 'pending', '2022-03-18 17:22:41', '2022-03-18 17:22:41'),
(2, 4, 'pending', '2022-03-18 17:30:37', '2022-03-18 17:30:37'),
(3, 4, 'pending', '2022-03-18 17:37:43', '2022-03-18 17:37:43'),
(4, 4, 'pending', '2022-03-18 17:47:52', '2022-03-18 17:47:52'),
(5, 4, 'pending', '2022-03-18 22:58:47', '2022-03-18 22:58:47'),
(6, 4, 'pending', '2022-03-18 23:08:30', '2022-03-18 23:08:30'),
(7, 4, 'pending', '2022-03-18 23:16:19', '2022-03-18 23:16:19'),
(8, 4, 'pending', '2022-03-18 23:28:41', '2022-03-18 23:28:41'),
(9, 4, 'pending', '2022-03-18 23:33:05', '2022-03-18 23:33:05'),
(10, 4, 'pending', '2022-03-18 23:39:42', '2022-03-18 23:39:42'),
(11, 4, 'pending', '2022-03-19 00:01:36', '2022-03-19 00:01:36'),
(12, 4, 'pending', '2022-03-19 00:11:18', '2022-03-19 00:11:18'),
(13, 4, 'pending', '2022-03-19 00:39:18', '2022-03-19 00:39:18'),
(14, 4, 'pending', '2022-03-19 01:05:24', '2022-03-19 01:05:24'),
(15, 4, 'pending', '2022-03-19 01:55:46', '2022-03-19 01:55:46'),
(16, 4, 'pending', '2022-03-19 18:01:08', '2022-03-19 18:01:08'),
(17, 4, 'pending', '2022-03-19 18:04:43', '2022-03-19 18:04:43'),
(18, 4, 'pending', '2022-03-19 18:08:30', '2022-03-19 18:08:30'),
(19, 4, 'pending', '2022-03-19 18:25:40', '2022-03-19 18:25:40'),
(20, 4, 'pending', '2022-03-19 18:40:09', '2022-03-19 18:40:09'),
(21, 4, 'pending', '2022-03-19 18:54:37', '2022-03-19 18:54:37'),
(22, 4, 'pending', '2022-03-19 18:58:17', '2022-03-19 18:58:17'),
(23, 4, 'pending', '2022-03-19 19:00:07', '2022-03-19 19:00:07'),
(24, 4, 'pending', '2022-03-19 19:01:06', '2022-03-19 19:01:06'),
(25, 4, 'pending', '2022-03-19 19:09:32', '2022-03-19 19:09:32'),
(26, 4, 'pending', '2022-03-19 19:12:13', '2022-03-19 19:12:13'),
(27, 4, 'pending', '2022-03-19 19:15:05', '2022-03-19 19:15:05'),
(28, 4, 'pending', '2022-03-19 19:18:19', '2022-03-19 19:18:19'),
(29, 4, 'pending', '2022-03-19 19:21:21', '2022-03-19 19:21:21'),
(30, 4, 'pending', '2022-03-19 19:21:35', '2022-03-19 19:21:35'),
(31, 4, 'pending', '2022-03-19 19:25:51', '2022-03-19 19:25:51'),
(32, 4, 'pending', '2022-03-19 19:28:08', '2022-03-19 19:28:08'),
(33, 4, 'pending', '2022-03-19 19:35:48', '2022-03-19 19:35:48'),
(34, 4, 'pending', '2022-03-19 19:38:14', '2022-03-19 19:38:14'),
(35, 4, 'pending', '2022-03-19 19:40:14', '2022-03-19 19:40:14'),
(36, 4, 'pending', '2022-03-19 20:27:06', '2022-03-19 20:27:06'),
(37, 4, 'pending', '2022-03-19 20:30:51', '2022-03-19 20:30:51'),
(38, 4, 'pending', '2022-03-19 20:32:33', '2022-03-19 20:32:33'),
(39, 4, 'pending', '2022-03-19 20:34:04', '2022-03-19 20:34:04'),
(40, 4, 'pending', '2022-03-19 20:34:12', '2022-03-19 20:34:12'),
(41, 4, 'pending', '2022-03-19 20:34:37', '2022-03-19 20:34:37'),
(42, 4, 'pending', '2022-03-19 20:36:06', '2022-03-19 20:36:06'),
(43, 4, 'pending', '2022-03-19 20:36:16', '2022-03-19 20:36:16'),
(44, 4, 'pending', '2022-03-19 20:37:32', '2022-03-19 20:37:32'),
(45, 4, 'pending', '2022-03-19 20:47:27', '2022-03-19 20:47:27'),
(46, 4, 'pending', '2022-03-19 20:57:21', '2022-03-19 20:57:21'),
(47, 4, 'pending', '2022-03-19 21:01:07', '2022-03-19 21:01:07'),
(48, 4, 'pending', '2022-03-19 21:04:58', '2022-03-19 21:04:58'),
(49, 4, 'pending', '2022-03-19 21:07:11', '2022-03-19 21:07:11'),
(50, 4, 'pending', '2022-03-19 22:33:29', '2022-03-19 22:33:29'),
(51, 4, 'pending', '2022-03-19 22:40:49', '2022-03-19 22:40:49'),
(52, 4, 'pending', '2022-03-19 22:42:24', '2022-03-19 22:42:24'),
(53, 4, 'pending', '2022-03-19 22:44:17', '2022-03-19 22:44:17'),
(54, 4, 'pending', '2022-03-19 22:50:37', '2022-03-19 22:50:37'),
(55, 4, 'pending', '2022-03-19 22:52:12', '2022-03-19 22:52:12'),
(56, 4, 'pending', '2022-03-19 22:57:02', '2022-03-19 22:57:02'),
(57, 4, 'pending', '2022-03-21 20:20:07', '2022-03-21 20:20:07'),
(58, 4, 'pending', '2022-03-21 20:23:52', '2022-03-21 20:23:52'),
(59, 4, 'pending', '2022-03-21 20:31:00', '2022-03-21 20:31:00'),
(60, 4, 'pending', '2022-03-21 20:32:56', '2022-03-21 20:32:56'),
(61, 4, 'pending', '2022-03-21 20:44:21', '2022-03-21 20:44:21'),
(62, 4, 'pending', '2022-03-21 20:48:02', '2022-03-21 20:48:02'),
(63, 4, 'pending', '2022-03-21 20:49:42', '2022-03-21 20:49:42'),
(64, 4, 'pending', '2022-03-21 20:55:18', '2022-03-21 20:55:18'),
(65, 4, 'pending', '2022-03-21 21:00:06', '2022-03-21 21:00:06'),
(66, 4, 'pending', '2022-03-21 21:52:30', '2022-03-21 21:52:30'),
(67, 4, 'pending', '2022-03-21 21:59:03', '2022-03-21 21:59:03'),
(68, 4, 'pending', '2022-03-21 22:31:42', '2022-03-21 22:31:42'),
(69, 4, 'pending', '2022-03-21 22:35:04', '2022-03-21 22:35:04'),
(70, 4, 'pending', '2022-03-21 22:36:30', '2022-03-21 22:36:30'),
(71, 4, 'pending', '2022-03-22 00:48:25', '2022-03-22 00:48:25'),
(72, 4, 'pending', '2022-03-22 00:57:00', '2022-03-22 00:57:00'),
(73, 4, 'pending', '2022-03-22 01:15:49', '2022-03-22 01:15:49');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idproducts` int(11) NOT NULL,
  `nombre` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `description` varchar(256) COLLATE utf8_spanish_ci NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `estado` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `idsubcategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idproducts`, `nombre`, `description`, `stock`, `discount`, `price`, `estado`, `idsubcategory`) VALUES
(1, 'Rascador para gato', 'Ideal para entretener, liberar el estrés de su gato y cuidar sus muebles.\r\nRascador para gatos GATOMÓN. Base construida en madera y superficie de cartón corrugado doble para mayor durabilidad. Medidas: 60 cm x 30 cm.', 10, 10, '1200.00', 'activo', 19),
(2, 'Pipeta para pulgas y garrapatas Bravecto', 'Marca lider del Mercado!! Bravecto la pipeta que protege a su mascota por 6 meses garantizados. Pipeta dosificadora para pulgas y garrapatas, se aplica sobre la nuca de perro y no produce malestar ni molestias.', 100, 5, '2400.00', 'activo', 27),
(3, 'Pescera esférica', 'Pescera esférica marca BUBBLES!! Diseño asombroso del mejor cristal templado del mercado. Sencilla y ocupa poco espacio.', 10, 10, '1750.00', 'activo', 5),
(16, 'Jaula de alambre acerado para pájaros', ' Jaula para pájaros pequeños construieda con alambre acerado, no se oxida!,\r\nideal para departametos. Jaulas \"EL MIRLO\".                              \r\n                            ', 30, 10, '2100.00', 'activo', 9),
(17, 'Esfera para hamster Burbuja', ' Esfera plástica con doble tapa y ventilación mejorada para pequeños roedores, Marca FATRAT. Horas de entretenimiento para su mascota.                                \r\n                            ', 50, 5, '1120.00', 'activo', 12),
(18, 'Litera para gato BATHCAT', 'Litera hermética para gato BATHCAT. Totalmente desmontable y fácil de lavar.\r\nPrecio promocional 15% off.                  \r\n                            ', 50, 15, '6200.00', 'activo', 16),
(19, 'Juguete para perro', 'Juguete de goma trenzada de alto impacto, ideal para perros que les gusta morder todo el tiempo.               \r\n                            ', 100, 15, '2700.00', 'activo', 26),
(20, 'Barco pirata', 'Adorno para pecera construido en resina, no contaminante. Barco pirata para peceras de tamaño mediano. Medidas aproximadas: 30cm x 20 cm x 10 cm.                              \r\n                            ', 20, 15, '1099.00', 'activo', 2),
(21, 'Esfera con base', ' Esfera de acrílico con base para roedores pequeños BUBBLES.\r\nConstruida con acrílico de alto impacto y posee ventilación mejorada.\r\n                            \r\n                            ', 10, 15, '2650.00', 'activo', 12),
(22, 'Alimento para gato PURINA', 'Alimento balanceado para gatos PURINA de PRO PLAN, precio especial con un 20% OFF hasta agotar stock.                               \r\n                            ', 30, 20, '1050.00', 'activo', 13),
(23, 'Alimento enlatado WHISKAS', '      Alimento enlatado WHISKAS.                           \r\n                            ', 10, 20, '1150.00', 'activo', 13),
(24, 'Alimento para perros PEDIGREE', 'Alimento para perros cachorros PEDIGREE.                          \r\n                            ', 20, 10, '4500.00', 'activo', 21),
(25, 'Pipeta para pulgas y garrapatas Bayer', 'Proteja su perro de las pulgas y garrapatas con pipeta Bayer. Protección asegurada por 4 meses. Inolora y no genera picazón.                             \r\n                            ', 50, 0, '1030.00', 'activo', 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_images`
--

CREATE TABLE `product_images` (
  `idproduct_images` int(11) NOT NULL,
  `images` varchar(70) COLLATE utf8_spanish_ci NOT NULL,
  `idproducts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `product_images`
--

INSERT INTO `product_images` (`idproduct_images`, `images`, `idproducts`) VALUES
(1, '1643704841664_img_.jpg', 1),
(2, '1643705154886_img_.jpg', 2),
(3, '1643705431276_img_.jpg', 3),
(16, '1643848898790_img_.jpg', 16),
(17, '1643849670116_img_.jpg', 17),
(18, '1643857805408_img_.png', 18),
(19, '1643858022900_img_.jpg', 19),
(20, '1643859219177_img_.jpg', 20),
(21, '1643859444149_img_.jpg', 21),
(22, '1643859614808_img_.png', 22),
(23, '1643860313734_img_.jpg', 23),
(24, '1643932239303_img_.jpg', 24),
(25, '1643932444580_img_.jpg', 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategory`
--

CREATE TABLE `subcategory` (
  `idsubcategory` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `idcategory` int(11) NOT NULL,
  `idproducts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `subcategory`
--

INSERT INTO `subcategory` (`idsubcategory`, `name`, `idcategory`, `idproducts`) VALUES
(1, 'Aireadores', 3, 1),
(2, 'Adornos', 3, 2),
(3, 'Alimento para peces', 3, 3),
(4, 'Filtros', 3, 4),
(5, 'Peceras', 3, 5),
(6, 'Redes', 3, 6),
(7, 'Accesorios para jaulas', 1, 7),
(8, 'Alimentos para aves', 1, 8),
(9, 'Jaulas', 1, 9),
(10, 'Alimentos para roedores', 5, 10),
(11, 'Hamsteras', 5, 11),
(12, 'Ruedas y esferas', 5, 12),
(13, 'Alimentos para gatos', 2, 13),
(14, 'Collares y accesorios', 2, 14),
(15, 'Juguetes para gatos', 2, 15),
(16, 'Literas y piedritas', 2, 16),
(17, 'Moises', 2, 17),
(18, 'Pipetas para gatos', 2, 18),
(19, 'Rascadores', 2, 19),
(20, 'Transportadoras', 2, 20),
(21, 'Alimentos para perros', 4, 21),
(22, 'Correas y collares', 4, 22),
(23, 'Colchonetas', 4, 23),
(24, 'Cuchas', 4, 24),
(25, 'Indumentaria', 4, 25),
(26, 'Juguetes y accesorios', 4, 26),
(27, 'Pipetas para perros', 4, 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `last_name` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `rol` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `avatar` varchar(60) COLLATE utf8_spanish_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idusers`, `name`, `last_name`, `email`, `password`, `rol`, `avatar`, `created_at`, `updated_at`) VALUES
(1, 'Ulises', 'Armolla', 'uli@gmail.com', '$2a$10$SvA6r2c8qESNDGrERdwvbe0DUihMNA5Bo3pVby', 'ROL_ADMIN', '1643703964059_img_.jpg', '2022-02-01 08:26:04', '2022-02-01 08:26:04'),
(2, 'Pablo', 'Vacotti', 'pablo@gmail.com', '$2a$10$sqhtN2u72F2mvBfBYpyDCOo2Ca1OBppwCmU20S', 'ROL_ADMIN', '1643704113925_img_.jpg', '2022-02-01 08:28:34', '2022-02-01 08:28:34'),
(3, 'Alejandra', 'González', 'ale@gmail.com', '$2a$10$8W4hRKdGKQa.tEvJQHDK.u8XzyKGXwj8.FwgjE', 'ROL_USER', '1643704258661_img_.jpg', '2022-02-01 08:30:59', '2022-02-01 08:30:59'),
(4, 'Pablo', 'Vaccotti', 'pablo.vt@hotmail.com.ar', '$2a$10$raHzUUDojoeO9CT9v3kVCOHFVm/W2JDC1Bm2Bf', 'ROL_USER', '1646331217008_img_.png', '2022-03-03 18:13:37', '2022-03-03 18:13:37'),
(5, 'pablo', 'vacoti', 'pablovaccotti@gmail.com.ar', '$2a$10$QqlhGqBJbgtfPzYC0chCvOP2mLqGbAbqt5/0JG', 'ROL_USER', '1646331447165_img_.png', '2022-03-03 18:17:27', '2022-03-03 18:17:27');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`idcart`),
  ADD KEY `fk_order_items_order_idx` (`idorder`),
  ADD KEY `fk_order_items_products_idx` (`idproducts`);

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idcategory`);

--
-- Indices de la tabla `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`idorder`),
  ADD KEY `fk_order_users_idx` (`idusers`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idproducts`),
  ADD KEY `fk_products_subcategory_idx` (`idsubcategory`);

--
-- Indices de la tabla `product_images`
--
ALTER TABLE `product_images`
  ADD PRIMARY KEY (`idproduct_images`),
  ADD KEY `fk_products_images_idx` (`idproducts`);

--
-- Indices de la tabla `subcategory`
--
ALTER TABLE `subcategory`
  ADD PRIMARY KEY (`idsubcategory`),
  ADD KEY `fk_subcat_category_idx` (`idcategory`),
  ADD KEY `fk_idproducts_idx` (`idproducts`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cart`
--
ALTER TABLE `cart`
  MODIFY `idcart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `idcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `order`
--
ALTER TABLE `order`
  MODIFY `idorder` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idproducts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `product_images`
--
ALTER TABLE `product_images`
  MODIFY `idproduct_images` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `idsubcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `fk_order_items_order` FOREIGN KEY (`idorder`) REFERENCES `order` (`idorder`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_items_products` FOREIGN KEY (`idproducts`) REFERENCES `products` (`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_order_users` FOREIGN KEY (`idusers`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_subcategory` FOREIGN KEY (`idsubcategory`) REFERENCES `subcategory` (`idsubcategory`) ON DELETE NO ACTION ON UPDATE CASCADE;

--
-- Filtros para la tabla `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `fk_products_images` FOREIGN KEY (`idproducts`) REFERENCES `products` (`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `fk_idproducts` FOREIGN KEY (`idproducts`) REFERENCES `products` (`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_subcat_category` FOREIGN KEY (`idcategory`) REFERENCES `category` (`idcategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
