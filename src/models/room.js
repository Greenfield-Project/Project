const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({

    room_number: { type: Number, required: true },
    type: { type: String, required: true,  enum: ["Single", "Double","Triple","Suite"]},
    beds: { type: Number, required: true },
    cost_per_night:{type : Number, required:true},
   available: {type: Boolean , required:true }
    
})
  const Room = mongoose.model("Room", roomSchema);


module.exports = Room
