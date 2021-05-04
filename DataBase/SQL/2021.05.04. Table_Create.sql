/* Create DataBase */
CREATE DATABASE pmh;

/* DataBase Use */
USE pmh;

/* Create Table */
CREATE TABLE users(
	user_index int AUTO_INCREMENT Primary KEY,
	user_id VARCHAR(15) NOT NULL,
	user_pw VARCHAR(20) NOT NULL,
	user_name VARCHAR(15) NOT NULL,
	user_department VARCHAR(15) NOT NULL,
	user_authority INT(1) NOT NULL
);

CREATE TABLE projects(
	project_index INT AUTO_INCREMENT Primary KEY NOT NULL,
	project_title VARCHAR(15) NOT NULL,
	project_content VARCHAR(100) NOT NULL,
	project_user VARCHAR(15) NOT NULL,
	project_department VARCHAR(10) NOT NULL,
	project_date DATE NOT NULL,
	project_start DATE NOT NULL,
	project_end DATE NOT NULL
);

/* Show Table */
DESC users;
DESC projects;

/* Show Table Data */
SELECT * FROM users;

/* Drop Table */
DROP TABLE users;
DROP TABLE Projects;

/* Root User */
INSERT INTO users (user_index, user_id, user_pw, user_name, user_department, user_authority) VALUES (0, 'root', '1234', '김장은', '스마트팜', '3'); 



