import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css'
import '../../styles/severitydisplay.css'
import axios from "axios";

class Fcount extends Component{
    constructor(){
      super();
      this.state = {
        time_zone1: [],
        time_zone2: [],
        time_zone3: [],
        time_zone4: [],
        Data: {},
      }
    }
  
    componentWillMount() {
      axios.get('/get_frequency_pred_results').then((response) => {
        let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count,response.data[3].count];
        console.log(response.data[0].count)
          this.setState({
            time_zone1: response.data[0].count,
            time_zone2: response.data[1].count,
            time_zone3: response.data[2].count,
            time_zone4: response.data[3].count,
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
         <h2 class="heading5">Accident Frequency Count</h2>
        </div>
       <div>
       <Bar data={this.state.Data}
          options={{}}></Bar>
       </div>
      </div>
        <br />
        <br />
        <div class="jumbotron">
          <div align="center">
            <h2 class="heading5">Frequency as Count</h2>
          </div>
          <br />
          <br />
          <div class="card" id="severity">
          <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th></th>
                <th>Time Zone 1</th>
                <th>Time Zone 2</th>
                <th>Time Zone 3</th>
                <th>Time Zone 4</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>{time_zone1}</td>
                <td>{time_zone2}</td>
                <td>{time_zone3}</td>
                <td>{time_zone4}</td>
              </tr>
            </tbody>
          </table> 
          </div>
          <div>
          <br />
          <br />
          <br />
          <br />
            </div> 
      </div>
        </div>
      );
    }
  
  }
  export default Fcount;