import React, { Component } from "react";
import Header from "../Header";
import Cover from "../cover";
import Vcount from "./vCount";
import Vpercentage from "./vPercentage";
import VPredictionDetails from "./vPredictionDetails";
import axios from "axios";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class VicinityPage extends Component {

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
              
            });
        });

    }

    downloadSeverityReport = () => {
        console.log('Hi');
        var dd = {
            content: [
                
                {text: 'Accident Vicinity Summary Report', style: 'header', alignment: 'center'},
            
                {text: 'Road accidents vicinity is clustered into four classes as area 1, area 2, area 3, and area 4.', style: 'tableHeader'},

                {text: 'Vicinity as Count', style: 'subheader'},
               
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Area 1', 'Area 2', 'Area 3', 'Area 4'],
                            [this.state.area1, this.state.area2, this.state.area3,this.state.area4]
                        ]
                    },
                    fillColor: '#bfee90',
                },

                {text: 'Vicinity as Percentage', style: 'subheader'},
               
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Area 1', 'Area 2', 'Area 3', 'Area 4'],
                            [this.state.a1, this.state.a2, this.state.a3,this.state.a4]
                        ]
                    },
                    fillColor: '#ffd2a5',
                },

                {text: 'Vicinity Summary', style: 'subheader'},
                {text: 'A breif summary of accident vicinity prediction is depicted.', style: 'tableHeader'},
               
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Number of Records', 'Number of Features'],
                            
                            ['100', '3']
                        ]
                    },
                    fillColor: '#90eebf',
                },

                {text: 'Considered conditions for the prediction', style: 'subheader'},
                {text: 'Accidents vicinity clustering is conducted based on these input features', style: 'tableHeader'},
               
                {
                    
                    
                        ul: [
                            'Longitude',
                            'Latitude',
                            'Urban or Rural Area',
                        ],
                    
                    fillColor: '#ffd2a5',
                },

            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10]
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 10, 0, 5]
                },
                tableExample: {
                    margin: [0, 5, 0, 15]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 12,
                    color: 'black'
                }
            }
            
        }
        pdfMake.createPdf(dd).download('AccidentVicinitySummaryReport.pdf');

    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                        <Cover />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <Header />
                        </div>
                    </div>
            </div>
            <br />
                <br />
                <div className="home-style">
                <div class="row">
                    <div class="col-lg-4">
                    <h2 class="heading">Vicinity Clustering Results</h2>
                    </div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-4">
                    <a class="btn btn-primary" id="prediction-reports" onClick={this.downloadSeverityReport}>Summary Report</a>
                    </div>
                    </div>
                <br />
                <br />
             <div class="row">
                <div class="column">
                    <Vcount />
                </div>
                <div class="column">
                <Vpercentage />
                </div>
            </div>
            {/* <h1 class="heading_description">Highest Severity Type</h1>
            <VPredictionDetails /> */}
                </div>
            </div>
        );
      }

}
export default VicinityPage;