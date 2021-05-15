import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";
import { DropItems } from "../components/booking/DropItems.jsx";
import BookingsForm from "./booking/BookingsForm.jsx";

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <BookingsForm DropItems={DropItems} />
        <h1>Booking Page </h1>
      </div>
    );
  }
}
export default Booking;
