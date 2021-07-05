import React, { Component } from "react";
import "../styles/dashboard.css";

class DashboardContent1 extends Component {
  render() {
    return (
      <div>
        <div class="row justify-content-center">
          <div class="col-md-5">
            <img
              src={require("../images/Cars.jpg")}
              width="500px"
              height="230px"
              alt="cam"
            />
          </div>
          {/* <div class="col-md-1" style={{ backgroundColor: "#FFFFFF" }}>
                    </div> */}
          <div class="col-md-5">
            <div class="card" class="card_background">
              <div class="card-header" align="center">
                <h2 class="headings">Related Content</h2>
              </div>
              <div class="card-body">
                <h4 class="card-body-heading">Road accidents Predictions</h4>
              </div>
              <div class="card-body">
                <h4 class="card-body-heading">Officer Recommendation and Scheduling</h4>
              </div>
              <div class="card-body">
                <h4 class="card-body-heading">Passenger Awareness Reports</h4>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardContent1;
