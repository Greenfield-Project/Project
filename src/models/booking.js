const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  room_id: { type: String, required: true },
  user_id: { type: String, required: true },
  reserved: [{ from: String, to: String }],
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
