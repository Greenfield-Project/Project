import React from "react";
import NavBar from "./NavBar/NavBar.jsx";
import Room from "./Room.jsx";
import axios from "axios";

class Rooms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomsData: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    axios
      .get("/rooms")
      .then((rooms) => {
        console.log("axios " + rooms.data);
        this.setState({ roomsData: rooms.data, isLoading: false });
      })
      .catch((err) => console.log("error " + err));
  }

  render() {
    return (
      <div>
        <NavBar />
        <h2>Rooms</h2>
        <div className="cards-container">
          {!this.state.isLoading ? (
            this.state?.roomsData.map((room) => {
              return <Room roomData={room} />;
            })
          ) : (
            <h2>Loading...</h2>
          )}
          {console.log("roomsData", this.state.roomsData)}
        </div>
      </div>
    );
  }
}
export default Rooms;
