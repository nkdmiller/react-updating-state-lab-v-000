import React, {Component} from 'react';


export default class YouTubeDebugger extends Component {
  constructor() {
    super();
 
    
    this.state = {
      errors: 0,
      user: null,
      settings:
      {
        birate: 8,
        video: {
          resolution: '1080p' 
        }
      }
    };
  }
  
  changeRes = () => {
    
  }
  render () {
    return(
  <button class='resolution' onClick={this.changeRes}></button>)
  }
}
