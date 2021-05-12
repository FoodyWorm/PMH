/* Create DataBase */
CREATE DATABASE pmh;

/* DataBase Use */
USE pmh;

/* Create Table */
CREATE TABLE users(
	user_index int AUTO_INCREMENT Primary KEY NOT NULL,
	user_id VARCHAR(15) NOT NULL,
	user_pw VARCHAR(20) NOT NULL,
	user_name VARCHAR(15) NOT NULL,
	user_department VARCHAR(15) NOT NULL,
	user_authority INT(1) NOT NULL
);

CREATE TABLE projects(
	project_index INT AUTO_INCREMENT Primary KEY NOT NULL,
	project_title VARCHAR(30) NOT NULL,
	project_department VARCHAR(10) NOT NULL,
	project_users VARCHAR(20) NOT NULL,
	project_startDay DATE NOT NULL,
	project_endDay DATE NOT NULL,
	project_purpose VARCHAR(100) NOT NULL
);

/* Show Table */
DESC users;
DESC projects;

/* Show Table Data */
SELECT * FROM users;
SELECT * FROM projects;

/* Drop Table */
DROP TABLE users;
DROP TABLE projects;

/* Root User */
INSERT INTO users (user_index, user_id, user_pw, user_name, user_department, user_authority) VALUES (0, 'rooter', '465132zz', '김장은', '스마트팜', '3');

/* Test Project */
INSERT INTO projects (project_index, project_title, project_department, project_users, project_startDay, project_endDay, project_purpose) VALUES (
	0, 'Project Management HomePage', '스마트팜', '김장은', '2021-05-01', '2021-05-14', '사내 업무 효율을 최대로 증진시키기 위한 홈페이지를 제작합니다.'
); 



