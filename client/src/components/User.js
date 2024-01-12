import React, { Component } from "react";
import { render } from "@testing-library/react";
import Header from "./Header";

import { browserHistory } from "react-router-dom";

class User extends Component {
  onNavigateHome() {
    alert("home");
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10">
              <Header />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10">
              <h1>Officers</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default User;
