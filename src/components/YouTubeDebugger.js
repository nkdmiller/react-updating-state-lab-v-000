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
  typing = () => {console.log('Entering password...')};
  render () {
    return(
  <input onKeyUp={this.typing} type="password" />)
  }
}
