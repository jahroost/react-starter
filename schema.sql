DROP DATABASE IF EXISTS app;

CREATE DATABASE app;

USE app;

CREATE TABLE shows (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u jahroost < server/schema.sql
 *  to create the database and the tables.*/
