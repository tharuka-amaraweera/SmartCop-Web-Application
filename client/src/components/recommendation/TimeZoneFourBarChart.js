import React, { Component } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

class BarOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {},
    };
  }

  componentDidMount() {
    axios.get("get_accident_prediction").then((response) => {
      console.log(response.data[0]);
      const data_arr = [];
      data_arr.push(response.data[0].careless_driving[3]);
      data_arr.push(response.data[0].drunk[3]);
      data_arr.push(response.data[0].overtake[3]);
      data_arr.push(response.data[0].rule_violation[3]);
      data_arr.push(response.data[0].speed[3]);
      data_arr.push(response.data[0].turning[3]);
      data_arr.push(response.data[0].other[3]);

      console.log(data_arr);
      this.setState({
        Data: {
          labels: [
            "careless_driving",
            "drunk",
            "overtake",
            "rule_violation",
            "speed",
            "turning",
            "other",
          ],
          datasets: [
            {
              label:
                "Accidet Percentage For Time Zone [ 6.00 p.m. to 12.00 a.m. ]",
              data: data_arr,
              backgroundColor: "#1E90FF",
            },
          ],
        },
      });
    });
  }

  render() {
    return (
      <div>
        <div>
          <Bar
            data={this.state.Data}
            options={{ maintainAspectRatio: false }}
          ></Bar>
        </div>
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <button type="button" id="btn44">
              careless_driving
              <span class="badge">84%</span>
            </button>
          </div>
          <div className="col-lg-4">
            <button type="button" id="btn44">
              rule_violating <span class="badge">82%</span>
            </button>
          </div>
          <div className="col-lg-3">
            <button type="button" id="btn44">
              drunk <span class="badge">69%</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default BarOne;
