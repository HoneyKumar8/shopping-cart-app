const express = require("express");
const Item = require("../models/Item");

const router = express.Router();

// Create item
router.post("/", async (req, res) => {
  const item = await Item.create({ name: req.body.name });
  res.send(item);
});

// List items
router.get("/", async (req, res) => {
  res.send(await Item.find());
});

module.exports = router;
