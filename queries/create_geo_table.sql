CREATE TABLE table_name (
    id SERIAL PRIMARY KEY,
    name VARCHAR(64),
    location GEOGRAPHY(POINT,4326),
    coords varchar(64),
    description varchar(500),
    created_at date,
    updated_at date,
    added_by varchar(64)
  );