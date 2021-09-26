DROP TABLE IF EXISTS groups;

CREATE TABLE groups (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    birthPlace varchar(255) NOT NULL
);