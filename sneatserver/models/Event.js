import mongoose from "mongoose";

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

const Event = mongoose.model("Event", EventSchema);
export default Event;
