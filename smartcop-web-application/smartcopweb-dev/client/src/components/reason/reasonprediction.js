import React, { Component } from "react";
import Header from "../Header";
import '../../styles/severitydisplay.css';
import Rcount from "./rcount";
import Rpercentage from "./rpercentage";
import RPredictionDetails from "./rPredictionDetails";
import Cover from "../cover";
import axios from "axios";
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

class Reasonprediction extends Component {
    constructor() {
        super();
        this.state = {
            careless_driving: [],
            drunk: [],
            speed: [],
            overtake: [],
            rule_violating: [],
            turning: [],
            other: [],
            dd: {},
            rNoOfRecords: [],
            rNoOfFeatures: [],
            accuracy: [],

        }
    }
    componentWillMount() {
        axios.get('/reason_prediction_results').then((response) => {
            let data_arr = [response.data[0].count, response.data[1].count, response.data[2].count, response.data[3].count, response.data[4].count, response.data[5].count, response.data[6].count];
            let sum_count = response.data[0].count + response.data[1].count + response.data[2].count + response.data[3].count + response.data[4].count + response.data[5].count + response.data[6].count;
            this.setState({
                careless_driving: response.data[0].count,
                drunk: response.data[1].count,
                speed: response.data[2].count,
                overtake: response.data[3].count,
                rule_violating: response.data[4].count,
                turning: response.data[5].count,
                other: response.data[6].count,

                //for percentage table
                r1: (((response.data[0].count) / sum_count) * 100).toFixed(2),
                r2: (((response.data[1].count) / sum_count) * 100).toFixed(2),
                r3: (((response.data[2].count) / sum_count) * 100).toFixed(2),
                r4: (((response.data[3].count) / sum_count) * 100).toFixed(2),
                r5: (((response.data[4].count) / sum_count) * 100).toFixed(2),
                r6: (((response.data[5].count) / sum_count) * 100).toFixed(2),
                r7: (((response.data[6].count) / sum_count) * 100).toFixed(2),

            });
        });

        axios.get('/get_reason_summary').then((response) => {
            let data_arr = [response.data[0].count, response.data[1].count, response.data[2].count];
            this.setState({
                rNoOfRecords: response.data[0].count,
                rNoOfFeatures: response.data[1].count,
                accuracy: (response.data[2].count).toFixed(2),
            });
        });
    }
    downloadSeverityReport = () => {
        console.log('Hi');
        var dd = {
            content: [

                { text: 'Accident Reason Summary Report', style: 'header', alignment: 'center' },

                { text: 'Reasons for road accidents are predicted and classified into seven categories.', style: 'tableHeader' },

                { text: 'Reasons as Count', style: 'subheader' },

                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Careless Driving', 'Drunk', 'Speed', 'Overtake', 'Rule Violation', 'Turning', 'Other'],
                            [this.state.careless_driving, this.state.drunk, this.state.speed, this.state.overtake, this.state.rule_violating, this.state.turning, this.state.other]
                        ]
                    },
                    fillColor: '#bfee90',
                },
                { text: 'Reasons as Percentage', style: 'subheader' },

                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Careless Driving', 'Drunk', 'Speed', 'Overtake', 'Rule Violation', 'Turning', 'Other'],

                            [this.state.r1, this.state.r2, this.state.r3, this.state.r4, this.state.r5, this.state.r6, this.state.r7]
                        ]
                    },
                    fillColor: '#ffd2a5',
                },

                { text: 'Accidents Summary of Reasons Prediction', style: 'subheader' },
                { text: 'A breif summary of accident reason prediction is depicted.', style: 'tableHeader' },

                {
                    style: 'tableExample',
                    table: {
                        body: [
                            ['Number of Records', 'Number of Features', 'Accuracy of Prediction'],

                            [this.state.rNoOfRecords, this.state.rNoOfFeatures, this.state.accuracy]
                        ]
                    },
                    fillColor: '#90eebf',
                },

                { text: 'Considered conditions for the prediction', style: 'subheader' },
                { text: 'Accidents reason prediction is conducted based on these input features', style: 'tableHeader' },

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
        pdfMake.createPdf(dd).download('AccidentReasonPredictionSummaryReport.pdf');
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
                            <h2 class="heading">Reason Prediction Results</h2>
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
                            <Rcount />
                        </div>
                        <div class="column">
                            <Rpercentage />
                        </div>
                    </div>
                    <div>
                        <RPredictionDetails />
                    </div>
                </div>
            </div>
        );
    }

}
export default Reasonprediction;