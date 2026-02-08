const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    status: { type: String, default: "active" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
