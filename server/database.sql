CREATE DATABASE dungeon_generator;

CREATE TABLE bosses (
  boss_id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  description VARCHAR(512),
  strength_id INTEGER,
  monster_id INTEGER,
  treasure_id INTEGER
);

CREATE TABLE monsters (
  monster_id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  description VARCHAR(512),
  strength_id INTEGER,
  treasure_id INTEGER
);

CREATE TABLE puzzles (
  puzzle_id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  description VARCHAR(1024),
  solution VARCHAR(512),
  treasure_id INTEGER,
  trap_id INTEGER
);

CREATE TABLE strengths (
  strength_id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  weakness_id INTEGER
);

CREATE TABLE traps (
  trap_id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  description VARCHAR(512),
  treasure_id INTEGER
);

CREATE TABLE treasures (
  treasure_id SERIAL PRIMARY KEY,
  name VARCHAR(128),
  description VARCHAR(512),
  value INTEGER,
  is_magic BOOLEAN
);

CREATE TABLE weaknesses (
  weakness_id SERIAL PRIMARY KEY,
  name VARCHAR(128)
);

\copy bosses(name, description, strength_id, monster_id, treasure_id) from 'bosses.csv' DELIMITER ',' CSV HEADER
\copy monsters(name, description, strength_id, treasure_id) from 'monsters.csv' DELIMITER ',' CSV HEADER
\copy puzzles(name, description, solution, treasure_id, trap_id) from 'puzzles.csv' DELIMITER ',' CSV HEADER
\copy strengths(name, weakness_id) from 'strengths.csv' DELIMITER ',' CSV HEADER
\copy traps(name, description, treasure_id) from 'traps.csv' DELIMITER ',' CSV HEADER
\copy treasures(name, description, value, is_magic) from 'treasures.csv' DELIMITER ',' CSV HEADER
\copy weaknesses(name) from 'weaknesses.csv' DELIMITER ',' CSV HEADER