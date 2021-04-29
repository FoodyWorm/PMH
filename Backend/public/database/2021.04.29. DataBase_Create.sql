/* Create DataBase */
CREATE DATABASE pmh;

/* DataBase Use */
USE pmh;

/* Create Table */
CREATE TABLE users(
	user_index int AUTO_INCREMENT Primary KEY NOT NULL,
	user_id VARCHAR(15) NOT NULL,
	user_pw INT(20) NOT NULL,
	user_name VARCHAR(15) NOT NULL,
	user_department VARCHAR(15) NOT NULL,
	user_authority INT(1) NOT NULL
);

CREATE TABLE Projects(
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
DESC Users;
DESC Projects;


/* Drop Table */
DROP TABLE Users;
DROP TABLE Projects;
