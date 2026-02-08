const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
    status: { type: String, default: "active" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);
