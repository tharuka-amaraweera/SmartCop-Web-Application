import React, { Component } from "react";
import { render } from "@testing-library/react";

import { Link } from "react-router-dom";
import "../schedule/schedule.css";

const ScjeduleHeader = (props) => {
  return (
    <nav className=" navbar-dark nav-bg" id="bgc">
      <div className="row">
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active bdr">
              <Link className="nav-link" to={"/scheduleOne"}>
                <font className="lnk">Time Zone 01</font>
                <br />
                <br />
                <font className="lnk">(12.00 a.m - 6.00 a.m)</font>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="dropdown bdr">
              <Link className="nav-link" to={"/scheduleTwo"}>
                <font className="lnk">Time Zone 02</font>
                <br />
                <br />
                <font className="lnk">(6.00 a.m - 12.00 p.m)</font>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active bdr">
              <Link className="nav-link" to={"/scheduleThree"}>
                <font className="lnk">Time Zone 03</font>
                <br />
                <br />
                <font className="lnk">(12.00 p.m - 6.00 p.m)</font>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-3">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active bdrcorner">
              <Link className="nav-link" to={"/scheduleFour"}>
                <font className="lnk">Time Zone 04</font>
                <br />
                <br />
                <font className="lnk">(6.00 p.m - 12.00 a.m)</font>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default ScjeduleHeader;
