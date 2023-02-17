import { Component } from "react";
import React from "react";

class Buttons extends React.Component {
    constructor(){
        super()
        this.state= {
            value: true
        }
    }

//    this.HandlerChangeButton( 
//     // I`m here
//     )

    render () {

return(
    <button onClick={HandlerChangeButton}>play</button>
)
    }

}

export default Buttons;