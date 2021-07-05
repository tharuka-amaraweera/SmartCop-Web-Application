import React, { Component } from "react";
import Header from "./Header";
import "../styles/accidentprediction.css";
import "../bootstrap.min.css";
import { render } from "@testing-library/react";
import Cover from "./cover";

import { Link } from "react-router-dom";

class AccidentPrediction extends Component {
  render() {
    return (
      <div>
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
        </div>
        <div className="home-style">
          <br/>
          <h1 class="heading home-style">Road Accident Prediction Dashboard</h1>
          <br />
          <br />
          <div class="row justify-content-center home-style">
          {/* <div class="col-md-1"></div> */}
            <div class="col-md-5">
              <div class="jumbotron">
                <div class="card">
                  <img class="card-img-top" src={require('../images/severity.jpg')} width="500px" height="200px" alt="cam" />
                  <div class="card-body">
                    <ul class="nav nav-pills mb-3" id="nav1" >
                      <li class="nav-item ">
                        <a href="http://localhost:3000/severitypage">
                          <div class="card" id="severity_button">
                            <div class="card-header" align="center">
                              <h2 class="heading_white">Severity Prediction</h2>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
               
              </div>
            </div>
            {/* <div class="col-md-2"></div> */}
            <div class="col-md-5">
              <div class="jumbotron">
                <div class="card">
                  <img class="card-img-top" src={require('../images/reason.jpg')} width="500px" height="200px" alt="cam" />
                  <div class="card-body">
                    <ul class="nav nav-pills mb-3" id="nav1" >
                      <li class="nav-item ">
                        <a href="http://localhost:3000/reasonprediction">
                          <div class="card  prediction-card" id="severity_button">
                            <div class="card-header" align="center">
                              <h2 class="heading_white">Reason Prediction</h2>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              
              </div>
            </div>
            {/* <div class="col-md-1"></div> */}
          </div>

          <div class="row justify-content-center home-style">
            <div class="col-md-5">
              <div class="jumbotron">
                <div class="card">
                  <img class="card-img-top" src={require('../images/frequency.jpg')} width="500px" height="200px" alt="cam" />
                  <div class="card-body">
                    <ul class="nav nav-pills mb-3" id="nav1" >
                      <li class="nav-item ">
                        <a href="http://localhost:3000/frequencypage">
                          <div class="card" id="severity_button">
                            <div class="card-header" align="center">
                              <h2 class="heading_white">Accident Frequency</h2>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div class="card" id="time">
                <div class="card-header" align="center">
                  <h2 class="heading">Accident Frequency</h2>
                </div>
                <br />
                <ul class="nav nav-pills mb-3" id="nav1">
                  <li class="nav-item ">
                    <a href="http://localhost:3000/frequencypage">
                      <div class="card" id="time_button">
                        <div class="card-header" align="center">
                          View Details
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div> */}
              </div>
            </div>
            {/* <div class="col-md-2"></div> */}
            <div class="col-md-5">
              <div class="jumbotron">
                <div class="card">
                  <img class="card-img-top" src={require('../images/area.png')} width="500px" height="200px" alt="cam" />
                  <div class="card-body">
                    <ul class="nav nav-pills mb-3" id="nav1" >
                      <li class="nav-item ">
                        <a href="http://localhost:3000/vicinitypage">
                          <div class="card" id="severity_button">
                            <div class="card-header" align="center">
                              <h2 class="heading_white">Accident Hotspots</h2>
                            </div>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <div class="card" id="area">
                <div class="card-header" align="center">
                  <h2 class="heading">Accident Hotspots</h2>
                </div>
                <br />
                <ul class="nav nav-pills mb-3" id="nav1">
                  <li class="nav-item ">
                    <a href="http://localhost:3000/vicinitypage">
                      <div class="card" id="area_button">
                        <div class="card-header" align="center">
                          View Details
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default AccidentPrediction;
