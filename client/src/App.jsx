import React from "react";
import HomePage from './components/HomePage.jsx'
import Contact from './components/Contact.jsx'
import Booking from './components/Booking.jsx'
import About from './components/About.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="flex-container">
        <HomePage/>
      </div>
    );
  }
}
export default App;
