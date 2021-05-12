import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import { Button } from "../components/NavBar/Button.jsx";
// import MyImg from "../assets/images/img7.jpg";


class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  
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
            onClick={this.getUserById}>
            BOOK NOW{" "}
          </Button>
          
        </div>
      </div>
    );
  }
}
export default HomePage;
