CREATE DATABASE kaysen;
\c kaysen
--create extension 
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--create reviews table

CREATE TABLE reviews(
    review_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    review_contents VARCHAR(255) NOT NULL,
    review_name VARCHAR(255) NOT NULL,
    image_type VARCHAR(255) NOT NULL,
    approved BOOLEAN DEFAULT false
);

--create comments table

CREATE TABLE boards(
    board_id uuid PRIMARY KEY DEFAULT
    uuid_generate_v4(),
    board_type VARCHAR(255) NOT NULL,
    board_name VARCHAR(255) NOT NULL,
    board_desc VARCHAR(255) NOT NULL,
    board_tech VARCHAR(255) NOT NULL
);
