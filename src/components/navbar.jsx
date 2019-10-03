import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-primary">
      <div className="d-flex container col-md-8">
        <div className="navbar-brand">
          <NavLink className="nav-link text-light" to="/" exact>
            <h5>Github jobs</h5>
          </NavLink>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item"></li>
        </ul>
      </div>
    </nav>
  );
};
