DROP DATABASE IF EXISTS t05i9vyhmo8m5rd9;
CREATE DATABASE t05i9vyhmo8m5rd9;

USE t05i9vyhmo8m5rd9;

CREATE TABLE bridal_shops (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
email VARCHAR(100) NOT NULL,
website VARCHAR(100) NOT NULL,
createdAt TIMESTAMP NOT NULL,
primary key(id)
);

CREATE TABLE flowers (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
email VARCHAR(100) NOT NULL,
website VARCHAR(100) NOT NULL,
createdAt TIMESTAMP NOT NULL,
primary key(id)
);

CREATE TABLE musics (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
email VARCHAR(100) NOT NULL,
website VARCHAR(100) NOT NULL,
createdAt TIMESTAMP NOT NULL,
primary key(id)
);

CREATE TABLE venues (
id INT auto_increment NOT NULL,
name VARCHAR(100) NOT NULL,
address VARCHAR(100) NOT NULL,
phone VARCHAR(15) NOT NULL,
website VARCHAR(100) NOT NULL,
createdAt TIMESTAMP NOT NULL,
primary key(id)
);





