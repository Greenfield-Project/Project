import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import Booking from "./components/Booking.jsx";
import Rooms from "./components/Rooms.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/booking" component={Booking} />
            <Route exact path="/signUp" component={SignUp} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Rooms" component={Rooms} />

          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
