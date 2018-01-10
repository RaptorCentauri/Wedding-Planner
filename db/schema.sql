DROP DATABASE IF EXISTS wedding_planner_db;
CREATE DATABASE wedding_planner_db;

USE wedding_planner_db;

CREATE TABLE venue (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
location VARCHAR(100) NOT NULL,
capacity INT(50) NOT NULL,
phone VARCHAR(15) NOT NULL,
cost INT(100) NOT NULL,
primary key(id)
);

CREATE TABLE music (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
email VARCHAR(100) NOT NULL,
cost INT(100) NOT NULL,
primary key(id)
);

CREATE TABLE flowers (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
email VARCHAR(100) NOT NULL,
cost INT(100) NOT NULL,
primary key(id)
);

CREATE TABLE bridal_shop (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
email VARCHAR(100) NOT NULL,
cost INT(100) NOT NULL,
primary key(id)
);