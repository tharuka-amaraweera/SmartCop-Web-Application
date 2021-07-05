import React, { Component } from "react";
import Header from "../Header";
import Nav from "./RecommenderNavigation";
import BarOne from "./TimeZoneOneBarChart";
import BarTwo from "./TimeZoneTwoBarChart";
import BarThree from "./TimeZoneThreeBarChart";
import BarFour from "./TimeZoneFourBarChart";
import "./recommendation.css";
import Cover from "../cover";

//import { render } from "@testing-library/react";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Cover />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="offheadone">
              <u>Officer Dashboard</u>
            </h1>
          </div>
        </div>

        <div className="row">
          <br />
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <BarOne />
          </div>

          <div className="col-lg-6">
            <BarTwo />
          </div>
        </div>
        <div className="row">
          <br />
          <br />
        </div>
        <hr />
        <div className="row">
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <BarThree />
          </div>

          <div className="col-lg-6">
            <BarFour />
          </div>
        </div>

        <div className="row">
          <br />
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h2 className="rechead">
              View Recommendation And Schedule Details
            </h2>
          </div>
        </div>
        <div className="row">
          <br />
          <br />
          <br />
        </div>

        <div className="row">
          <div className="col-lg-12">
            <Nav />
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Home;
