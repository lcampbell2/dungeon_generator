const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { prependOnceListener } = require("./db");

app.use(cors());
app.use(express.json());

/* Get sizes of tables */
app.get("/monsters.size", async (req, res) => {
  try {
    const monsters = await pool.query(
      "SELECT MAX(monster_id) AS size\
      FROM monsters \
      "
    );
    res.json(monsters.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/puzzles.size", async (req, res) => {
  try {
    const puzzles = await pool.query(
      "SELECT MAX(puzzle_id) AS size\
      FROM puzzles \
      "
    );
    res.json(puzzles.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/traps.size", async (req, res) => {
  try {
    const traps = await pool.query(
      "SELECT MAX(trap_id) AS size\
      FROM traps \
      "
    );
    res.json(traps.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/treasures.size", async (req, res) => {
  try {
    const treasures = await pool.query(
      "SELECT MAX(treasure_id) AS size\
      FROM treasures \
      "
    );
    res.json(treasures.rows);
  } catch (error) {
    console.error(error);
  }
});

app.get("/bosses.size", async (req, res) => {
  try {
    const bosses = await pool.query(
      "SELECT MAX(boss_id) AS size\
      FROM bosses \
      "
    );
    res.json(bosses.rows);
  } catch (error) {
    console.error(error);
  }
});

/* Get ALL room hazards and rewards */

// get all monsters
app.get("/monsters", async (req, res) => {
  try {
    const monsters = await pool.query(
      "SELECT monsters.monster_id AS id, monsters.name, monsters.description, strengths.name AS Strength, weaknesses.name AS Weakness, treasures.name AS Loot \
      FROM monsters \
      INNER JOIN strengths ON monsters.strength_id = strengths.strength_id \
      INNER JOIN weaknesses ON strengths.weakness_id = weaknesses.weakness_id \
      INNER JOIN treasures ON monsters.treasure_id = treasures.treasure_id \
      ORDER BY monsters.name \
      "
    );
    res.json(monsters.rows);
  } catch (error) {
    console.error(error);
  }
});

// get all puzzles
app.get("/puzzles", async (req, res) => {
  try {
    const puzzles = await pool.query(
      "SELECT puzzles.puzzle_id AS id, puzzles.name, puzzles.description, puzzles.solution, treasures.name AS reward, traps.name AS punishment \
    FROM puzzles \
    INNER JOIN treasures ON puzzles.treasure_id = treasures.treasure_id \
    INNER JOIN traps ON puzzles.trap_id = traps.trap_id \
    ORDER BY puzzles.name"
    );
    res.json(puzzles.rows);
  } catch (error) {
    console.error(error);
  }
});

// get all traps
app.get("/traps", async (req, res) => {
  try {
    const traps = await pool.query(
      "SELECT traps.trap_id AS id, traps.name, traps.description, treasures.name AS reward\
    FROM traps\
    INNER JOIN treasures ON traps.treasure_id = treasures.treasure_id\
    ORDER BY traps.name"
    );
    res.json(traps.rows);
  } catch (error) {
    console.error(error);
  }
});

// get all treasures
app.get("/treasures", async (req, res) => {
  try {
    const treasures = await pool.query(
      "SELECT treasure_id AS id, name, description, value, is_magic \
      FROM treasures \
      ORDER BY name"
    );
    res.json(treasures.rows);
  } catch (error) {
    console.error(error);
  }
});

// get all bosses
app.get("/bosses", async (req, res) => {
  try {
    const bosses = await pool.query(
      "SELECT bosses.boss_id AS id, bosses.name, bosses.description, strengths.name AS strength, weaknesses.name AS weakness, monsters.name AS minion, treasures.name AS loot\
    FROM bosses\
    INNER JOIN strengths ON bosses.strength_id = strengths.strength_id\
    INNER JOIN weaknesses ON strengths.weakness_id = weaknesses.weakness_id\
    INNER JOIN monsters ON bosses.monster_id = monsters.monster_id\
    INNER JOIN treasures ON bosses.treasure_id = treasures.treasure_id\
    ORDER BY bosses.name"
    );
    res.json(bosses.rows);
  } catch (error) {
    console.error(error);
  }
});

// get all stats
app.get("/strengths", async (req, res) => {
  try {
    const stats = await pool.query(
      "SELECT strengths.strength_id AS id, strengths.name AS strength, weaknesses.name AS weakness\
    FROM strengths\
    INNER JOIN weaknesses ON strengths.weakness_id = weaknesses.weakness_id\
    ORDER BY strengths.name"
    );
    res.json(stats.rows);
  } catch (error) {
    console.error(error);
  }
});

/* Get specific room hazards and rewards */

// get a monster
app.get("/monsters/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const monster = await pool.query(
      "SELECT monsters.name, monsters.description, strengths.name AS Strength, weaknesses.name AS Weakness, treasures.name AS Loot \
      FROM monsters \
      INNER JOIN strengths ON monsters.strength_id = strengths.strength_id \
      INNER JOIN weaknesses ON strengths.weakness_id = weaknesses.weakness_id \
      INNER JOIN treasures ON monsters.treasure_id = treasures.treasure_id \
      WHERE monster_id = $1\
      ",
      [id]
    );
    res.json(monster.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// get a trap
app.get("/traps/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const trap = await pool.query(
      "SELECT traps.name, traps.description, treasures.name AS reward\
    FROM traps\
    INNER JOIN treasures ON traps.treasure_id = treasures.treasure_id\
     WHERE trap_id = $1\
      ",
      [id]
    );
    res.json(trap.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// get a puzzle
app.get("/puzzles/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const puzzle = await pool.query(
      "SELECT puzzles.name, puzzles.description, puzzles.solution, treasures.name AS reward, traps.name AS punishment \
      FROM puzzles \
      INNER JOIN treasures ON puzzles.treasure_id = treasures.treasure_id \
      INNER JOIN traps ON puzzles.trap_id = traps.trap_id \
      WHERE puzzle_id = $1 \
      ",
      [id]
    );
    res.json(puzzle.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// get a boss
app.get("/bosses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const boss = await pool.query(
      "SELECT bosses.name, bosses.description, strengths.name AS strength, weaknesses.name AS weakness, monsters.name AS minion, treasures.name AS loot\
    FROM bosses\
    INNER JOIN strengths ON bosses.strength_id = strengths.strength_id\
    INNER JOIN weaknesses ON strengths.weakness_id = weaknesses.weakness_id\
    INNER JOIN monsters ON bosses.monster_id = monsters.monster_id\
    INNER JOIN treasures ON bosses.treasure_id = treasures.treasure_id\
    WHERE boss_id = $1 \
    ",
      [id]
    );
    res.json(boss.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

// get a treasure
app.get("/treasures/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const treasure = await pool.query(
      "SELECT name, description, value, is_magic FROM treasures \
      WHERE treasure_id = $1\
      ",
      [id]
    );
    res.json(treasure.rows[0]);
  } catch (error) {
    console.error(error);
  }
});

/* Submit custom hazards and rewards */

// submit monster
app.post("/monsters", async (req, res) => {
  try {
    const { name, description, strength, treasure } = req.body;
    const newMonster = await pool.query(
      "INSERT INTO monsters (name, description, strength_id, treasure_id) \
      VALUES($1, $2, $3, $4) RETURNING *",
      [name, description, strength, treasure]
    );
    res.json(newMonster.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// submit trap
app.post("/traps", async (req, res) => {
  try {
    const { name, description, treasure } = req.body;
    const newTrap = await pool.query(
      "INSERT INTO traps (name, description, treasure_id) \
      VALUES($1, $2, $3) RETURNING *",
      [name, description, treasure]
    );
    res.json(newTrap.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// submit puzzle
app.post("/puzzles", async (req, res) => {
  try {
    const { name, description, solution, treasure, punishment } = req.body;
    const newPuzzle = await pool.query(
      "INSERT INTO puzzles (name, description, solution, treasure_id, trap_id)\
      VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, description, solution, treasure, punishment]
    );
    res.json(newPuzzle.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// submit boss
app.post("/bosses", async (req, res) => {
  try {
    const { name, description, strength, minion, treasure } = req.body;
    const newBoss = await pool.query(
      "INSERT INTO bosses (name, description, strength_id, monster_id, treasure_id)\
      VALUES($1, $2, $3, $4, $5) RETURNING *",
      [name, description, strength, minion, treasure]
    );
    res.json(newBoss.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// submit treasure
app.post("/treasures", async (req, res) => {
  try {
    const { name, description, value, magic } = req.body;
    const newTreasure = await pool.query(
      "INSERT INTO treasures (name, description, value, is_magic) \
      VALUES($1, $2, $3, $4) RETURNING *",
      [name, description, value, magic]
    );
    res.json(newTreasure.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(4111, () => {
  console.log("server has started on port 4111");
});
