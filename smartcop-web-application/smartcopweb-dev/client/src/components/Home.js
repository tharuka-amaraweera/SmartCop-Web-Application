import React, { Component } from "react";
//import { render } from "@testing-library/react";
import DashboardContent1 from "./dashboardContent1";
import DashboardContent2 from "./dashboardContent2";

class Home extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className="container">
        <div className="row">
        <div className="col-lg-12">
          <DashboardContent1 />
        </div>
        </div>
        <br />
        <br />
        <div className="row">
        <div className="col-lg-12">
          <DashboardContent2 />
        </div>
        </div>
        </div>

      </div>
    );
  }
}

export default Home;
