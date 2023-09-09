-- UUID RUNING
CREATE extension IF NOT EXISTS "uuid-ossp";

-- CREATE TABLE gallery
CREATE TABLE subscribe(
    id uuid default uuid_generate_v4() primary key,
    email VARCHAR(128) NOT NULL
);