import { Component } from "react";
import React from "react";
import Timer from "./Timer";
class InfiniteTimer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 1000 * 1000, // ms, = 1000s
    };
  }


  render() {
    return (
      <Timer
        time={this.state.time}
       
      />
    );
  }
}
export default InfiniteTimer;
