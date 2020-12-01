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