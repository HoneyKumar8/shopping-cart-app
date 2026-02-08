const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const auth = require("../middleware/auth");

const router = express.Router();

// Signup
router.post("/", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  try {
    const user = await User.create({
      username: req.body.username,
      password: hashedPassword
    });
    res.send(user);
  } catch {
    res.status(400).send("User already exists");
  }
});

// List users
router.get("/", async (req, res) => {
  res.send(await User.find());
});

// Login
router.post("/login", async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  if (!user) return res.status(400).send("Invalid credentials");

  if (user.token) {
    return res.status(403).send("User already logged in on another device");
  }

  const valid = await bcrypt.compare(req.body.password, user.password);
  if (!valid) return res.status(400).send("Invalid credentials");

  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  user.token = token;
  await user.save();

  res.send({ token });
});

// Logout
router.post("/logout", auth, async (req, res) => {
  req.user.token = null;
  await req.user.save();
  res.send("Logged out");
});

module.exports = router;
