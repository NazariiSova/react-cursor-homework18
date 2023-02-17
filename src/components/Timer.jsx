import { Component } from "react";
import React from "react";

class Timer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
             time: 12
        }
    }

      
render () {
const {time} = this.props

setInterval(() => {
    this.setState({...this.state, time: this.state.time -1 }) 
       
}, 2000)

return (
<div>{this.state.time}</div>
)
}

}

export default Timer;