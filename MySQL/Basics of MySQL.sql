-- create database MySQLLearning;
-- use mysqllearning;
-- show databases;
-- drop database mysqllearning;

-- create table users(
-- 	id int auto_increment primary key,
--     email varchar(200) unique,
--     first_name varchar(100),
--     last_name varchar(100),
--     phone_no bigint(10) unique,
--     gender enum('Male', 'Female'),
--     date_of_birth date,
--     created_at timestamp default current_timestamp
-- );

-- select * from users;
-- drop table users;

-- insert into users( email, first_name, last_name, phone_no, gender, date_of_birth) values 
-- ("Khushali", "Gajera", "kgajera@gmail.com", 1234567890, "Female", "2025-07-18"),
-- ( "Jay", "Panchal", "j.panchal@gmail.com", 2345678901, "Male", "2002-02-02"),
-- ( "Abhay", "Gupta", "a.gupta@gmail.com", 3456789012, "Male", "2000-09-15"),
-- ( "Sakshi", "Singh", "s.singh@gmail.com", 0987654321,"Female", "2001-10-24");

-- alter table users add column salary bigint default 20000;
-- update users set salary=salary+25000 where gender="Female";

select count(*) as total_users from users;
select sum(salary) as total_of_users_salary from users;
select avg(salary) as average_of_users_salary from users;
select min(date_of_birth) from users;
select max(date_of_birth) from users;

select * from users;

