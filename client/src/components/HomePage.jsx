import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import { Button } from "../components/NavBar/Button.jsx";
import axios from "axios";
// import MyImg from "../assets/images/img7.jpg";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getRooms = () => {
    console.log("log");

    axios
      .post("/rooms", {
        room_number: 1,
        roomType: "Single",
        beds: 1,
        cost_per_night: 300,
        max_occupancy: 2,
        from: "2017-04-18",
        to: "2017-04-23",
      })
      .then((res) => console.log("warrini aman", res));
  };

  render() {
    return (
      <div>
        <NavBar />
        <div className="img-container">
          {/* <img src={MyImg} /> */}
          <h3>LIVE THE WONDEROUS LIFE</h3>
          <p>What are you waiting for ?</p>
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
            onClick={this.getRooms}>
            BOOK NOW{" "}
          </Button>
        </div>
      </div>
    );
  }
}
export default HomePage;
