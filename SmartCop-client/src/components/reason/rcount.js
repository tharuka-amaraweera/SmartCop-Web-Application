import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css'
import '../../styles/severitydisplay.css'
import axios from "axios";

class Rcount extends Component{
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
        Data: {},
      }
    }
  
    componentWillMount() {
      axios.get('/reason_prediction_results').then((response) => {
        let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count,response.data[3].count,response.data[4].count,response.data[5].count,response.data[6].count];
        //let data_arr = [response.data[0].count,60000,45000,24000,1000,500,10000];
          this.setState({
            careless_driving: response.data[0].count,
            drunk: response.data[1].count,
            speed: response.data[2].count,
            overtake: response.data[3].count,
            rule_violating: response.data[4].count,
            turning: response.data[5].count,
            other: response.data[6].count,
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
                      "#FF00FF",
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
         <h2 class="heading5">Reason Count</h2>
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
            <h2 class="heading5">Reason as Count</h2>
          </div>
          <br />
          <br />
          <div class="card" id="severity">
          <table class="table table-striped table-hover ">
            <thead>
              <tr>
                <th></th>
                <th>Careless Driving</th>
                <th>Drunk</th>
                <th>Speed</th>
                <th>Overtake</th>
                <th>Rule Violating</th>
                <th>Turning</th>
                <th>Other Reasons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                {/* <td>{careless_driving}</td>
                <td>{60000}</td>
                <td>{45000}</td>
                <td>{24000}</td>
                <td>{1000}</td>
                <td>{500}</td>
                <td>{10000}</td> */}
                <td>{careless_driving}</td>
                <td>{drunk}</td>
                <td>{speed}</td>
                <td>{overtake}</td>
                <td>{rule_violating}</td>
                <td>{turning}</td>
                <td>{other}</td>
              </tr>
            </tbody>
          </table> 
          </div>
          <div>
          
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
      );
    }
  
  }
  export default Rcount;