import React from "react";
import "./Header.css";
import github from "../images/github.png";
import fork from "../images/fork.png";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="container">
      <div className="diver" id="firstdiver">
        <ul>
          <li>
            <NavLink exact="true" to="/" id="yo">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/about" id="yo">
              About
            </NavLink>
          </li>
            <NavLink exact="true" to="/donate" id="yo">
          <li>
              Donate
          </li>
            </NavLink>
        </ul>
      </div>

      <div className="diver2">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>

        <img id="fork" src={fork} alt="fork" />
        <img id="github" src={github} alt="github" />
      </div>
    </div>
  );
}

export default Header;
