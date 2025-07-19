CREATE VIEW high_salary_users AS
SELECT id, name, salary
FROM users
WHERE salary > 70000;

SELECT * FROM high_salary_users;

UPDATE users
SET salary = 72000
WHERE name = 'Raj';

SELECT * FROM high_salary_users;

DROP VIEW high_salary_users; 

SHOW INDEXES FROM users;

CREATE INDEX idx_email ON users(email);

SELECT * FROM users WHERE email = 'example@example.com';

CREATE INDEX idx_gender_salary ON users(gender, salary);

SELECT * FROM users
WHERE gender = 'Female' AND salary > 70000;

DROP INDEX idx_email ON users;

SELECT id, name, salary
FROM users
WHERE salary > (
    SELECT AVG(salary) FROM users
);

SELECT id, name, referred_by_id
FROM users
WHERE referred_by_id IN (
    SELECT id FROM users WHERE salary > 75000
);

SELECT gender, AVG(salary) AS average_salary
FROM users
GROUP BY gender;

SELECT gender, AVG(salary) AS avg_salary
FROM users
GROUP BY gender
HAVING AVG(salary) > 75000;

SELECT gender, COUNT(*) AS total_users
FROM users
GROUP BY gender WITH ROLLUP;

DELIMITER $$

CREATE PROCEDURE AddUser(
    IN p_name VARCHAR(100),
    IN p_email VARCHAR(100),
    IN p_gender ENUM('Male', 'Female', 'Other'),
    IN p_dob DATE,
    IN p_salary INT
)
BEGIN
    INSERT INTO users (name, email, gender, date_of_birth, salary)
    VALUES (p_name, p_email, p_gender, p_dob, p_salary);
END$$

DELIMITER ;

CALL AddUser('Kiran Sharma', 'kiran@example.com', 'Female', '1994-06-15', 72000);

SHOW PROCEDURE STATUS WHERE Db = 'startersql';

DROP PROCEDURE IF EXISTS AddUser;

CREATE TABLE user_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    name VARCHAR(100),
    created_on TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$

CREATE TRIGGER after_user_insert
AFTER INSERT ON users
FOR EACH ROW
BEGIN
    INSERT INTO user_log (user_id, name)
    VALUES (NEW.id, NEW.name);
END$$

DELIMITER ;

CALL AddUser('Ritika Jain', 'ritika@example.com', 'Female', '1996-03-12', 74000);

SELECT * FROM user_log;

DROP TRIGGER IF EXISTS after_user_insert;

SELECT * FROM users
ORDER BY id
LIMIT 5 OFFSET 10;

SELECT DISTINCT gender FROM users;

TRUNCATE TABLE users;



