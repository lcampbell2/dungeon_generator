# dungeon_generator

on a new Ubuntu 20.04 system

`sudo apt-get update`

`sudo apt-get upgrade`

`sudo apt-get install -y git postgresql-12 nodejs npm`

`git clone https://github.com/lcampbell2/dungeon_generator.git`

Connect to PostgreSQL as the administrator using psql.

create user named `dungeonmaster` with password `password`,
&
create database `dungeon_generator` with owner `dungeonmaster`

`sudo su - postgres ; psql`

`CREATE USER dungeonmaster WITH PASSWORD 'password'`

`CREATE DATABASE dungeon_generator WITH owner = 'dungeonmaster'`

from top directory where SQL file is, import initial db with:

`sudo -u postgres psql dungeon_generator < dungeon_generator.sql`

new terminal:
`cd server; npm install; node index`

new terminal:
`cd client; npm install; npm start`
