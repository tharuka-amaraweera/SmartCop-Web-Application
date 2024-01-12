import React, { Component } from "react";
import Header from "../Header";
import '../../styles/accidentprediction.css';
import FLineChart from './fLineChart';

class FPredictionDetails extends Component {
    render() {
        return (
            <div className="container">
                <div className="home-style">
                <div class="row">
                    <div class="column">
                    <div class="jumbotron">
                        <h1 class="heading_description">Summary of Prediction</h1>
                        
                        <div class="card" id="color_lightgreen">
                       
                        <table class="table table-striped table-hover ">
                        <tbody>
                            <tr>
                            <td><h4 class="heading_black">Accuracy of prediction</h4></td>
                            <td><h4 class="heading_black">63.15% </h4></td>
                            </tr>
                            <tr>
                            <td><h4 class="heading_black">Number of records in dataset</h4></td>
                            <td><h4 class="heading_black">830,719</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Number of input features</h4></td>
                            <td><h4 class="heading_black">21</h4></td>
                            </tr>
                        </tbody>
                        </table> 
                        </div> 
                        <FLineChart />
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
                            <tr>
                            <td><h4 class="heading_black">Urban_or_Rural_Area </h4></td>
                            <td><h4 class="heading_black">1st_Road_Class</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Speed_limit</h4></td>
                            <td><h4 class="heading_black">Road_Type</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Road_Surface_Conditions</h4></td>
                            <td><h4 class="heading_black">Weather_Conditions</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Light_Conditions</h4></td>
                            <td><h4 class="heading_black">Date</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Age_Band_of_Driver</h4></td>
                            <td><h4 class="heading_black">Age_of_Vehicle</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Junction_Detail</h4></td>
                            <td><h4 class="heading_black">Junction_Location</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">reasons</h4></td>
                            <td><h4 class="heading_black">make</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Vehicle_Type</h4></td>
                            <td><h4 class="heading_black">Vehicle_Manoeuvre</h4></td>
                            </tr>
                            <tr class="info">
                            <td><h4 class="heading_black">Did_Police_Officer_Attend_Scene_of_Accident</h4></td>
                            <td><h4 class="heading_black">Time</h4></td>
                            </tr>
                            <tr class="info">
                            
                            <td><h4 class="heading_black">Accident Severity</h4></td>
                            </tr>
                        </tbody>
                        </table> 
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
                </div>
                

                
                {/* <DashboardContent1 />
                <DashboardContent2 /> */}
            </div>
        );
      }

}
export default FPredictionDetails;