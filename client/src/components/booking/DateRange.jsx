import React, { useState } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";

const dateFormat = "YYYY-MM-DD";

class DateRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: null,
      checkOutDate: null,
    };
    this.handleCheckInDate = this.handleCheckInDate.bind(this);
    this.handleCheckOutDate = this.handleCheckOutDate.bind(this);
  }

  handleCheckInDate = (date) => {
    this.setState({
      checkInDate: date,
      checkOutDate: null,
    });
    this.props.checkInDateCallback(moment(date).format(dateFormat));
  };

  handleCheckOutDate = (date) => {
    this.setState({
      ...this.state,
      checkOutDate: date,
    });
    this.props.checkOutDateCallback(moment(date).format(dateFormat));
  };

  render() {
    return (
      <div className="DateRange">
        <div className="input-container">
          <div>
            <label>Check-in</label>
            <DatePicker
              selected={this.state.checkInDate}
              minDate={new Date()}
              onChange={this.handleCheckInDate}
            />
          </div>
          <div>
            <label>Check-out</label>
            <DatePicker
              selected={this.state.checkOutDate}
              minDate={this.state.checkInDate}
              onChange={this.handleCheckOutDate}
            />
          </div>
        </div>
        {this.state.checkInDate && this.state.checkOutDate && (
          <div className="summary">
            <p>
              You book a Room from {moment(this.state.checkInDate).format("LL")}{" "}
              to {moment(this.state.checkOutDate).format("LL")}.
            </p>
          </div>
        )}
      </div>
    );
  }
}

// export default DateRange;
export default DateRange;
