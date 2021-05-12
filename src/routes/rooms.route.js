const express = require("express");
const router = express.Router();

const Room = require("../models/room");


//create new Room 
router.post("/", (req, res) => {
  console.log(req.body);
  let newRoom = new Room(req.body);
  newRoom.save(() => {
    res.send("New User added successfully");
  });
});
// Get all Room

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





module.exports = router;
