import React from "react";
import NavBar from "./NavBar/NavBar.jsx";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>Rooms</h1>
      </div>
    );
  }
}
export default Rooms;
