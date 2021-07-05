import React, { Component } from "react";
import { render } from "@testing-library/react";

import { Link } from "react-router-dom";
import "../schedule/schedule.css";

const ScjeduleHeader = (props) => {
  return (
    <nav className=" navbar-dark nav-bg" id="bgc">
      <div className="row">
        <div className="col-lg-6">
          <ul className="navbar-nav mr-auto">
            <li class="nav-item active bdr">
              <Link className="nav-link" to={"/OffOne"}>
                <font className="lnk">View Recommendation Details</font>{" "}
                <span class="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul className="navbar-nav mr-auto">
            <li class="dropdown bdr">
              <Link className="nav-link" to={"/scheduleOne"}>
                <font className="lnk">View Schedule details</font>{" "}
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
