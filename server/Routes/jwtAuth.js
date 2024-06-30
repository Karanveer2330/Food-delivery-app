
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db");
const validinfo = require("../middleware/validinfo");
const jwtGenerator = require("../utils/jwtGenerator");
const authorization = require("../middleware/authorization");
// const validinfo = require("../middleware/validinfo");

//authorizeentication

router.post("/register",validinfo, async (req, res) => {
  const { user_name, user_email, user_password, user_lname,adr,adr1,city,state,zip } = req.body;

  try {
    const user = await pool.query("SELECT * FROM logins WHERE user_email = $1", [
      user_email
    ]);

    if (user.rows.length > 0) {
      return res.status(401).json("User already exist!");
    }

    const saltRound = 10
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(user_password, salt);

    let newUser = await pool.query(
      "INSERT INTO logins (user_name, user_email, user_password, user_lname,adr,adr1,city,state,zip) VALUES ($1, $2, $3,$4,$5,$6,$7,$8,$9) RETURNING *",
      [user_name, user_email, bcryptPassword, user_lname,adr,adr1,city,state,zip]
    );

    const token = jwtGenerator(newUser.rows[0].user_id);

     res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/login", validinfo, async (req, res) => {
  const { user_email, user_password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM logins WHERE user_email = $1", [
      user_email
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

    const validPassword = await bcrypt.compare(
      user_password,
      user.rows[0].user_password
    );

    if (!validPassword) {
      return res.status(401).json("Invalid Credential");
    }
    const token = jwtGenerator(user.rows[0].user_id);
    return res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/busilogi", validinfo, async (req, res) => {
  const { user_name, user_password } = req.body;

  try {
    const user = await pool.query("SELECT * FROM busilogi WHERE user_name = $1", [
      user_name
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Invalid Credential");
    }

  
    const token = jwtGenerator(user.rows[0].user_id);
    return res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});



router.post("/verify", authorization, (req, res) => {
  try {
    res.json(true);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;