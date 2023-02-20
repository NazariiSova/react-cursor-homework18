import { Component } from "react";
import React from "react";
import './Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: true,
      time: 60,
      defalutTime: 60,
      timerWidth: 100,
      timerId: null,
    };
  }



  createNewInterval = () => {
    const id = setInterval(() => {
      if (this.state.time>0){
         console.log("interval");
      const line = 100 / this.state.defalutTime * this.state.time;
      this.setState({...this.state, time: this.state.time - 2, timerWidth: line});
      }
     
    }, 2000);

    return id;
  };

  HandlerChangeButton = () => {
    const isLocalActive = this.state.isActive;
    let intervalId = null;
    if (isLocalActive) {
      intervalId = this.createNewInterval();
    } else {
      console.log(this.state.timerId);
      clearInterval(this.state.timerId);
    }

    this.setState({
      ...this.state,
      isActive: !isLocalActive,
      timerId: intervalId,
    });
  };

  HandlerResetButton = () => {
   this.setState({...this.state, time: 60}) 
  }

  render() {
  console.log('renred');
  return (
      <>
      {this.state.time}
        <button onClick={this.HandlerChangeButton}>
          {this.state.isActive === true ? "Play" : "Pause"}
        </button>
        <button onClick={this.HandlerResetButton}>Reset</button>
        <div className="timer" style={{width: `${this.state.timerWidth}px`}}/>
        
      </>
    );
  }
}

export default Buttons;
