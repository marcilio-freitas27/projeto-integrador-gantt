CREATE TABLE `Usuarios` (
	`Codigo` INT NOT NULL AUTO_INCREMENT,
	`NomeUsuario` varchar(50) NOT NULL,
	`Email` varchar(100) NOT NULL,
	`Senha` varchar(10) NOT NULL,
	PRIMARY KEY (`Codigo`)
);

CREATE TABLE `Dispositivos` (
	`IdDispositivo` INT NOT NULL AUTO_INCREMENT,
	`NomeDispositivo` varchar(50) NOT NULL,
	`Voltagem` INT NOT NULL,
	`TempoUtilizacao` INT NOT NULL,
	`IdUsuario` INT NOT NULL,
	PRIMARY KEY (`IdDispositivo`)
);

CREATE TABLE `vwUsuarios` (
	`view` FLOAT NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`view`)
);

CREATE TABLE `spCalculaConsumo` (
	`procedure` INT NOT NULL,
	PRIMARY KEY (`procedure`)
);

ALTER TABLE `Dispositivos` ADD CONSTRAINT `Dispositivos_fk0` FOREIGN KEY (`IdUsuario`) REFERENCES `Usuarios`(`Codigo`);

ALTER TABLE `vwUsuarios` ADD CONSTRAINT `vwUsuarios_fk0` FOREIGN KEY (`view`) REFERENCES `Usuarios`(`Codigo`);

ALTER TABLE `spCalculaConsumo` ADD CONSTRAINT `spCalculaConsumo_fk0` FOREIGN KEY (`procedure`) REFERENCES `Dispositivos`(`IdDispositivo`);

CREATE VIEW vwusuarios 
AS
	SELECT Codigo as Id, NomeUsuario as Nome, Email 
    FROM `usuarios`;

CREATE VIEW vwdispositivos
AS
	SELECT IdDispositivo as Id, NomeDispositivo as Nome, 
    TempoUtilizacao as Utilizacao, Voltagem
	FROM dispositivos;
	
DELIMITER $$
CREATE procedure spcalculaconsumo(IN voltagem INT, IN utilizacao INT)
	BEGIN
    	SELECT Utilizacao ,Voltagem INTO utilizacao, voltagem FROM vwdispositivos;
    END $$
DELIMITER ;




