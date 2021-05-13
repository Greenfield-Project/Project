import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";



class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar/>
       <h1>SignUp</h1>
      </div>
    );
  }
}
export default SignUp;
