import React, { Component } from "react";
import { render } from "@testing-library/react";

import { Link } from "react-router-dom";
import "../components/recommendation/recommendation.css";
import "../bootstrap.min.css";

const Header = (props) => {
  return (
    <nav className=" navbar-dark nav-bg">
      <div className="row">
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active bdr">
              <Link className="nav-link" to={"/"}>
                <font className="lnk">Home</font>{" "}
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="dropdown bdr">
              <Link className="nav-link" to={"/officers"}>
                <font className="lnk">Officers</font>{" "}
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active bdrcorner">
              <Link className="nav-link" to={"/accidentprediction"}>
                <font className="lnk">Road Accident Prediction</font>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active bdrcorner">
              <Link className="nav-link" to={"/publicAwareness"}>
                <font className="lnk">Public Awareness</font>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
