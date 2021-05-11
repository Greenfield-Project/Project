const Room = require('./src/models/room')
const db =require('./src/db')

const data=require('./room.json')

//add data from room.json to mongoDB

Room.insertMany(data,(err,docs)=>{
if(err) throw err;
console.log("Rooms added successfully")
})


