import React, {Component} from 'react';


export default class DigitalClicker extends Component {
  constructor() {
    super();
 
    // Define the initial state:
    this.state = {
      hasBeenClicked: false,
    };
  }
  render () {
    return(
  <input onKeyUp={this.typing} type="password" />)
  }
}
