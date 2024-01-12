import React, { useEffect, useState, Component } from "react";
import Header from "../Header";
import axios from "axios";
import Cover from "../cover";
import ".././schedule/schedule.css";
import Nav from "../schedule/scheduleHeader";

class ScheduleThree extends Component {
  constructor() {
    super();
    this.state = {
      officer: [],
      MonCheckpointOne: [],
      MonCheckpointTwo: [],
      MonCheckpointThree: [],
      MonCheckpointFour: [],
      MonCheckpointFive: [],
      TueCheckpointOne: [],
      TueCheckpointTwo: [],
      TueCheckpointThree: [],
      TueCheckpointFour: [],
      TueCheckpointFive: [],
      WedCheckpointOne: [],
      WedCheckpointTwo: [],
      WedCheckpointThree: [],
      WedCheckpointFour: [],
      WedCheckpointFive: [],
      ThurCheckpointOne: [],
      ThurCheckpointTwo: [],
      ThurCheckpointThree: [],
      ThurCheckpointFour: [],
      ThurCheckpointFive: [],
      FriCheckpointOne: [],
      FriCheckpointTwo: [],
      FriCheckpointThree: [],
      FriCheckpointFour: [],
      FriCheckpointFive: [],
      SatCheckpointOne: [],
      SatCheckpointTwo: [],
      SatCheckpointThree: [],
      SatCheckpointFour: [],
      SatCheckpointFive: [],
      SunCheckpointOne: [],
      SunCheckpointTwo: [],
      SunCheckpointThree: [],
      SunCheckpointFour: [],
      SunCheckpointFive: [],
      days: [],
    };
  }

  componentWillMount() {
    const MonOne = [];
    const MonTwo = [];
    const MonThree = [];
    const MonFour = [];
    const MonFive = [];
    const TueOne = [];
    const TueTwo = [];
    const TueThree = [];
    const TueFour = [];
    const TueFive = [];
    const WedOne = [];
    const WedTwo = [];
    const WedThree = [];
    const WedFour = [];
    const WedFive = [];
    const ThurOne = [];
    const ThurTwo = [];
    const ThurThree = [];
    const ThurFour = [];
    const ThurFive = [];
    const FriOne = [];
    const FriTwo = [];
    const FriThree = [];
    const FriFour = [];
    const FriFive = [];
    const SatOne = [];
    const SatTwo = [];
    const SatThree = [];
    const SatFour = [];
    const SatFive = [];
    const SunOne = [];
    const SunTwo = [];
    const SunThree = [];
    const SunFour = [];
    const SunFive = [];
    axios.get("/get_scheduled_officers_three").then((response) => {
      //   console.log(response.data[0].checkpoints[0]);
      for (var i = 0; i < 105; i++) {
        if (
          response.data[0].days[i] == "Mon" &&
          response.data[0].checkpoints[i] == "chkPoint1"
        ) {
          MonOne.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Mon" &&
          response.data[0].checkpoints[i] == "chkPoint2"
        ) {
          MonTwo.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Mon" &&
          response.data[0].checkpoints[i] == "chkPoint3"
        ) {
          MonThree.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Mon" &&
          response.data[0].checkpoints[i] == "chkPoint4"
        ) {
          MonFour.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Mon" &&
          response.data[0].checkpoints[i] == "chkPoint5"
        ) {
          MonFive.push(response.data[0].officers[i]);
        }

        //teusday

        if (
          response.data[0].days[i] == "Teu" &&
          response.data[0].checkpoints[i] == "chkPoint1"
        ) {
          TueOne.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Teu" &&
          response.data[0].checkpoints[i] == "chkPoint2"
        ) {
          TueTwo.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Teu" &&
          response.data[0].checkpoints[i] == "chkPoint3"
        ) {
          TueThree.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Teu" &&
          response.data[0].checkpoints[i] == "chkPoint4"
        ) {
          TueFour.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Teu" &&
          response.data[0].checkpoints[i] == "chkPoint5"
        ) {
          TueFive.push(response.data[0].officers[i]);
        }

        //wednesday

        if (
          response.data[0].days[i] == "Wed" &&
          response.data[0].checkpoints[i] == "chkPoint1"
        ) {
          WedOne.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Wed" &&
          response.data[0].checkpoints[i] == "chkPoint2"
        ) {
          WedTwo.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Wed" &&
          response.data[0].checkpoints[i] == "chkPoint3"
        ) {
          WedThree.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Wed" &&
          response.data[0].checkpoints[i] == "chkPoint4"
        ) {
          WedFour.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Wed" &&
          response.data[0].checkpoints[i] == "chkPoint5"
        ) {
          WedFive.push(response.data[0].officers[i]);
        }

        // Thursday

        if (
          response.data[0].days[i] == "Thur" &&
          response.data[0].checkpoints[i] == "chkPoint1"
        ) {
          ThurOne.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Thur" &&
          response.data[0].checkpoints[i] == "chkPoint2"
        ) {
          ThurTwo.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Thur" &&
          response.data[0].checkpoints[i] == "chkPoint3"
        ) {
          ThurThree.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Thur" &&
          response.data[0].checkpoints[i] == "chkPoint4"
        ) {
          ThurFour.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Thur" &&
          response.data[0].checkpoints[i] == "chkPoint5"
        ) {
          ThurFive.push(response.data[0].officers[i]);
        }

        //Friday

        if (
          response.data[0].days[i] == "Fri" &&
          response.data[0].checkpoints[i] == "chkPoint1"
        ) {
          FriOne.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Fri" &&
          response.data[0].checkpoints[i] == "chkPoint2"
        ) {
          FriTwo.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Fri" &&
          response.data[0].checkpoints[i] == "chkPoint3"
        ) {
          FriThree.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Fri" &&
          response.data[0].checkpoints[i] == "chkPoint4"
        ) {
          FriFour.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Fri" &&
          response.data[0].checkpoints[i] == "chkPoint5"
        ) {
          FriFive.push(response.data[0].officers[i]);
        }

        //Saturday

        if (
          response.data[0].days[i] == "Sat" &&
          response.data[0].checkpoints[i] == "chkPoint1"
        ) {
          SatOne.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sat" &&
          response.data[0].checkpoints[i] == "chkPoint2"
        ) {
          SatTwo.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sat" &&
          response.data[0].checkpoints[i] == "chkPoint3"
        ) {
          SatThree.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sat" &&
          response.data[0].checkpoints[i] == "chkPoint4"
        ) {
          SatFour.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sat" &&
          response.data[0].checkpoints[i] == "chkPoint5"
        ) {
          SatFive.push(response.data[0].officers[i]);
        }

        //Sunday

        if (
          response.data[0].days[i] == "Sun" &&
          response.data[0].checkpoints[i] == "chkPoint1"
        ) {
          SunOne.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sun" &&
          response.data[0].checkpoints[i] == "chkPoint2"
        ) {
          SunTwo.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sun" &&
          response.data[0].checkpoints[i] == "chkPoint3"
        ) {
          SunThree.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sun" &&
          response.data[0].checkpoints[i] == "chkPoint4"
        ) {
          SunFour.push(response.data[0].officers[i]);
        }
        if (
          response.data[0].days[i] == "Sun" &&
          response.data[0].checkpoints[i] == "chkPoint5"
        ) {
          SunFive.push(response.data[0].officers[i]);
        }

        this.setState({
          MonCheckpointOne: MonOne,
          MonCheckpointTwo: MonTwo,
          MonCheckpointThree: MonThree,
          MonCheckpointFour: MonFour,
          MonCheckpointFive: MonFive,
          TueCheckpointOne: TueOne,
          TueCheckpointTwo: TueTwo,
          TueCheckpointThree: TueThree,
          TueCheckpointFour: TueFour,
          TueCheckpointFive: TueFive,
          WedCheckpointOne: WedOne,
          WedCheckpointTwo: WedTwo,
          WedCheckpointThree: WedThree,
          WedCheckpointFour: WedFour,
          WedCheckpointFive: WedFive,
          ThurCheckpointOne: ThurOne,
          ThurCheckpointTwo: ThurTwo,
          ThurCheckpointThree: ThurThree,
          ThurCheckpointFour: ThurFour,
          ThurCheckpointFive: ThurFive,
          FriCheckpointOne: FriOne,
          FriCheckpointTwo: FriTwo,
          FriCheckpointThree: FriThree,
          FriCheckpointFour: FriFour,
          FriCheckpointFive: FriFive,
          SatCheckpointOne: SatOne,
          SatCheckpointTwo: SatTwo,
          SatCheckpointThree: SatThree,
          SatCheckpointFour: SatFour,
          SatCheckpointFive: SatFive,
          SunCheckpointOne: SunOne,
          SunCheckpointTwo: SunTwo,
          SunCheckpointThree: SunThree,
          SunCheckpointFour: SunFour,
          SunCheckpointFive: SunFive,
        });
      }
    });
  }
  render() {
    let Mon_one = this.state.MonCheckpointOne;
    let Mon_two = this.state.MonCheckpointTwo;
    let Mon_three = this.state.MonCheckpointThree;
    let Mon_four = this.state.MonCheckpointFour;
    let Mon_five = this.state.MonCheckpointFive;
    let Teu_one = this.state.TueCheckpointOne;
    let Teu_two = this.state.TueCheckpointTwo;
    let Teu_three = this.state.TueCheckpointThree;
    let Teu_four = this.state.TueCheckpointFour;
    let Teu_five = this.state.TueCheckpointFive;
    let Wed_one = this.state.WedCheckpointOne;
    let Wed_two = this.state.WedCheckpointTwo;
    let Wed_three = this.state.WedCheckpointThree;
    let Wed_four = this.state.WedCheckpointFour;
    let Wed_five = this.state.WedCheckpointFive;
    let Thur_one = this.state.ThurCheckpointOne;
    let Thur_two = this.state.ThurCheckpointTwo;
    let Thur_three = this.state.ThurCheckpointThree;
    let Thur_four = this.state.ThurCheckpointFour;
    let Thur_five = this.state.ThurCheckpointFive;
    let Fri_one = this.state.FriCheckpointOne;
    let Fri_two = this.state.FriCheckpointTwo;
    let Fri_three = this.state.FriCheckpointThree;
    let Fri_four = this.state.FriCheckpointFour;
    let Fri_five = this.state.FriCheckpointFive;
    let Sat_one = this.state.SatCheckpointOne;
    let Sat_two = this.state.SatCheckpointTwo;
    let Sat_three = this.state.SatCheckpointThree;
    let Sat_four = this.state.SatCheckpointFour;
    let Sat_five = this.state.SatCheckpointFive;
    let Sun_one = this.state.SunCheckpointOne;
    let Sun_two = this.state.SunCheckpointTwo;
    let Sun_three = this.state.SunCheckpointThree;
    let Sun_four = this.state.SunCheckpointFour;
    let Sun_five = this.state.SunCheckpointFive;

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
            <br />
            <br />
            <Nav />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <br />
            <h1 className="day">Monday Schedule : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>
                      <h3 className="tbheader">Checkpoint One</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Two</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Three</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Four</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Five</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbdata">
                      {Mon_one[0]}
                      <br />
                      {Mon_one[1]}
                      <br />
                      {Mon_one[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Mon_two[0]}
                      <br />
                      {Mon_two[1]}
                      <br />
                      {Mon_two[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Mon_three[0]}
                      <br />
                      {Mon_three[1]}
                      <br />
                      {Mon_three[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Mon_four[0]}
                      <br />
                      {Mon_four[1]}
                      <br />
                      {Mon_four[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Mon_five[0]}
                      <br />
                      {Mon_five[1]}
                      <br />
                      {Mon_five[2]}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
            <h1 className="day">Teusday Schedule : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>
                      <h3 className="tbheader">Checkpoint One</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Two</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Three</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Four</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Five</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbdata">
                      {Teu_one[0]}
                      <br />
                      {Teu_one[1]}
                      <br />
                      {Teu_one[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Teu_two[0]}
                      <br />
                      {Teu_two[1]}
                      <br />
                      {Teu_two[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Teu_three[0]}
                      <br />
                      {Teu_three[1]}
                      <br />
                      {Teu_three[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Teu_four[0]}
                      <br />
                      {Teu_four[1]}
                      <br />
                      {Teu_four[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Teu_five[0]}
                      <br />
                      {Teu_five[1]}
                      <br />
                      {Teu_five[2]}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
            <h1 className="day">Wednesday Schedule : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>
                      <h3 className="tbheader">Checkpoint One</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Two</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Three</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Four</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Five</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbdata">
                      {Wed_one[0]}
                      <br />
                      {Wed_one[1]}
                      <br />
                      {Wed_one[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Wed_two[0]}
                      <br />
                      {Wed_two[1]}
                      <br />
                      {Wed_two[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Wed_three[0]}
                      <br />
                      {Wed_three[1]}
                      <br />
                      {Wed_three[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Wed_four[0]}
                      <br />
                      {Wed_four[1]}
                      <br />
                      {Wed_four[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Wed_five[0]}
                      <br />
                      {Wed_five[1]}
                      <br />
                      {Wed_five[2]}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
            <h1 className="day">Thursday Schedule : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>
                      <h3 className="tbheader">Checkpoint One</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Two</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Three</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Four</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Five</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbdata">
                      {Thur_one[0]}
                      <br />
                      {Thur_one[1]}
                      <br />
                      {Thur_one[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Thur_two[0]}
                      <br />
                      {Thur_two[1]}
                      <br />
                      {Thur_two[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Thur_three[0]}
                      <br />
                      {Thur_three[1]}
                      <br />
                      {Thur_three[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Thur_four[0]}
                      <br />
                      {Thur_four[1]}
                      <br />
                      {Thur_four[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Thur_five[0]}
                      <br />
                      {Thur_five[1]}
                      <br />
                      {Thur_five[2]}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
            <h1 className="day">Friday Schedule : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>
                      <h3 className="tbheader">Checkpoint One</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Two</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Three</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Four</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Five</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbdata">
                      {Fri_one[0]}
                      <br />
                      {Fri_one[1]}
                      <br />
                      {Fri_one[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Fri_two[0]}
                      <br />
                      {Fri_two[1]}
                      <br />
                      {Fri_two[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Fri_three[0]}
                      <br />
                      {Fri_three[1]}
                      <br />
                      {Fri_three[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Fri_four[0]}
                      <br />
                      {Fri_four[1]}
                      <br />
                      {Fri_four[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Fri_five[0]}
                      <br />
                      {Fri_five[1]}
                      <br />
                      {Fri_five[2]}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
            <h1 className="day">Saturday Schedule : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>
                      <h3 className="tbheader">Checkpoint One</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Two</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Three</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Four</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Five</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbdata">
                      {Sat_one[0]}
                      <br />
                      {Sat_one[1]}
                      <br />
                      {Sat_one[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sat_two[0]}
                      <br />
                      {Sat_two[1]}
                      <br />
                      {Sat_two[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sat_three[0]}
                      <br />
                      {Sat_three[1]}
                      <br />
                      {Sat_three[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sat_four[0]}
                      <br />
                      {Sat_four[1]}
                      <br />
                      {Sat_four[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sat_five[0]}
                      <br />
                      {Sat_five[1]}
                      <br />
                      {Sat_five[2]}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <br />
            <br />
            <h1 className="day">Sunday Schedule : (12.00 p.m - 6.00 p.m)</h1>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div class="card" id="tbl">
              <table class="table table-striped table-hover ">
                <thead>
                  <tr>
                    <th>
                      <h3 className="tbheader">Checkpoint One</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Two</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Three</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Four</h3>
                    </th>
                    <th className="tbheader">
                      <h3 className="tbheader">Checkpoint Five</h3>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="tbdata">
                      {Sun_one[0]}
                      <br />
                      {Sun_one[1]}
                      <br />
                      {Sun_one[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sun_two[0]}
                      <br />
                      {Sun_two[1]}
                      <br />
                      {Sun_two[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sun_three[0]}
                      <br />
                      {Sun_three[1]}
                      <br />
                      {Sun_three[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sun_four[0]}
                      <br />
                      {Sun_four[1]}
                      <br />
                      {Sun_four[2]}
                      <br />
                    </td>
                    <td className="tbdata">
                      {Sun_five[0]}
                      <br />
                      {Sun_five[1]}
                      <br />
                      {Sun_five[2]}
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default ScheduleThree;
