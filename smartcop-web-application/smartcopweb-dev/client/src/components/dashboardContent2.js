import React, { Component } from "react";
import '../styles/dashboard.css';

class DashboardContent2 extends Component {
    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={require('../images/Car.png')} width="500px" height="200px" alt="cam"/>
                        <div class="card-body">
                            <h4 class="card-title">National</h4>
                            <p class="card-text">
                            A 36-year-old Sydney man accused of possessing 
                            and sharing child abuse material has faced Campbelltown Local Court today (Friday 10 July, 2020), charged with 12 offences.
                            </p>
                            <a href="#" class="btn btn-primary">More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={require('../images/international.jpg')} width="500px" height="200px" alt="cam"/>
                        <div class="card-body">
                            <h4 class="card-title">International</h4>
                            <p class="card-text">
                            A 27-year-oldSydney man accused of possessing 
                            and sharing child abuse material has faced Campbelltown Local Court today (Friday 10 July, 2020), charged with 12 offences.
                            </p>
                            <a href="#" class="btn btn-primary">More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={require('../images/latest.jpg')} width="500px" height="200px" alt="cam"/>
                        <div class="card-body">
                            <h4 class="card-title">Latest</h4>
                            <p class="card-text">
                            A 27-year-oldSydney man accused of possessing 
                            and sharing child abuse material has faced Campbelltown Local Court today (Friday 10 July, 2020), charged with 12 offences.
                            </p>
                            <a href="#" class="btn btn-primary">More</a>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="card">
                        <img class="card-img-top" src={require('../images/regional.png')} width="500px" height="200px" alt="cam"/>
                        <div class="card-body">
                            <h4 class="card-title">Regional</h4>
                            <p class="card-text">
                            A 27-year-oldSydney man accused of possessing 
                            and sharing child abuse material has faced Campbelltown Local Court today (Friday 10 July, 2020), charged with 12 offences.
                            </p>
                            <a href="#" class="btn btn-primary">More</a>
                        </div>
                        </div>
                    </div>
                    </div>
            </div>
        );
      }

}
export default DashboardContent2;