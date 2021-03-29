-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ramore
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ramore
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ramore` DEFAULT CHARACTER SET utf8 ;
USE `ramore` ;

-- -----------------------------------------------------
-- Table `ramore`.`employee`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramore`.`employee` (
  `emp_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `emp_name` VARCHAR(100) NOT NULL,
  `emp_date_of_birth` DATE NOT NULL,
  `emp_has_car` TINYINT(1) NOT NULL,
  `emp_address` VARCHAR(200) NOT NULL,
  `emp_latitude` VARCHAR(45) NOT NULL,
  `emp_longitude` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`emp_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ramore`.`attribute`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramore`.`attribute` (
  `attr_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `attr_name` VARCHAR(50) NOT NULL,
  `attr_value` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`attr_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `ramore`.`employee_attribute`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ramore`.`employee_attribute` (
  `employee_emp_id` INT UNSIGNED NOT NULL,
  `attribute_attr_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`employee_emp_id`, `attribute_attr_id`),
  INDEX `fk_employee_attribute_attribute1_idx` (`attribute_attr_id` ASC) VISIBLE,
  CONSTRAINT `fk_employee_attribute_employee`
    FOREIGN KEY (`employee_emp_id`)
    REFERENCES `ramore`.`employee` (`emp_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_employee_attribute_attribute1`
    FOREIGN KEY (`attribute_attr_id`)
    REFERENCES `ramore`.`attribute` (`attr_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
