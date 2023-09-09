-- DATABASE CREATE
CREATE DATABASE n9;

-- UUID RUNING
CREATE extension IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE contact
CREATE TABLE contact(
    id uuid default uuid_generate_v4() primary key,
    name VARCHAR(32) NOT NULL,
    phone_number VARCHAR(32) NOT NULL, 
    email VARCHAR(32) NOT NULL,
    message VARCHAR(1024) NOT NULL,
    is_viewed BOOLEAN default true
);