import React, { Component } from 'react'
import Video from './Video'
import PropTypes from 'prop-types'

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

  keyBinding = e => {
    (e.code === 'ArrowLeft' ? this.decIndex
      : e.code === 'ArrowRight' ? this.incIndex
        : () => { })()
  }

  componentDidMount() {
    document.addEventListener('keydown', this.keyBinding)
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keyBinding)
  }

  render() {
    const { videos } = this.props
    const { index } = this.state
    return (
      <div className="playlist">
        <Video video={videos[index]} />
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

Playlist.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
      special: PropTypes.string
    })
  ).isRequired
}

export default Playlist
