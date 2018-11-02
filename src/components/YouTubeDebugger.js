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
  this.setState({
    ...this.state,
    settings: {
      ...this.state.settings,
      video:{
        resolution: '720p'
      },
    },
  });
  }
  
  changeBitRate = () => {
  this.setState({
    ...this.state,
    settings: {
      ...this.state.settings,
      video:{
        resolution: '720p'
      },
    },
  });   
  }
  render () {
    return(
  <button class='resolution' onClick={this.changeRes}></button>
  <button class='bitrate' onClick={this.changeBitRate}></button>
  )
  }
}
