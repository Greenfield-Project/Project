const express = require("express");
const app = express();
const path = require("path");
const db = require("../src/db");
const port = 3000;

// Importing routes
const usersRoutes = require("../src/routes/users.routes");
const roomsRoutes = require("../src/routes/rooms.routes");

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Applying routes as middlewares
app.use("/users", usersRoutes);
app.use("/rooms", roomsRoutes);


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname,"client/dist" , "index.html"))
})

app.listen(port, () => {
  console.log(`greenfield available on http://localhost:${port}`);
});
