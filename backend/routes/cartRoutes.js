const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/auth");

const router = express.Router();

// Add item to cart
router.post("/", auth, async (req, res) => {
  let cart = await Cart.findOne({ userId: req.user._id, status: "active" });

  if (!cart) {
    cart = await Cart.create({ userId: req.user._id, items: [] });
  }

  cart.items.push(req.body.itemId);
  await cart.save();

  res.send(cart);
});

// List carts
router.get("/", async (req, res) => {
  res.send(await Cart.find());
});

module.exports = router;
