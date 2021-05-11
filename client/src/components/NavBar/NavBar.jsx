import React, { Component } from "react";
import { MenuItems } from "./MenuItems.jsx";
import {Button} from"./Button.jsx"

class NavBar extends React.Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          React<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon">{console.log(MenuItems)}</div>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Sign up</Button> &nbsp;&nbsp;&nbsp; 
        <Button>Login</Button>
      </nav>
    );
  }
}

export default NavBar;
