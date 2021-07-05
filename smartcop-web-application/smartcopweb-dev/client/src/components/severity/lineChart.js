import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css';
//import '../../styles/severitydisplay.css'
import axios from "axios";

class LineChart extends Component{
    constructor(){
      super();
      this.state = {
        severity_results_slight: [],
        severity_results_serious: [],
        severity_results_fatal: [],
        Data: {},
      }
    }
  
    componentWillMount() {
      axios.get('/prediction_results').then((response) => {
        let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count];
        // let data_arr = [response.data[2].count,23735,2000];
          this.setState({
            severity_results_slight: response.data[0].count,
            severity_results_serious: response.data[1].count,
            severity_results_fatal: response.data[2].count,
            //for bar graph
            Data: {
                labels: ['Slight','Serious','Fatal'],
                datasets: [
                  {
                    label:'Severity',
                    data: data_arr,
                    backgroundColor:[
                      "#aad2ed",,
                      "#FF0000",
                      "#CD853F",
               ]
                  }
                ]
            }
          });
      });
  }
    render(){
      let severity_results_slight=this.state.severity_results_slight;
      let severity_results_serious=this.state.severity_results_serious;
      let severity_results_fatal=this.state.severity_results_fatal;
      
      return(
        <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10" align="center">
            </div>
          </div>
        </div>
        <div class="jumbotron">
        <div align="center">
         <h2 class="heading_description">Severity Count</h2>
        </div>
       <div>
       <Line data={this.state.Data}
          options={{}}></Line>
       </div>
      </div>
        <br />
        <br />
        </div>
      );
    }
  
  }
  export default LineChart;