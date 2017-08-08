DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "schools"
CREATE TABLE burgers (
  id int (10) AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured BOOL NOT NULL DEFAULT 0,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  PRIMARY KEY(id)
);

SELECT * FROM burgers;