import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css'
import '../../styles/severitydisplay.css'
import axios from "axios";

class Vpercentage extends Component{
    constructor(){
      super();
      this.state = {
        area1: [],
        area2: [],
        area3: [],
        area4: [],
        a1:[],
        a2:[],
        a3:[],
        a4:[],
        Data: {},
      }
    }
  
    componentWillMount() {
      axios.get('/get_frequency_pred_results').then((response) => {
        let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count,response.data[3].count];
        //let data_arr = [278746,216447,207392,128134];
        let sum_count = response.data[0].count+response.data[1].count+response.data[2].count+response.data[3].count;
        //let sum_count = 278746+216447+207392+128134;
          this.setState({
            area1: response.data[0].count,
            area2: response.data[1].count,
            area3: response.data[2].count,
            area4: response.data[3].count,
            //for percentage table
            a1: (((response.data[0].count)/sum_count)*100).toFixed(2),
            a2: (((response.data[1].count)/sum_count)*100).toFixed(2),
            a3: (((response.data[2].count)/sum_count)*100).toFixed(2),
            a4: (((response.data[3].count)/sum_count)*100).toFixed(2),
            //for bar graph
            Data: {
                labels: ["Area 1","Area 2","Area 3", "Area 4"],
                datasets: [
                  {
                    label:'Vicinity Prediction',
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
      
        let area1=this.state.area1;
        let area2=this.state.area2;
        let area3=this.state.area3;
        let area4=this.state.area4;
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
         <h2 class="heading5">Accident Vicinity Percenatge</h2>
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
            <h2 class="heading5">Number of Accidents per Area as Percentage</h2>
          </div>
          <br />
          <br />
          <div>
          <ul class="list-group">
            <li class="list-group-item">
                <span class="badge"></span>
                Area 1 -- {this.state.a1}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Area 2 -- {this.state.a2}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Area 3-- {this.state.a3}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Area 4 -- {this.state.a4}%
            </li>
            </ul>
            </div> 
      </div>
        </div>
      );
    }
  
  }
  export default Vpercentage;