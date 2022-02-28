import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header className="header">
      <div className="header-info-wrapper">
        <Link to="/">
        <div className="logo">
          <img src="./assets/fire-symbol.png" alt="" className="logo-img" />
          <span className="logo-title">devcare</span>
        </div>
        </Link>
      </div>
    </header>
  );
};

export default Nav;
