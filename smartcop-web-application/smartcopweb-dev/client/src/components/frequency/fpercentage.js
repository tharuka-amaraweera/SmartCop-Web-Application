import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css'
import '../../styles/severitydisplay.css'
import axios from "axios";

class Fpercentage extends Component{
    constructor(){
      super();
      this.state = {
        time_zone1: [],
        time_zone2: [],
        time_zone3: [],
        time_zone4: [],
        f1:[],
        f2:[],
        f3:[],
        f4:[],
        Data: {},
      }
    }
  
    componentWillMount() {
      axios.get('/get_frequency_pred_results').then((response) => {
        let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count,response.data[3].count];
        let sum_count = response.data[0].count+response.data[1].count+response.data[2].count+response.data[3].count;
          this.setState({
            time_zone1: response.data[0].count,
            time_zone2: response.data[1].count,
            time_zone3: response.data[2].count,
            time_zone4: response.data[3].count,
            //for percentage table
            f1: (((response.data[0].count)/sum_count)*100).toFixed(2),
            f2: (((response.data[1].count)/sum_count)*100).toFixed(2),
            f3: (((response.data[2].count)/sum_count)*100).toFixed(2),
            f4: (((response.data[3].count)/sum_count)*100).toFixed(2),
            //for bar graph
            Data: {
                labels: ["Time Zone 1","Time Zone 2","Time Zone 3", "Time Zone 4"],
                datasets: [
                  {
                    label:'Frequency Prediction',
                    data: data_arr,
                    backgroundColor:[
                        "#aad2ed",
                        "#CD853F",
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
      
      let time_zone1=this.state.time_zone1;
      let time_zone2=this.state.time_zone2;
      let time_zone3=this.state.time_zone3;
      let time_zone4=this.state.time_zone4;
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
         <h2 class="heading5">Accident Frequency Percenatge</h2>
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
            <h2 class="heading5">Frequency as Percentage</h2>
          </div>
          <br />
          <br />
          <div>
          <ul class="list-group">
            <li class="list-group-item">
                <span class="badge"></span>
                Time Zone 1 -- {this.state.f1}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Time Zone 2 -- {this.state.f2}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Time Zone 3 -- {this.state.f3}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Time Zone 4 -- {this.state.f4}%
            </li>
            </ul>
            </div> 
      </div>
        </div>
      );
    }
  
  }
  export default Fpercentage;