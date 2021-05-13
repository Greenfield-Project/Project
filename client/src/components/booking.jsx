import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";


class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar/>
       <h1>Booking Page </h1>
      </div>
    );
  }
}
export default Booking;
