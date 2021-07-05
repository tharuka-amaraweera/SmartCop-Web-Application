import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css'
import '../../styles/severitydisplay.css'
import axios from "axios";

class Rpercentage extends Component{
    constructor(){
      super();
      this.state = {
        careless_driving: [],
        drunk: [],
        speed: [],
        overtake: [],
        rule_violating: [],
        turning: [],
        other: [],
        r1:[],
        r2:[],
        r3:[],
        r4:[],
        r5:[],
        r6:[],
        r7:[],
        Data: {},
      }
    }
  
    componentWillMount() {
      axios.get('/reason_prediction_results').then((response) => {
        let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count,response.data[3].count,response.data[4].count,response.data[5].count,response.data[6].count];
        //let data_arr = [response.data[0].count,60000,45000,24000,1000,500,10000];
        // let sum_count = (166143+60000+45000+24000+1000+500+10000);
        let sum_count = response.data[0].count+response.data[1].count+response.data[2].count+response.data[3].count+response.data[4].count+response.data[5].count+response.data[6].count;
          this.setState({
            careless_driving: response.data[0].count,
            drunk: response.data[1].count,
            speed: response.data[2].count,
            overtake: response.data[3].count,
            rule_violating: response.data[4].count,
            turning: response.data[5].count,
            other: response.data[6].count,
            //for percentage table
            r1: (((response.data[0].count)/sum_count)*100).toFixed(2),
            r2: (((response.data[1].count)/sum_count)*100).toFixed(2),
            r3: (((response.data[2].count)/sum_count)*100).toFixed(2),
            r4: (((response.data[3].count)/sum_count)*100).toFixed(2),
            r5: (((response.data[4].count)/sum_count)*100).toFixed(2),
            r6: (((response.data[5].count)/sum_count)*100).toFixed(2),
            r7: (((response.data[6].count)/sum_count)*100).toFixed(2),
              
            //for bar graph
            Data: {
                labels: ["careless driving","drunk","speed", "overtake", "rule violating", "turning", "other"],
                datasets: [
                  {
                    label:'Reason Prediction',
                    data: data_arr,
                    backgroundColor:[
                      "#aad2ed",,
                      "#3cb371",
                      "#CD853F",
                      "#D2691E",,
                      "#00BFFF",
                      "#FF0000",
                      "#D2691E",
               ]
                  }
                ]
            }
          });
      });
  }
    render(){
      
      let careless_driving=this.state.careless_driving;
      let drunk=this.state.drunk;
      let speed=this.state.speed;
      let overtake=this.state.overtake;
      let rule_violating=this.state.rule_violating;
      let turning=this.state.turning;
      let other=this.state.other;
      
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
         <h2 class="heading5">Reason Percenatge</h2>
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
            <h2 class="heading5">Reason as Percentage</h2>
          </div>
          <br />
          
          <div>
          <ul class="list-group">
            <li class="list-group-item">
                <span class="badge"></span>
                Careless Driving -- {this.state.r1}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Drunk -- {this.state.r2}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Speed -- {this.state.r3}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Overtake -- {this.state.r4}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Rule Violating -- {this.state.r5}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Turning -- {this.state.r6}%
            </li>
            <li class="list-group-item">
                <span class="badge"></span>
                Other Reasons -- {this.state.r7}%
            </li>
            </ul>
            </div>
            
      </div>
        </div>
      );
    }
  
  }
  export default Rpercentage;