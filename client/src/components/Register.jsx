import axios from "axios";
import React from "react";
import NavBar from "../components/NavBar/NavBar.jsx";

class Register extends React.Component {
  constructor() {
    super();
    this.state = { firstName: "", lastName: "", emailadress: "", password: "" 
  };

    this.handleChange = this.handleChange.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handlesubmit(e) {
    e.preventDefault();
    axios
      .post("/users", this.state)
      .then((res) => console.log(res))

      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        
        <NavBar />
        <form>
          <br />
          <input
            type="text"
            value={this.state.firstName}
            name="firstName"
            placeholder="First Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            value={this.state.lastName}
            name="lastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="email"
            value={this.state.emailadress}
            name="emailadress"
            placeholder="Email address"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            value={this.state.password}
            name="password"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button type="submit" onClick={this.handlesubmit}>
            submit
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
