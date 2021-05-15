import React from "react";
import { DropItems } from "./DropItems.jsx";
import DateRange from "./DateRange.jsx";
import axios from "axios";

class BookingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBeds: 1,
      numberOfGuests: 1,
      typeOfRoom: "Single",
      checkInDate: "",
      checkOutDate: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
  }

  // with the handleChange we used ...setState to update all the composant of the state
  handleChange(event) {
    if (event.target.name === "numberOfBeds") {
      this.setState({
        ...this.state,
        numberOfBeds: event.target.value,
      });
    } else if (event.target.name === "numberOfGuests") {
      this.setState({
        ...this.state,
        numberOfGuests: event.target.value,
      });
    } else if (event.target.name === "typeOfRoom") {
      this.setState({
        ...this.state,
        typeOfRoom: event.target.value,
      });
    }
  }
  //  submit all the value of the state to compare them with the database after that
  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("/rooms", {
        roomType: this.state.typeOfRoom,
        beds: this.state.numberOfBeds,
        // cost_per_night: 300,
        max_occupancy: this.state.numberOfGuests,
        from: this.state.checkInDate,
        to: this.state.checkOutDate,
      })
      .then((res) => console.log("warrini aman", res));
  }

  // alert(
  //   "your reservation is done : number of beds is " +
  //     this.state.numberOfBeds +
  //     ", guests is " +
  //     this.state.numberOfGuests +
  //     ", type of room is " +
  //     this.state.typeOfRoom +
  //     ", date in is" +
  //     this.state.checkInDate +
  //     ", date out is" +
  //     this.state.checkOutDate
  // );

  // handleDate wil store the value of the the chechIn date
  //when the user select the date we get the date selected from the front and we pass the value to the parent component "bookingForm" using a callback function in the props checkOutDateCallback
  //the parent use this props and get the value in handleDate function and update the state object
  handleDateIn(date) {
    console.log("date in " + date);
    this.setState({
      ...this.state,
      checkInDate: date,
    });
  }
  // handleDate wil store the value of the the chechOut date

  handleDateOut(date) {
    console.log("date out " + date);
    this.setState({
      ...this.state,
      checkOutDate: date,
    });
  }

  render() {
    return (
      <div>
        <DateRange
          checkInDateCallback={this.handleDateIn}
          checkOutDateCallback={this.handleDateOut}
        />
        <form onSubmit={this.handleSubmit}>
          <label>
            Select the number of beds &nbsp;&nbsp;
            <select
              name="numberOfBeds"
              value={this.state.numberOfBeds}
              onChange={this.handleChange}>
              {DropItems.map((item, index) => {
                return (
                  <option index={item.Bed} value={item.Bed}>
                    {item.Bed}
                  </option>
                );
              })}
            </select>
          </label>
          <br /> <br /> <br />
          <label>
            Select the number of Guests &nbsp;&nbsp;
            <select
              name="numberOfGuests"
              value={this.state.numberOfGuests}
              onChange={this.handleChange}>
              {DropItems.map((item, index) => {
                return (
                  <option index={item.Guests} value={item.Guests}>
                    {item.Guests}
                  </option>
                );
              })}
            </select>
          </label>
          <br /> <br /> <br />
          <label>
            Select the Type of Room &nbsp;&nbsp;
            <select
              name="typeOfRoom"
              value={this.state.typeOfRoom}
              onChange={this.handleChange}>
              {DropItems.map((item, index) => {
                return (
                  <option index={item.Room_type} value={item.Room_type}>
                    {item.Room_type}
                  </option>
                );
              })}
            </select>
          </label>
          <br /> <br /> <br />
          <div>
            <input type="submit" value="submit" />
          </div>
        </form>
      </div>
    );
  }
}
export default BookingsForm;
