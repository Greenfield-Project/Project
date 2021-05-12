// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/hotel-reservation", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("We are connected to MongoDB");
// });

// module.exports = db

const mongoose = require("mongoose");

const db = mongoose.connect(
  "mongodb://localhost:27017/hotel-reservation",
  { useNewUrlParser: true },
  () => {
    console.log("Connected Successfuly to the Database");
  }
);

module.exports = db;
