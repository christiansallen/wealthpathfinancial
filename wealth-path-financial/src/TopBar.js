import React from "react";
import logo_gold from "./images/wpf_logo_gold_wide.png";
import logo_green from "./images/wpf_logo_green_wide.png";
import "./styles/top-bar.css";

const TopBar = () => {
  return (
    <div className="top-bar-container">
      <img src={logo_green} alt="logo" className="logo-gold-wide" />
      <div className="top-bar-options">
        <nav className="nav-bar">
          <a href="#" className="nav-link">
            About LPL
          </a>
          <a href="#" className="nav-link">
            Client Login
          </a>
        </nav>
      </div>
    </div>
  );
};

export default TopBar;
