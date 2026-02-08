const express = require("express");
const Cart = require("../models/Cart");
const Order = require("../models/Order");
const auth = require("../middleware/auth");

const router = express.Router();

// Checkout
router.post("/", auth, async (req, res) => {
  const cart = await Cart.findOne({
    userId: req.user._id,
    status: "active"
  });

  if (!cart || cart.items.length === 0) {
    return res.status(400).send("Cart empty");
  }

  const order = await Order.create({
    userId: req.user._id,
    cartId: cart._id,
    items: cart.items
  });

  cart.status = "ordered";
  await cart.save();

  res.send(order);
});

// List orders
router.get("/", async (req, res) => {
  res.send(await Order.find());
});

module.exports = router;
