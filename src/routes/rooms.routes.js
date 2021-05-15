const express = require("express");
const router = express.Router();

const Room = require("../models/room");

// create new Room
// router.post("/", (req, res) => {
//   console.log(req.body);
//   let newRoom = new Room(req.body);
//   newRoom.save(() => {
//     res.send("New User added successfully");
//   });
// })



// Get all Rooms
router.get("/", (req, res) => {
  Room.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// Get Room by ID
router.get("/:id", (req, res) => {
  Room.findById(req.params.id)
    .then((room) => res.send(room))
    .catch((err) => {
      console.log(err);
    });
});

// Get Available Rooms
router.post("/", (req, res) => {
  Room.find({
    type: req.body.roomType,
    beds: req.body.beds,
    max_occupancy: { $gte: req.body.max_occupancy },
    //cost_per_night: { $lte: req.body.cost_per_night },
    reserved: {
      //Check if any of the dates the room has been reserved  with the requsted dates
      $not: {
        $elemMatch: {
          from: { $lt: req.body.to.substring(0, 10) },
          to: { $gt: req.body.from.substring(0, 10) },
        },
      },
    },
  })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
