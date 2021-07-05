import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css'
import '../../styles/severitydisplay.css'
import axios from "axios";

class Percentage extends Component{
    constructor(){
      super();
      this.state = {
        severity_results_slight: [],
        severity_results_serious: [],
        severity_results_fatal: [],
        Data: {},
        sl_pt:[],
        sr_t:[],
        ft_pt:[]
      }
    }
  
    componentWillMount() {
      axios.get('/prediction_results').then((response) => {
        let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count];
        // let data_arr = [response.data[2].count,23735,2000];
        // let sum_count = (166144+23735+2000);
        let sum_count = ((response.data[0].count)+(response.data[1].count)+(response.data[2].count));
          this.setState({
            severity_results_slight: response.data[0].count,
            severity_results_serious: response.data[1].count,
            severity_results_fatal: response.data[2].count,
            //for percentage table
            sl_pt: (((response.data[0].count)/sum_count)*100).toFixed(2),
            sr_t: (((response.data[1].count)/sum_count)*100).toFixed(2),
            ft_pt: (((response.data[2].count)/sum_count)*100).toFixed(2),
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
                      "#008000",
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
         <h2 class="heading5">Severity Percentage</h2>
         <br />
        </div>
       <div>
       <Pie data={this.state.Data}
          options={{}}></Pie>
       </div>
      </div>
        <br />
        <br />
        <div class="jumbotron">
        <div align="center">
          <h2 class="heading5">Severity as Percentage</h2>
        </div>
        <br />
        <br />
        <div class="card" id="severity">
        <table class="table table-striped table-hover ">
          <thead>
            <tr>
              <th></th>
              <th>Slight Severity </th>
              <th>Serious Severity </th>
              <th>Fatal Severity </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>{this.state.sl_pt}%</td>
              <td>{this.state.sr_t}%</td>
              <td>{this.state.ft_pt}%</td>
            </tr>
          </tbody>
        </table> 
        </div> 
        <div>
        
          </div> 
    </div>
        </div>
      );
    }
  
  }
  export default Percentage;