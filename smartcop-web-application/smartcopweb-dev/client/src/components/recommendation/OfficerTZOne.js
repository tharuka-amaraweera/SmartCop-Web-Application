import React, { Component } from "react";
//import { render } from "@testing-library/react";
import Header from "../Header";
import axios from "axios";
import Cover from "../cover";

class OffNew extends Component {
  constructor() {
    super();
    this.state = {
      officerOne: [],
      officerTwo: [],
      officerThree: [],
      officerFour: [],
    };
  }

  componentWillMount() {
    axios.get("/get_officers_one").then((response) => {
      this.setState({
        officerOne: response.data[0].officer_id,
      });
    });

    axios.get("/get_officers_two").then((response) => {
      this.setState({
        officerTwo: response.data[0].officer_id,
      });
    });

    axios.get("/get_officers_three").then((response) => {
      this.setState({
        officerThree: response.data[0].officer_id,
      });
    });

    axios.get("/get_officers_four").then((response) => {
      this.setState({
        officerFour: response.data[0].officer_id,
      });
    });
  }

  render() {
    let offOne = this.state.officerOne;
    let offTwo = this.state.officerTwo;
    let offThree = this.state.officerThree;
    let offFour = this.state.officerFour;
    return (
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
        <div className="row">
          <div className="col-lg-12">
            <br />
            <h1 className="rec">Recommended Officers</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <h1 className="day">Time Zone 1 : (12.00 a.m - 6.00 a.m)</h1>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <tbody>
                  <tr>
                    <td className="tbdata">
                      <a
                        className="tbdata"
                        href="http://localhost:3000/scheduleOne"
                      >
                        {offOne[0]}
                      </a>
                    </td>
                    <td className="tbdata">{offOne[1]}</td>
                    <td className="tbdata">{offOne[2]}</td>
                    <td className="tbdata">{offOne[3]}</td>
                    <td className="tbdata">{offOne[4]}</td>
                    <td className="tbdata">{offOne[5]}</td>
                    <td className="tbdata">{offOne[6]}</td>
                  </tr>
                  <tr>
                    <td className="tbdata">{offOne[7]}</td>
                    <td className="tbdata">{offOne[8]}</td>
                    <td className="tbdata">{offOne[9]}</td>
                    <td className="tbdata">{offOne[10]}</td>
                    <td className="tbdata">{offOne[11]}</td>
                    <td className="tbdata">{offOne[12]}</td>
                    <td className="tbdata">{offOne[13]}</td>
                  </tr>

                  <tr>
                    <td className="tbdata">{offOne[14]}</td>
                    <td className="tbdata">{offOne[15]}</td>
                    <td className="tbdata">{offOne[16]}</td>
                    <td className="tbdata">{offOne[17]}</td>
                    <td className="tbdata">{offOne[18]}</td>
                    <td className="tbdata">{offOne[19]}</td>
                    <td className="tbdata">{offOne[20]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <h1 className="day">Time Zone 2 : (6.00 a.m - 12.00 p.m)</h1>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <tbody>
                  <tr>
                    <td className="tbdata">{offTwo[0]}</td>
                    <td className="tbdata">{offTwo[1]}</td>
                    <td className="tbdata">{offTwo[2]}</td>
                    <td className="tbdata">{offTwo[3]}</td>
                    <td className="tbdata">{offTwo[4]}</td>
                    <td className="tbdata">{offTwo[5]}</td>
                    <td className="tbdata">{offTwo[6]}</td>
                  </tr>
                  <tr>
                    <td className="tbdata">{offTwo[7]}</td>
                    <td className="tbdata">{offTwo[8]}</td>
                    <td className="tbdata">{offTwo[9]}</td>
                    <td className="tbdata">{offTwo[10]}</td>
                    <td className="tbdata">{offTwo[11]}</td>
                    <td className="tbdata">{offTwo[12]}</td>
                    <td className="tbdata">{offTwo[13]}</td>
                  </tr>

                  <tr>
                    <td className="tbdata">{offTwo[14]}</td>
                    <td className="tbdata">{offTwo[15]}</td>
                    <td className="tbdata">{offTwo[16]}</td>
                    <td className="tbdata">{offTwo[17]}</td>
                    <td className="tbdata">{offTwo[18]}</td>
                    <td className="tbdata">{offTwo[19]}</td>
                    <td className="tbdata">{offTwo[20]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <h1 className="day">Time Zone 3 : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <tbody>
                  <tr>
                    <td className="tbdata">{offThree[0]}</td>
                    <td className="tbdata">{offThree[1]}</td>
                    <td className="tbdata">{offThree[2]}</td>
                    <td className="tbdata">{offThree[3]}</td>
                    <td className="tbdata">{offThree[4]}</td>
                    <td className="tbdata">{offThree[5]}</td>
                    <td className="tbdata">{offThree[6]}</td>
                  </tr>
                  <tr>
                    <td className="tbdata">{offThree[7]}</td>
                    <td className="tbdata">{offThree[8]}</td>
                    <td className="tbdata">{offThree[9]}</td>
                    <td className="tbdata">{offThree[10]}</td>
                    <td className="tbdata">{offThree[11]}</td>
                    <td className="tbdata">{offThree[12]}</td>
                    <td className="tbdata">{offThree[13]}</td>
                  </tr>

                  <tr>
                    <td className="tbdata">{offThree[14]}</td>
                    <td className="tbdata">{offThree[15]}</td>
                    <td className="tbdata">{offThree[16]}</td>
                    <td className="tbdata">{offThree[17]}</td>
                    <td className="tbdata">{offThree[18]}</td>
                    <td className="tbdata">{offThree[19]}</td>
                    <td className="tbdata">{offThree[20]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <h1 className="day">Time Zone 4 : (6.00 p.m - 12.00 a.m)</h1>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <tbody>
                  <tr>
                    <td className="tbdata">{offFour[0]}</td>
                    <td className="tbdata">{offFour[1]}</td>
                    <td className="tbdata">{offFour[2]}</td>
                    <td className="tbdata">{offFour[3]}</td>
                    <td className="tbdata">{offFour[4]}</td>
                    <td className="tbdata">{offFour[5]}</td>
                    <td className="tbdata">{offFour[6]}</td>
                  </tr>
                  <tr>
                    <td className="tbdata">{offFour[7]}</td>
                    <td className="tbdata">{offFour[8]}</td>
                    <td className="tbdata">{offFour[9]}</td>
                    <td className="tbdata">{offFour[10]}</td>
                    <td className="tbdata">{offFour[11]}</td>
                    <td className="tbdata">{offFour[12]}</td>
                    <td className="tbdata">{offFour[13]}</td>
                  </tr>

                  <tr>
                    <td className="tbdata">{offFour[14]}</td>
                    <td className="tbdata">{offFour[15]}</td>
                    <td className="tbdata">{offFour[16]}</td>
                    <td className="tbdata">{offFour[17]}</td>
                    <td className="tbdata">{offFour[18]}</td>
                    <td className="tbdata">{offFour[19]}</td>
                    <td className="tbdata">{offFour[20]}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OffNew;
