import React, { Component } from "react";
import Header from "../Header";
//import '../../styles/severitydisplay.css';
import '../../styles/accidentprediction.css';
import LineChart from './lineChart';
// import DashboardContent1 from "../dashboardContent1";
// import DashboardContent2 from "../dashboardContent2";

class SPredictionDetails extends Component {
    render() {
        return (
            <div>
                <div>
                <div class="row">
                    <div class="column">
                    <div class="jumbotron">
                        <h1 class="heading_description">Summary of Prediction</h1>
                        
                        <div class="card" id="color_lightgreen">
                       
                        <table class="table table-striped table-hover ">
                        <tbody>
                            <tr>
                            <td><h4 class="heading_black">Accuracy of prediction</h4></td>
                            <td><h4 class="heading_black">85.76%</h4></td>
                            </tr>
                            <tr>
                            <td><h4 class="heading_black">Number of records in dataset</h4></td>
                            <td><h4 class="heading_black">830719</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Number of input features</h4></td>
                            <td><h4 class="heading_black">6</h4></td>
                            </tr>
                        </tbody>
                        </table> 
                        </div> 
                        <LineChart />
                        </div>
                    </div>
                   
                    <div class="column">
                    <div class="jumbotron">
                        <h1 class="heading_description">Considered Conditions</h1>
                        
                        <div class="card" id="color_lightgreen">
                       
                        <table class="table table-striped table-hover ">
                        <tbody>
                            <tr>
                            <td><h4 class="heading_black">Latitude</h4></td>
                            <td><h4 class="heading_black">Longitude</h4></td>
                            </tr>
                            
                            <tr class="info">
                            <td><h4 class="heading_black">Date</h4></td>
                            <td><h4 class="heading_black">Age_of_Vehicle</h4></td>
                            </tr>
                            
                            <tr class="info">
                            <td><h4 class="heading_black">Make</h4></td>
                            <td><h4 class="heading_black">Time</h4></td>
                            </tr>
                            
                        </tbody>
                        </table> 
                      
                        </div> 
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    
                    </div>
                    </div>

                </div>
                {/* <DashboardContent1 />
                <DashboardContent2 /> */}
            </div>
        );
      }

}
export default SPredictionDetails;