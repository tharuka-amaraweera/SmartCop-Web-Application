import React, { useEffect, useState, Component } from "react";
import Header from "../Header";
import axios from "axios";

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      officer: [],
      checkpoints: [],
      days: [],
    };
  }
  render() {
    return (
      <div>
        <h1>schedule</h1>
      </div>
    );
  }
}

export default Schedule;
