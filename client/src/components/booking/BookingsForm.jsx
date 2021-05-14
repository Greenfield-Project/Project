import React from "react";
import { DropItems } from "./DropItems.jsx";
import DateRange from "./DateRange.jsx";
class BookingsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBeds: 0,
      numberOfGuests: 0,
      typeOfRoom: "",
      checkInDate: "",
      checkOutDate: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateIn = this.handleDateIn.bind(this);
    this.handleDateOut = this.handleDateOut.bind(this);
  }

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

  handleSubmit(event) {
    event.preventDefault();
    alert(
      "your reservation is done : number of beds is " + 
        this.state.numberOfBeds +
        ", guests is " +
        this.state.numberOfGuests +
        ", type of room is " +
        this.state.typeOfRoom +
        ", date in is" +
        this.state.checkInDate +
        ", date out is" +
        this.state.checkOutDate
    );
  }

  handleDateIn(date) {
    console.log("date in " + date);
    this.setState({
      ...this.state,
      checkInDate: date,
    });
  }

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
                  <option index={item.bed} value={item.Bed}>
                    {" "}
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
                    {" "}
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
                    {" "}
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
