-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-02-2022 a las 07:42:42
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
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
-- Estructura de tabla para la tabla `category`
--

CREATE TABLE `category` (
  `idcategory` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `condicion` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

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
  `state` varchar(45) NOT NULL,
  `creadted_at` datetime NOT NULL,
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `order_items`
--

CREATE TABLE `order_items` (
  `idorder_items` int(11) NOT NULL,
  `idorder` int(11) NOT NULL,
  `idproducts` int(11) NOT NULL,
  `quantity` bigint(12) NOT NULL,
  `created_at` datetime NOT NULL,
  `update_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idproducts` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `description` varchar(256) NOT NULL,
  `stock` int(11) NOT NULL,
  `discount` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `idsubcategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idproducts`, `nombre`, `description`, `stock`, `discount`, `price`, `estado`, `idsubcategory`) VALUES
(1, 'Rascador para gato', 'Ideal para entretener, liberar el estrés de su gato y cuidar sus muebles.\r\nRascador para gatos GATOMÓN. Base construida en madera y superficie de cartón corrugado doble para mayor durabilidad. Medidas: 60 cm x 30 cm.', 15, 10, 2500, 'activo', 19),
(2, 'Pipeta para pulgas y garrapatas Bravecto', 'Marca lider del Mercado!! Bravecto la pipeta que protege a su mascota por 6 meses garantizados. Pipeta dosificadora para pulgas y garrapatas, se aplica sobre la nuca de perro y no produce malestar ni molestias.', 100, 5, 2000, 'activo', 27),
(3, 'Pecera esférica', 'Pescera esférica marca BUBBLES!! Diseño asombroso del mejor cristal templado del mercado. Sencilla y ocupa poco espacio.', 15, 10, 2800, 'activo', 5),
(16, 'Jaula de alambre acerado para pájaros', 'Jaula para pájaros pequeños construieda con alambre acerado, no se oxida!,\r\nideal para departametos. Jaulas \"EL MIRLO\".', 30, 10, 3200, 'activo', 9),
(17, 'Esfera para hamster Burbuja', ' Esfera plástica con doble tapa y ventilación mejorada para pequeños roedores, Marca FATRAT. Horas de entretenimiento para su mascota.                                \r\n                            ', 50, 5, 2800, 'activo', 12),
(18, 'Litera para gato BATHCAT', 'Litera hermética para gato BATHCAT. Totalmente desmontable y fácil de lavar.\r\nPrecio promocional 15% off.                  \r\n                            ', 50, 15, 3200, 'activo', 16),
(19, 'Juguete para perro', 'Juguete de goma trenzada de alto impacto, ideal para perros que les gusta morder todo el tiempo.               \r\n                            ', 100, 15, 800, 'activo', 26),
(20, 'Barco pirata', 'Adorno para pecera construido en resina, no contaminante. Barco pirata para peceras de tamaño mediano. Medidas aproximadas: 30cm x 20 cm x 10 cm.                              \r\n                            \r\n                            ', 20, 15, 1600, 'activo', 2),
(21, 'Esfera con base', ' Esfera de acrílico con base para roedores pequeños BUBBLES.\r\nConstruida con acrílico de alto impacto y posee ventilación mejorada.\r\n                            \r\n                            ', 10, 15, 2700, 'activo', 12),
(22, 'Alimento para gato PURINA', 'Alimento balanceado para gatos PURINA de PRO PLAN, precio especial con un 20% OFF hasta agotar stock.  SUPER OFERTA!!!', 15, 20, 6500, 'activo', 13),
(26, 'Aireador para peceras ReVolt', 'Aireador sumergible para peceras ReVolt!! Con garantía de 3 años.', 30, 0, 1800, 'activo', 1),
(27, 'Moisés cama para gato', 'Moisés para gato ideal para gatos pequeños. Oferta hasta agotar stock.', 25, 10, 1200, 'activo', 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product_images`
--

CREATE TABLE `product_images` (
  `idproduct_images` int(11) NOT NULL,
  `images` varchar(100) NOT NULL,
  `idproducts` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `product_images`
--

INSERT INTO `product_images` (`idproduct_images`, `images`, `idproducts`) VALUES
(1, '1643953854773_img_.jpg', 1),
(2, '1643705154886_img_.jpg', 2),
(3, '1644023795482_img_.jpg', 3),
(16, '1643953936211_img_.jpg', 16),
(17, '1643849670116_img_.jpg', 17),
(18, '1643857805408_img_.png', 18),
(19, '1643858022900_img_.jpg', 19),
(20, '1643951032422_img_.jpg', 20),
(21, '1643859444149_img_.jpg', 21),
(22, '1644012881695_img_.png', 22),
(29, '1643954990450_img_.jpg', 26),
(30, '1643954944466_img_.png', 27);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subcategory`
--

CREATE TABLE `subcategory` (
  `idsubcategory` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `idcategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `subcategory`
--

INSERT INTO `subcategory` (`idsubcategory`, `name`, `idcategory`) VALUES
(1, 'Aireadores', 3),
(2, 'Adornos', 3),
(3, 'Alimento para peces', 3),
(4, 'Filtros', 3),
(5, 'Peceras', 3),
(6, 'Redes', 3),
(7, 'Accesorios para jaulas', 1),
(8, 'Alimentos para aves', 1),
(9, 'Jaulas', 1),
(10, 'Alimentos para roedores', 5),
(11, 'Hamsteras', 5),
(12, 'Ruedas y esferas', 5),
(13, 'Alimentos para gatos', 2),
(14, 'Collares y accesorios', 2),
(15, 'Juguetes para gatos', 2),
(16, 'Literas y piedritas', 2),
(17, 'Moises', 2),
(18, 'Pipetas para gatos', 2),
(19, 'Rascadores', 2),
(20, 'Transportadoras', 2),
(21, 'Alimentos para perros', 4),
(22, 'Correas y collares', 4),
(23, 'Colchonetas', 4),
(24, 'Cuchas', 4),
(25, 'Indumentaria', 4),
(26, 'Juguetes y accesorios', 4),
(27, 'Pipetas para perros', 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idusers` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `rol` varchar(45) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idusers`, `name`, `last_name`, `email`, `password`, `rol`, `avatar`, `created_at`, `updated_at`) VALUES
(1, 'Ulises', 'Armolla', 'uli@gmail.com', '$2a$10$SvA6r2c8qESNDGrERdwvbe0DUihMNA5Bo3pVbyuKmRRmNWZJRP0rO', 'ROL_ADMIN', '1643703964059_img_.jpg', '2022-02-01 08:26:04', '2022-02-01 08:26:04'),
(2, 'Pablo', 'Vacotti', 'pablo@gmail.com', '$2a$10$sqhtN2u72F2mvBfBYpyDCOo2Ca1OBppwCmU20S6POFpEgXqCWApxG', 'ROL_ADMIN', '1643704113925_img_.jpg', '2022-02-01 08:28:34', '2022-02-01 08:28:34'),
(3, 'Alejandra', 'González', 'ale@gmail.com', '$2a$10$8W4hRKdGKQa.tEvJQHDK.u8XzyKGXwj8.FwgjEFy6sbzVdB45Tlu6', 'ROL_USER', '1643704258661_img_.jpg', '2022-02-01 08:30:59', '2022-02-01 08:30:59');

--
-- Índices para tablas volcadas
--

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
-- Indices de la tabla `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`idorder_items`),
  ADD KEY `fk_order_items_order_idx` (`idorder`),
  ADD KEY `fk_order_items_products_idx` (`idproducts`);

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
  ADD KEY `fk_subcat_category_idx` (`idcategory`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idusers`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `idcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `order`
--
ALTER TABLE `order`
  MODIFY `idorder` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `order_items`
--
ALTER TABLE `order_items`
  MODIFY `idorder_items` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idproducts` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `product_images`
--
ALTER TABLE `product_images`
  MODIFY `idproduct_images` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `subcategory`
--
ALTER TABLE `subcategory`
  MODIFY `idsubcategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idusers` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `fk_order_users` FOREIGN KEY (`idusers`) REFERENCES `users` (`idusers`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `fk_order_items_order` FOREIGN KEY (`idorder`) REFERENCES `order` (`idorder`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_order_items_products` FOREIGN KEY (`idproducts`) REFERENCES `products` (`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `fk_products_subcategory` FOREIGN KEY (`idsubcategory`) REFERENCES `subcategory` (`idsubcategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `product_images`
--
ALTER TABLE `product_images`
  ADD CONSTRAINT `fk_products_images` FOREIGN KEY (`idproducts`) REFERENCES `products` (`idproducts`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `subcategory`
--
ALTER TABLE `subcategory`
  ADD CONSTRAINT `fk_subcat_category` FOREIGN KEY (`idcategory`) REFERENCES `category` (`idcategory`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
