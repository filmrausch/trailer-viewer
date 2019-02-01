import React from 'react'
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types'

const Video = ({ video }) => (
  <div className="video">
    <h2 className="video__title">{video.name} ({video.year})</h2>
    <p className="video__subtitle">{video.special}</p>
    <ReactPlayer url={video.url} />
  </div>
)

Video.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    special: PropTypes.string
  }).isRequired
}

export default Video
