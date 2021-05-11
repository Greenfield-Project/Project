const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    adresse:{type:String,required:true},
    dateOfBirth: {type: Date, required: true,},
    gender: {type: String, enum: ["male", "female"],
    status : {type : Boolean}
  },
  
    
  });
  const User = mongoose.model("User", userSchema);


module.exports = User
