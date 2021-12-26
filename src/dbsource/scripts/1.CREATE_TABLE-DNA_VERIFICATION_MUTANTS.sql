USE `mutants_general` ;

-- -----------------------------------------------------
-- Table `mutants_general`.`DNA_VERIFICATION_MUTANTS`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mutants_general`.`DNA_VERIFICATION_MUTANTS` (
    `ID` INT(11) NOT NULL AUTO_INCREMENT,
    `DNA` VARCHAR(100) NULL DEFAULT NULL,
    `MUTANT` TINYINT(0),
    `CREATED_AT` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;

-----------------INSERT DATA ON Table `mutants_general`.`DNA_VERIFICATION_MUTANTS`-------------------

INSERT INTO `mutants_general`.`DNA_VERIFICATION_MUTANTS` (DNA, MUTANT) VALUES ("['ATGCGA','CAGTGC','TTATGT','AGAAGG','CCCCTA','TCACTG']", true);