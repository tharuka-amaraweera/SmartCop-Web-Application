import React, { Component } from "react";
import Cov from "../images/heading_cover.jpg";
import Logo from "../images/logo.png";
import "../components/recommendation/recommendation.css";

class Cover extends Component {
  state = {};
  render() {
    return (
      <div className="container" style={{ backgroundImage: `url(${Cov})` }}>
        <br />
        <br />
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-2">
            <img
              className="logodes"
              // src={require("../images/logo.jpg")}
              src={require("../images/logo_new.png")}
              width="150px"
              height="150px"
              alt="cam"
            />
          </div>
          {/* <div className="col-lg-1"></div> */}
          <div className="col-lg-5">
            <br />
            <br />
           
            <h1 className="coverhead-new">SmartCop</h1>
          </div>
          {/* <div className="col-lg-2"></div> */}
          <div className="col-lg-3">
            <br />
            <br />
            <br />
            <br />

            <br />
            {/* <form class="navbar-form navbar-left frompad" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search" />
              </div>
            </form> */}
          </div>

          <div>
            <br />
            <br />
            <br />
            <br />

            <br />
            {/* <button type="submit" class="btn btn-primary" id="btnpad">
              Submit
            </button> */}
          </div>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default Cover;
