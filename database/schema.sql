CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

CREATE TABLE burger (
	id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOL DEFAULT false,
    PRIMARY KEY (id)
);