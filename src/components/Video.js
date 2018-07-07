import React from 'react'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'

const Video = ({ video }) => (
  <div className="video">
    <h2 className="video__title">{video.name} ({video.year})</h2>
    <p className="video__subtitle">{video.special}</p>
    <YouTube
      containerClassName="video__iframe"
      videoId={video.id}
    />
  </div>
)

Video.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    special: PropTypes.string
  }).isRequired
}

export default Video
