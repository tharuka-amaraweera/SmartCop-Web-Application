import React, { Component } from "react";
import { render } from "@testing-library/react";

import Header from "./Header";
import Home from "./Home";
import Cover from "./cover";

class Root extends Component {
  render() {
    return (
      <div className="container container-style">
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
          <div className="col-lg-12 home-style">
            <Home />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
export default Root;
