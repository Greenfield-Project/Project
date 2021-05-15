import React, { Component } from "react";

export default class Room extends Component {
  constructor(props) {
    super(props);
    // this.getRoomById = this.getRoomById.bind(this);
  
  }
  
  // getRoomById() {
  //   axios
  //     .get("/rooms/" + this.props.roomData.id)
  //     .then((res) => console.log(res));
  // }

  render() {
    return (
      <div className="card">
        <img
          src={this.props.roomData.image}
          alt="Avatar"
          className="card-avatar"
          onClick={this.getRoomById}
        />
        <div className="card-container">
          <h4>
            <b className="card-name">{this.props.roomData.cost_per_night}</b>
            <br />
            <span className="card-owner">{this.props.roomData.type}</span>
          </h4>
          <p>{this.props.roomData.description}</p>
        </div>
      </div>
    );
  }
}
