import React, { Component } from "react";
import "./App.css";

import { render } from "@testing-library/react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Root from "./components/Root";
import Home from "./components/Home";
import User from "./components/User";
// import Severity from "./components/severity";
import Reasonprediction from "./components/reason/reasonprediction";
import OffOne from "./components/recommendation/officersOne";
import OffTwo from "./components/recommendation/officersTwo";
import OffThree from "./components/recommendation/officersThree";
import OffFour from "./components/recommendation/officersFour";
import Officers from "./components/recommendation/officers";
import AccidentPrediction from "./components/AccidentPrediction";
import SeverityPage from "./components/severity/severitypage";
import Schedule from "./components/schedule/scheduleOfficers";
import ScheduleOne from "./components/schedule/scheduleOne";
import ScheduleTwo from "./components/schedule/ScheduleTwo";
import ScheduleThree from "./components/schedule/ScheduleThree";
import ScheduleFour from "./components/schedule/scheduleFour";
import FrequencyPage from "./components/frequency/frequencypage";
import VicinityPage from "./components/vicinity/vicinitypage";
import OffTZOne from "./components/recommendation/OfficerTZOne";
import PublicAwareness from "./components/publicAwareness/publicAwareness";
import TryParentOne from "./components/notification/parentOne"
import TryParentTwo from "./components/notification/parentTwo"
import TryParentThree from "./components/notification/parentThree"
import TryParentFour from "./components/notification/parentFour"
import TryParentFive from "./components/notification/parentFive"
import TryParentSix from "./components/notification/parentSix"
import TryParentSeven from "./components/notification/parentSeven"

class App extends Component {
  render() {
    return (
      // <Router history={browserHistory}>
      //   <Route path={"user"} component={User} />
      //   <Route path={"home"} component={Home} />
      // </Router>
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route path="/" component={Root} exact />
            <Route path="/user" component={User} />
            <Route path="/reasonprediction" component={Reasonprediction} />
            <Route path="/timeZone_one" component={OffOne} />
            <Route path="/timeZone_two" component={OffTwo} />
            <Route path="/timeZone_three" component={OffThree} />
            <Route path="/timeZone_four" component={OffFour} />
            <Route path="/officers" component={Officers} />
            <Route path="/accidentprediction" component={AccidentPrediction} />
            <Route path="/severitypage" component={SeverityPage} />
            <Route path="/schedule" component={Schedule} />
            <Route path="/scheduleOne" component={ScheduleOne} />
            <Route path="/scheduleTwo" component={ScheduleTwo} />
            <Route path="/scheduleThree" component={ScheduleThree} />
            <Route path="/scheduleFour" component={ScheduleFour} />
            <Route path="/frequencypage" component={FrequencyPage} />
            <Route path="/vicinitypage" component={VicinityPage} />
            <Route path="/OffOne" component={OffTZOne} />
            <Route path="/publicAwareness" component={PublicAwareness} />
            <Route path="/TryParentOne" component={TryParentOne} />
            <Route path="/TryParentTwo" component={TryParentTwo} />
            <Route path="/TryParentThree" component={TryParentThree} />
            <Route path="/TryParentFour" component={TryParentFour} />
            <Route path="/TryParentFive" component={TryParentFive} />
            <Route path="/TryParentSix" component={TryParentSix} />
            <Route path="/TryParentSeven" component={TryParentSeven} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
