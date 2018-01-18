SET NAMES UTF8;
DROP DATABASE IF EXISTS boring;
CREATE DATABASE boring CHARSET=UTF8;
USE boring;
CREATE TABLE borings(
	uid  INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(16),
	uintroduce VARCHAR(64),
	uimg VARCHAR(128)
);
INSERT INTO borings VALUES(
	null,'公园','只有几块的石头','1.jpg'
);
INSERT INTO borings VALUES(
	null,'歌手','一大群人一起合唱','2.jpg'
);
INSERT INTO borings VALUES(
	null,'明星','一部电视剧','3.jpg'
);
INSERT INTO borings VALUES(
	null,'乐队','三个人的乐队','4.jpg'
);
INSERT INTO borings VALUES(
	null,'演员','一口气四根烟的女人','5.jpg'
);