const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ["Single", "Double", "Triple", "Suite" ],
  },
  max_occupancy: { type: Number, required: true },
  beds: { type: Number, required: true },
  cost_per_night: { type: Number, required: true },
  reserved: [{ from: String, to: String }],
  image: { type: String, required: true },
  description: { type: String, required: true },
});
const Room = mongoose.model("Room", roomSchema);

module.exports = Room;


