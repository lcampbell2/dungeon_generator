const Pool = require("pg").Pool;

const pool = new Pool({
  user: "dungeonmaster",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "dungeon_generator",
});

module.exports = pool;
