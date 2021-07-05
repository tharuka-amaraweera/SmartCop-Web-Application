
import React, { Component } from "react";
import Header from "../Header";
//import '../../styles/severitydisplay.css';
import '../../styles/accidentprediction.css';
import RLineChart from './rLineChart';

class RPredictionDetails extends Component {
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
                            <td><h4 class="heading_black">21</h4></td>
                            </tr>
                        </tbody>
                        </table>
                         <br />
                        <br />
                        
                        
                        </div> 
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* <RLineChart /> */}
                        </div>
                    </div>
                   
                    <div class="column">
                    <div class="jumbotron">
                        <h1 class="heading_description">Considered Conditions</h1>
                         <div className="container">
                         <div className="row">
                            <div className="col-lg-5">
                            </div>
                            <div className="col-lg-2">
                            <table class="table table-striped table-hover ">
                        <tbody>
                            <tr class="info">
                            <td></td>
                            <td><h4 class="heading_black">Longitude</h4></td>
                            </tr>
                            <tr class="info">
                            <td></td>
                            <td><h4 class="heading_black">Latitude</h4></td>
                            </tr>
                            <tr class="info">
                            <td></td>
                            <td><h4 class="heading_black">Date</h4></td>
                            </tr>
                            <tr class="info">
                            <td></td>
                            <td><h4 class="heading_black">Make</h4></td>
                            </tr>
                            <tr class="info">
                            <td></td>
                            <td><h4 class="heading_black">Age_of_Vehicle</h4></td>
                            </tr>
                            <tr class="info">
                            <td></td>
                            <td><h4 class="heading_black">Time</h4></td>
                            </tr>
                        </tbody>
                        </table> 
                            </div>
                            <div className="col-lg-5">
                            </div>
                                </div>
                         </div>
                        
                        </div>
                    
                    </div>
                    </div>

                </div>
            </div>
        );
      }

}
export default RPredictionDetails;