import React, { Component } from "react";
import {Bar, Line, Pie} from 'react-chartjs-2';
import '../../styles/severity.css'
import '../../styles/severitydisplay.css'
import axios from "axios";
import '../../styles/accidentprediction.css';

class Vcount extends Component{
  constructor(){
    super();
    this.state = {
      area1: [],
      area2: [],
      area3: [],
      area4: [],
      Data: {},
    }
  }

  componentWillMount() {
    axios.get('/get_vicinity_pred_results').then((response) => {
      //let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count,response.data[3].count];
      let data_arr = [278746,216447,207392,128134];
        this.setState({
          area1: response.data[0].count,
          area2: response.data[1].count,
          area3: response.data[2].count,
          area4: response.data[3].count,
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
       <h2 class="heading5">Accident Vicinity Count</h2>
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
          <h2 class="heading5">Number of Accident Area</h2>
        </div>
        <br />
        <br />
        <div class="card" id="severity">
        <table class="table table-striped table-hover ">
          <thead>
            <tr>
              <th></th>
              <th>Area 1</th>
              <th>Area 2</th>
              <th>Area 3</th>
              <th>Area 4</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              {/* <td>{area1}</td>
              <td>{area2}</td>
              <td>{area3}</td>
              <td>{area4}</td> */}
              <td>{278746}</td>
              <td>{216447}</td>
              <td>{207392}</td>
              <td>{128134}</td>
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
  export default Vcount;