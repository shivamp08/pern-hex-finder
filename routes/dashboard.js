const router = require("express").Router();
const authorize = require("../middleware/authorize");
const pool = require("../db");

router.post("/", authorize, async (req, res) => {
  const { palette } = req.body;
  try {
    const user = await pool.query(
      "UPDATE palettes SET palette = $1 WHERE user_id = $2",
      [palette, req.user.id]
    );
    res.json(true);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

router.get("/", authorize, async (req, res) => {
  try {
    const user = await pool.query(
      "SELECT users.user_id, user_name, user_email, palette FROM users INNER JOIN palettes ON users.user_id = palettes.user_id WHERE users.user_id = $1",
      [req.user.id]
    );

    res.json(user.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
