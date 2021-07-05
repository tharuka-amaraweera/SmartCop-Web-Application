import React, { Component } from "react";
import Header from "../Header";
import '../../styles/severitydisplay.css';
import Counts from "./counts";
import Percentage from "./percentage";
import SPredictionDetails from "./sPredictionDetails";
import '../../styles/accidentprediction.css';
import Cover from "../cover";
import axios from "axios";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class SeverityPage extends Component {

    constructor(){
        super();
        this.state = {
          severity_results_slight: [],
          severity_results_serious: [],
          severity_results_fatal: [],
          Data: {},
          dd: {},
          sNoOfRecords: [],
          sNoOfFeatures: [],
          accuracy: [],
        }
        
      }
      componentWillMount() {
        axios.get('/prediction_results').then((response) => {
          let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count];
          let sum_count = ((response.data[0].count)+(response.data[1].count)+(response.data[2].count));
            this.setState({
              severity_results_slight: response.data[0].count,
              severity_results_serious: response.data[1].count,
              severity_results_fatal: response.data[2].count,
              //for percentage table
            sl_pt: (((response.data[0].count)/sum_count)*100).toFixed(2),
            sr_t: (((response.data[1].count)/sum_count)*100).toFixed(2),
            ft_pt: (((response.data[2].count)/sum_count)*100).toFixed(2),

            });
        });
        //summary
        axios.get('/get_severity_summary').then((response) => {
            let data_arr = [response.data[0].count,response.data[1].count,response.data[2].count];
              this.setState({
                sNoOfRecords: response.data[0].count,
                sNoOfFeatures: response.data[1].count,
                accuracy: (response.data[2].count).toFixed(2),
              });
          });
    }

    downloadSeverityReport = () => {
        console.log('Hi');
        var dd = {
            content: [
                
                {text: 'Accident Severity Summary Report', style: 'header', alignment: 'center'},
            
                {text: 'Road accidents severity is classified into three classes as slight, serious, and fatal.', style: 'tableHeader'},

                {text: 'Severity as Count', style: 'subheader'},
               
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Slight Severity', 'Serious Severity', 'Fatal Severity'],
                            [this.state.severity_results_slight, this.state.severity_results_serious, this.state.severity_results_fatal]
                        ]
                    },
                    fillColor: '#bfee90',
                },

                {text: 'Severity as Percentage', style: 'subheader'},
               
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Slight Severity', 'Serious Severity', 'Fatal Severity'],
                            
                            [this.state.sl_pt, this.state.sr_t, this.state.ft_pt]
                        ]
                    },
                    fillColor: '#ffd2a5',
                },

                {text: 'Severity Summary', style: 'subheader'},
                {text: 'A breif summary of accident severity prediction is depicted.', style: 'tableHeader'},
               
                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Number of Records', 'Number of Features', 'Accuracy of Prediction'],
                            
                            [this.state.sNoOfRecords, this.state.sNoOfFeatures, this.state.accuracy]
                        ]
                    },
                    fillColor: '#90eebf',
                },

                {text: 'Considered conditions for the prediction', style: 'subheader'},
                {text: 'Accidents severity prediction is conducted based on these input features', style: 'tableHeader'},
               
                {
                    
                    
                        ul: [
                            'Longitude',
                            'Latitude',
                            'Date',
                            'Age of Vehicle',
                            'Make',
                            'Time'
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
        pdfMake.createPdf(dd).download('AccidentSeveritySummaryReport.pdf');

    }

    render() {
        let severity_results_slight=this.state.severity_results_slight;
        let severity_results_serious=this.state.severity_results_serious;
        let severity_results_fatal=this.state.severity_results_fatal;

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
                    <h2 class="heading">Severity Prediction Results</h2>
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
                        <Counts />
                    </div>
                    <div class="column">
                    <Percentage />
                    </div>
                    </div>
                    <div>
                        <SPredictionDetails />
                    </div>
            </div>
                </div>
        );
      }

}
export default SeverityPage;