import React, { Component } from "react";
import Header from "../Header";
import '../../styles/accidentprediction.css';

class VPredictionDetails extends Component {
    render() {
        return (
            <div>
                <div>
                <div class="row">
                    <div class="column">
                    <div class="jumbotron">
                        <h1 class="heading_description">Area 1</h1>
                         <div className="container">
                         <div className="row">
                            <div className="col-lg-5">
                            </div>
                            <div className="col-lg-2">
                            <table class="table table-striped table-hover ">
                        <tbody>
                          
                            <tr class="info">
                            
                            <td><h4 class="heading_black">Slight</h4></td>
                            <td></td>
                            <td><h4 class="heading_black">80.89%%</h4></td>
                            
                            </tr>
                        </tbody>
                        </table> 
                            </div>
                            <div className="col-lg-5">
                            </div>
                                </div>
                         </div>

                         <h1 class="heading_description">Area 3</h1>
                        <div className="container">
                         <div className="row">
                            <div className="col-lg-5">
                            </div>
                            <div className="col-lg-2">
                            <table class="table table-striped table-hover ">
                        <tbody>
                          
                            <tr class="info">
                            
                            <td><h4 class="heading_black">Slight</h4></td>
                            <td></td>
                            <td><h4 class="heading_black">77.66%</h4></td>
                            
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
                   
                    <div class="column">
                    <div class="jumbotron">
                        <h1 class="heading_description">Area 2</h1>
                         <div className="container">
                         <div className="row">
                            <div className="col-lg-5">
                            </div>
                            <div className="col-lg-2">
                            <table class="table table-striped table-hover ">
                        <tbody>
                          
                            <tr class="info">
                            
                            <td><h4 class="heading_black">Slight</h4></td>
                            <td></td>
                            <td><h4 class="heading_black">48.88%</h4></td>
                            
                            </tr>
                        </tbody>
                        </table> 
                            </div>
                            <div className="col-lg-5">
                            </div>
                                </div>
                         </div>

                         <h1 class="heading_description">Area 4</h1>
                        <div className="container">
                         <div className="row">
                            <div className="col-lg-5">
                            </div>
                            <div className="col-lg-2">
                            <table class="table table-striped table-hover ">
                        <tbody>
                          
                            <tr class="info">
                            
                            <td><h4 class="heading_black">Fatal</h4></td>
                            <td></td>
                            <td><h4 class="heading_black">75.66%</h4></td>
                            
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
export default VPredictionDetails;