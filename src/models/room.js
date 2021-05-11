const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({

    room_number: { type: Number, required: true },
    type: { type: String, required: true,  enum: ["Single", "Double","Triple","Suite"]},
    beds: { type: Number, required: true },
    cost_per_night:{type : Number, required:true},
    reserved: [{from: String,  to: String}]
  }),
  
    
 
  const Room = mongoose.model("Room", roomSchema);


module.exports = Room
