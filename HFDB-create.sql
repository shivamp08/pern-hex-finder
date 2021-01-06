-- sudo service postgresql start
-- sudo -u postgres psql
-- \l lists all databases
-- \c to change databases

CREATE DATABASE clear;

CREATE TABLE users(
  user_id uuid DEFAULT uuid_generate_v4(),
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL UNIQUE,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY(user_id)
);

CREATE TABLE palettes(
  user_id UUID,
  palette VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id),
  FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- DROP TABLE users CASCADE;