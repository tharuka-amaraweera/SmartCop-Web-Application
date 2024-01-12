import React, { Component } from "react";
import Header from "../Header";
import Cover from "../cover";
import Fcount from "./fcount";
import Fpercentage from "./fpercentage";
import FPredictionDetails from "./fPredictionDetails";
import axios from "axios";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class FrequencyPage extends Component {
    constructor() {
        super();
        this.state = {
            time_zone1: [],
            time_zone2: [],
            time_zone3: [],
            time_zone4: [],
            f1: [],
            f2: [],
            f3: [],
            f4: [],
            fNoOfRecords: [],
            fNoOfFeatures: [],
            accuracy: [],
        }
    }
    componentWillMount() {
        axios.get('/get_frequency_pred_results').then((response) => {
            let data_arr = [response.data[0].count, response.data[1].count, response.data[2].count, response.data[3].count];
            let sum_count = response.data[0].count + response.data[1].count + response.data[2].count + response.data[3].count;
            console.log(response.data[0].count)
            this.setState({
                time_zone1: response.data[0].count,
                time_zone2: response.data[1].count,
                time_zone3: response.data[2].count,
                time_zone4: response.data[3].count,

                //for percentage table
                f1: (((response.data[0].count) / sum_count) * 100).toFixed(2),
                f2: (((response.data[1].count) / sum_count) * 100).toFixed(2),
                f3: (((response.data[2].count) / sum_count) * 100).toFixed(2),
                f4: (((response.data[3].count) / sum_count) * 100).toFixed(2),

            });
        });

        //summary
        axios.get('/get_severity_summary').then((response) => {
            let data_arr = [response.data[0].count, response.data[1].count, response.data[2].count];
            this.setState({
                fNoOfRecords: response.data[0].count,
                fNoOfFeatures: response.data[1].count,
                accuracy: (response.data[2].count).toFixed(2),
            });
        });
    }
    downloadSeverityReport = () => {
        console.log('Hi');
        var dd = {
            content: [

                { text: 'Accident Frequency Summary Report', style: 'header', alignment: 'center' },

                { text: 'Road accidents frequency is classified into four classes as time zone 1, time zone 2, time zone 3, and time zone 4.', style: 'tableHeader' },

                { text: 'Time Zones are categorized as:', style: 'subheader' },

                {
                    bold: true,
                    ul: [
                        'Time Zone 1: 12.00 am to 6.00 am',
                        'Time Zone 2: 6.00 am to 12.00 pm',
                        'Time Zone 3: 12.00 pm to 6.00 pm',
                        'Time Zone 4: 6.00 pm to 12.00 am'
                    ]
                },

                { text: 'Frequency as Count', style: 'subheader' },

                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Time Zone 1', 'Time Zone 2', 'Time Zone 3', 'Time Zone 4'],
                            [this.state.time_zone1, this.state.time_zone2, this.state.time_zone3, this.state.time_zone4]
                        ]
                    },
                    fillColor: '#bfee90',
                },

                { text: 'Frequency as Percentage', style: 'subheader' },

                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Time Zone 1', 'Time Zone 2', 'Time Zone 3', 'Time Zone 4'],
                            [this.state.f1, this.state.f2, this.state.f3, this.state.f4]
                        ]
                    },
                    fillColor: '#ffd2a5',
                },

                { text: 'Frequency Summary', style: 'subheader' },
                { text: 'A breif summary of accident frequency prediction is depicted.', style: 'tableHeader' },

                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Number of Records', 'Number of Features', 'Accuracy of Prediction'],

                            [this.state.fNoOfRecords, this.state.fNoOfFeatures, this.state.accuracy]
                        ]
                    },
                    fillColor: '#90eebf',
                },

                { text: 'Considered conditions for the prediction', style: 'subheader' },
                { text: 'Accidents frequency classification is conducted based on these input features', style: 'tableHeader' },

                {


                    ul: [
                        'Longitude',
                        'Latitude',
                        'Date',
                        'Age of Vehicle',
                        'Make',
                        'Time',
                        'Urban or Rural Area',
                        '1st Road Class',
                        'Speed Limit',
                        'Road Type',
                        'Road Surface Conditions',
                        'Weather Conditions',
                        'Light Conditions',
                        'Age Band of Driver',
                        'Junction Details',
                        'Junction Location',
                        'Vehicle Type',
                        'Vehicle Manoeuvre',
                        'Did police officer attend to the Scene',
                        'Reasons',
                        'Accident Severity'
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
        pdfMake.createPdf(dd).download('AccidentFrequencySummaryReport.pdf');

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
                            <h2 class="heading">Frequency Prediction Results</h2>
                        </div>
                        <div class="col-lg-4"></div>
                        <div class="col-lg-4">
                            <a class="btn btn-primary" id="prediction-reports" onClick={this.downloadSeverityReport}>Summary Report</a>
                        </div>
                    </div>
                    <br />
                    <br />
                    {/* <div class="row">
                        <div class="column">
                            <Fcount />
                        </div>
                        <div class="column">
                            <Fpercentage />
                        </div>
                        <div>
                            <FPredictionDetails />
                        </div>
                    </div> */}
                    <div class="row">
                        <div class="column">
                            <Fpercentage />
                        </div>
                        <div class="column">
                            <Fpercentage />
                        </div>
                    </div>
                    <div>
                        <FPredictionDetails />
                    </div>
                </div>
            </div>
        );
    }

}
export default FrequencyPage;