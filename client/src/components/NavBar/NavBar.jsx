import React, { Component } from "react";
import { MenuItems } from "./MenuItems.jsx";
import { Button } from "./Button.jsx";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          JANUS HOTEL *****<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon">
        </div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <Button>Register</Button> &nbsp;&nbsp;&nbsp;
        <Button>Login</Button> */}
      </nav>
    );
  }
}

export default NavBar;
