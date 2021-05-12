const Room = require('../src/models/room')
const User = require('../src/models/user')
const Booking = require('../src/models/booking')
const Admin = require ('../src/models/admin')

const db = require('../src/db')

const rooms= require('./room.json')
const users = require('./user.json')
const admins = require('./admin.json')
const bookings = require('./booking.json')

//add Rooms from room.json to table Room 
//add Users from user.json to table User
//add Admin from admin.json to table Admin
//add booking from booking.json to table Booking


Room.insertMany(rooms,(err,docs)=>{
if(err) throw err;
console.log("Rooms added successfully")
})

User.insertMany(users,(err,docs)=>{
  if(err) throw err;
  console.log('Users added successfully')
})

Booking.insertMany(bookings,(err,docs)=>{
  if(err) throw err;
  console.log('Booking added successfully')
})

Admin.insertMany(admins,(err,docs)=>{
  if(err) throw err;
  console.log('Admin added successfully')
})



