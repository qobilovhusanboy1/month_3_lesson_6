-- UUID RUNING
CREATE extension IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE gallery
CREATE TABLE gallery(
    id uuid default uuid_generate_v4() primary key,
    url VARCHAR(128) NOT NULL
);