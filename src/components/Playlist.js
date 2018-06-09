import React, { Component } from 'react'
import VideoWrapper from './VideoWrapper'

class Playlist extends Component {
  
  state = {
    index: 0
  }
  
  incIndex = () => {
    this.setState((prevState, props) => ({
      index: Math.min(prevState.index + 1, props.videos.length - 1)
    }))
  }

  decIndex = () => {
    this.setState(prevState => ({
      index: Math.max(prevState.index - 1, 0)
    }))
  }

  render() {
    const { videos } = this.props
    const { index } = this.state
    return (
      <div className="playlist">
        <VideoWrapper video={videos[index]} />
        <div className="playlist__nav">
          <button onClick={this.decIndex}>prev</button>
          <button onClick={this.incIndex}>next</button>
        </div>
        <p className="playlist__index">
          {`${index + 1}/${videos.length}`}
        </p>
      </div>
    )
  }
}

export default Playlist
