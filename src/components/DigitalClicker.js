import React, {Component} from 'react';


export default class DigitalClicker extends Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      timesClicked: 0,
    };
  }
  
  handleClick = () => {this.state.timesClicked : this.state.timesClicked + 1}
  render () {
    return(
      <button onClick={this.handleClick}></button>
    )
  }
}
