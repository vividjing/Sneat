const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(
  {
    id: Number,
    start: String,
    end: String,
    title: String,
    category: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", EventSchema);
