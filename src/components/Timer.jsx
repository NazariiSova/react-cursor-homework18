import { Component } from "react";
import React from "react";

class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
             time: 59
        }
    }

      
render () {
const {time} = this.props



return (
<div>{this.state.time}</div>
)
}

}

export default Timer;