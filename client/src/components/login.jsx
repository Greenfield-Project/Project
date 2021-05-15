import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <h1>Login </h1>
      </div>
    );
  }
}
export default Login;
