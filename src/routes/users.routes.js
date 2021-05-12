const express = require("express");
const router = express.Router();

const User = require("../models/user");


//create new user 
router.post("/", (req, res) => {
  console.log(req.body);
  let newUser = new User(req.body);
  newUser.save(() => {
    res.send("New User added successfully");
  });
});
// Get all Users

router.get("/", (req, res) => {
  User.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// Get User by ID
router.get("/:id", (req, res) => {
  User.findById(req.params.id)
    .then((user) => res.send(user))
    .catch((err) => {
      console.log(err);
    });
});





module.exports = router;
