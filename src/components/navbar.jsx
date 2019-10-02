import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-md bg-primary">
      <div className="d-flex container col-md-8">
        <div className="navbar-brand">
          <h4>Github jobs</h4>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/" exact>
              Главная
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              Вакансии
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
