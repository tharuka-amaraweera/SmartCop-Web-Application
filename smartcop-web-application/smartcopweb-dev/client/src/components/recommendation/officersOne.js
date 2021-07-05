import React, { useEffect, useState, Component } from "react";
import Header from "../Header";
import axios from "axios";
import Cover from "../cover";
import "./recommendation.css";
import Nav from "../recommendation/recommendationHeader";

//import { render } from "@testing-library/react";

class Off extends Component {
  constructor() {
    super();
    this.state = {
      offOne: [],
      drunkOne: [],
      officerOne: [],
      officerTwo: [],
      officerThree: [],
      officerFour: [],
      officerFive: [],
      officerSix: [],
    };
  }

  getTimeZoneOne() {
    const one = [];
    const two = [];
    const three = [];
    const four = [];
    const five = [];
    const six = [];

    axios.get("/get_officers_one").then((response) => {
      this.setState({
        offOne: response.data[0].officer_id,
      });
      //for officer one
      if (response.data[0].drunk[0] == 1) {
        one.push("Drunk Drivers");
      }
      if (response.data[0].careless_driving[0] == 1) {
        one.push("Careless Driving");
      }
      if (response.data[0].overtake[0] == 1) {
        one.push("Overtake");
      }
      if (response.data[0].rule_violating[0] == 1) {
        one.push("Rule Violating");
      }
      if (response.data[0].speed[0] == 1) {
        one.push("Speed");
      }
      if (response.data[0].turning[0] == 1) {
        one.push("Turning");
      }
      if (response.data[0].other[0] == 1) {
        one.push("Other Reasons");
      }

      //for officer two
      if (response.data[0].drunk[1] == 1) {
        one.push("Drunk Drivers");
      }
      if (response.data[0].careless_driving[1] == 1) {
        two.push("Careless Driving");
      }
      if (response.data[0].overtake[1] == 1) {
        two.push("Overtake");
      }
      if (response.data[0].rule_violating[1] == 1) {
        two.push("Rule Violating");
      }
      if (response.data[0].speed[1] == 1) {
        two.push("Speed");
      }
      if (response.data[0].turning[1] == 1) {
        two.push("Turning");
      }
      if (response.data[0].other[1] == 1) {
        two.push("Other Reasons");
      }

      //for officer 3
      if (response.data[0].drunk[2] == 1) {
        three.push("Drunk Drivers");
      }
      if (response.data[0].careless_driving[2] == 1) {
        three.push("Careless Driving");
      }
      if (response.data[0].overtake[2] == 1) {
        three.push("Overtake");
      }
      if (response.data[0].rule_violating[2] == 1) {
        three.push("Rule Violating");
      }
      if (response.data[0].speed[2] == 1) {
        three.push("Speed");
      }
      if (response.data[0].turning[2] == 1) {
        three.push("Turning");
      }
      if (response.data[0].other[2] == 1) {
        three.push("Other Reasons");
      }
      //for officer 4
      if (response.data[0].drunk[3] == 1) {
        four.push("Drunk Drivers");
      }
      if (response.data[0].careless_driving[3] == 1) {
        four.push("Careless Driving");
      }
      if (response.data[0].overtake[3] == 1) {
        four.push("Overtake");
      }
      if (response.data[0].rule_violating[3] == 1) {
        four.push("Rule Violating");
      }
      if (response.data[0].speed[3] == 1) {
        four.push("Speed");
      }
      if (response.data[0].turning[3] == 1) {
        four.push("Turning");
      }
      if (response.data[0].other[3] == 1) {
        four.push("Other Reasons");
      }
      //for officer 5
      if (response.data[0].drunk[4] == 1) {
        five.push("Drunk Drivers");
      }
      if (response.data[0].careless_driving[4] == 1) {
        five.push("Careless Driving");
      }
      if (response.data[0].overtake[4] == 1) {
        five.push("Overtake");
      }
      if (response.data[0].rule_violating[4] == 1) {
        five.push("Rule Violating");
      }
      if (response.data[0].speed[4] == 1) {
        five.push("Speed");
      }
      if (response.data[0].turning[4] == 1) {
        five.push("Turning");
      }
      if (response.data[0].other[4] == 1) {
        five.push("Other Reasons");
      }
      //for officer 6
      if (response.data[0].drunk[5] == 1) {
        six.push("Drunk Drivers");
      }
      if (response.data[0].careless_driving[5] == 1) {
        six.push("Careless Driving");
      }
      if (response.data[0].overtake[5] == 1) {
        six.push("Overtake");
      }
      if (response.data[0].rule_violating[5] == 1) {
        six.push("Rule Violating");
      }
      if (response.data[0].speed[5] == 1) {
        six.push("Speed");
      }
      if (response.data[0].turning[5] == 1) {
        six.push("Turning");
      }
      if (response.data[0].other[5] == 1) {
        six.push("Other Reasons");
      }

      this.setState({
        officerOne: one,
        officerTwo: two,
        officerThree: three,
        officerFour: four,
        officerFive: five,
        officerSix: six,
      });
      console.log(response.data[0].officer_id);
      console.log(response.data[0]);
      console.log(one);
    });
  }

  getoff1() {}

  render() {
    let offOne = this.state.offOne;
    let drunkOne = this.state.drunkOne;
    let officerOne = this.state.officerOne;
    let officertwo = this.state.officerTwo;
    let officerThree = this.state.officerThree;
    let officerFour = this.state.officerFour;
    let officerFive = this.state.officerFive;
    let officerSix = this.state.officerSix;
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
          <div className="col-lg-12">
            <br />
            <br />
            <br />
            <Nav />
          </div>
        </div>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <h1 className="offhead">
              <u>Reccommended officers for Time Zone One</u>
            </h1>
          </div>
        </div>

        <div className="row">
          <br />
          <br />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <button
              onClick={this.getTimeZoneOne.bind(this)}
              class="btn btn-success"
            >
              Load Officer details
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            {/* officer one */}
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">
                <img
                  className="cardlog"
                  src={require("../../images/cops.png")}
                  width="100%"
                  height="150px"
                  alt="cam"
                />
                <h1 className="offname" style={{ color: "maroon" }}>
                  {offOne[0]}
                </h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">Experience Having on</h5>
                <p style={{ color: "#000080" }}>{officerOne[0]}</p>
                <p style={{ color: "#000080" }}>{officerOne[1]}</p>
                <p style={{ color: "#000080" }}>{officerOne[2]}</p>
                <p style={{ color: "#000080" }}>{officerOne[3]}</p>
                <p style={{ color: "#000080" }}>{officerOne[4]}</p>
                <p style={{ color: "#000080" }}>{officerOne[5]}</p>
                <p style={{ color: "#000080" }}>{officerOne[6]}</p>
              </div>
            </div>
          </div>
          {/* officer two */}
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">
                <img
                  className="cardlog"
                  src={require("../../images/cops.png")}
                  width="100%"
                  height="150px"
                  alt="cam"
                />
                <h1 className="offname" style={{ color: "maroon" }}>
                  {offOne[1]}
                </h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">Experience Having on</h5>
                <p style={{ color: "#000080" }}>{officertwo[0]}</p>
                <p style={{ color: "#000080" }}>{officertwo[1]}</p>
                <p style={{ color: "#000080" }}>{officertwo[2]}</p>
                <p style={{ color: "#000080" }}>{officertwo[3]}</p>
                <p style={{ color: "#000080" }}>{officertwo[4]}</p>
                <p style={{ color: "#000080" }}>{officertwo[5]}</p>
                <p style={{ color: "#000080" }}>{officertwo[6]}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-1"></div>
          {/* officer three */}
          <div className="col-lg-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">
                <img
                  className="cardlog"
                  src={require("../../images/cops.png")}
                  width="100%"
                  height="150px"
                  alt="cam"
                />
                <h1 className="offname" style={{ color: "maroon" }}>
                  {offOne[2]}
                </h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">Experience Having on</h5>
                <p style={{ color: "#000080" }}>{officerThree[0]}</p>
                <p style={{ color: "#000080" }}>{officerThree[1]}</p>
                <p style={{ color: "#000080" }}>{officerThree[2]}</p>
                <p style={{ color: "#000080" }}>{officerThree[3]}</p>
                <p style={{ color: "#000080" }}>{officerThree[4]}</p>
                <p style={{ color: "#000080" }}>{officerThree[5]}</p>
                <p style={{ color: "#000080" }}>{officerThree[6]}</p>
              </div>
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="row">
          <br />
          <br />
        </div>
        <div className="row">
          {/* officer four */}
          <div className="col-lg-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">
                <img
                  className="cardlog"
                  src={require("../../images/cops.png")}
                  width="100%"
                  height="150px"
                  alt="cam"
                />
                <h1 className="offname" style={{ color: "maroon" }}>
                  {offOne[3]}
                </h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">Experience Having on</h5>
                <p style={{ color: "#000080" }}>{officerFour[0]}</p>
                <p style={{ color: "#000080" }}>{officerFour[1]}</p>
                <p style={{ color: "#000080" }}>{officerFour[2]}</p>
                <p style={{ color: "#000080" }}>{officerFour[3]}</p>
                <p style={{ color: "#000080" }}>{officerFour[4]}</p>
                <p style={{ color: "#000080" }}>{officerFour[5]}</p>
                <p style={{ color: "#000080" }}>{officerFour[6]}</p>
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
          {/* officer five */}
          <div className="col-lg-3">
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">
                <img
                  className="cardlog"
                  src={require("../../images/cops.png")}
                  width="100%"
                  height="150px"
                  alt="cam"
                />
                <h1 className="offname" style={{ color: "maroon" }}>
                  {offOne[4]}
                </h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">Experience Having on</h5>
                <p style={{ color: "#000080" }}>{officerFive[0]}</p>
                <p style={{ color: "#000080" }}>{officerFive[1]}</p>
                <p style={{ color: "#000080" }}>{officerFive[2]}</p>
                <p style={{ color: "#000080" }}>{officerFive[3]}</p>
                <p style={{ color: "#000080" }}>{officerFive[4]}</p>
                <p style={{ color: "#000080" }}>{officerFive[5]}</p>
                <p style={{ color: "#000080" }}>{officerFive[6]}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            {/* officer six */}
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">
                <img
                  className="cardlog"
                  src={require("../../images/cops.png")}
                  width="100%"
                  height="150px"
                  alt="cam"
                />
                <h1 className="offname" style={{ color: "maroon" }}>
                  {offOne[5]}
                </h1>
              </div>
              <div class="card-body">
                <h5 class="card-title">Experience Having on</h5>
                <p style={{ color: "#000080" }}>{officerSix[0]}</p>
                <p style={{ color: "#000080" }}>{officerSix[1]}</p>
                <p style={{ color: "#000080" }}>{officerSix[2]}</p>
                <p style={{ color: "#000080" }}>{officerSix[3]}</p>
                <p style={{ color: "#000080" }}>{officerSix[4]}</p>
                <p style={{ color: "#000080" }}>{officerSix[5]}</p>
                <p style={{ color: "#000080" }}>{officerSix[6]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Off;
