import React from "react";
import HomePage from './components/HomePage.jsx'


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
