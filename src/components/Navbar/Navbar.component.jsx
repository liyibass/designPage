import React from "react";
import "./Navbar.style.scss";
import Title from "../Title/Title.component";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="main-navbar">
      {/* <div className="main-navbar-icon">
        <i className="  fas fa-chart-pie fa-2x"></i>
      </div> */}

      <a href="/" className="main-navbar-icon">
        <i className="  fas fa-chart-pie fa-2x"></i>
      </a>

      <div className="main-navbar-icon menu-button  ">
        <i className="fas fa-bars fa-2x menu-button-on"></i>
        {/* <i className="fas fa-times  fa-2x  "></i> */}
      </div>

      <div className="main-navbar-list main-navbar-list-hide">
        <Link className="menu-list-item" to="/about">
          <Title engTitle="About" twnTitle="關於我們" />
        </Link>

        <Link className="menu-list-item" to="/works">
          <Title engTitle="Works" twnTitle="作品集" />
        </Link>

        <Link className="menu-list-item" to="/">
          <Title engTitle="Team" twnTitle="團隊介紹" />
        </Link>

        <Link className="menu-list-item" to="/contact">
          <Title engTitle="Contact" twnTitle="一起合作吧" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
