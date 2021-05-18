import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
    };
  }
  render() {
    return (
      <div>
        <NavBar />
        <form>
          <input
            type="text"
            value={this.state.username}
            placeholder="username"
          />
          <input type="password" placeholder="password" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default Login;
