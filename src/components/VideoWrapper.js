import React from 'react'
import YouTube from 'react-youtube'
import PropTypes from 'prop-types'

const VideoWrapper = ({ video }) => (
  <div className="video">
    <h2 className="video__title">{video.name}</h2>
    <p className="video__subtitle">{video.special}</p>
    <YouTube
      containerClassName="video__iframe"
      videoId={video.id}
    />
  </div>
)

VideoWrapper.propTypes = {
  video: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    special: PropTypes.string
  }).isRequired
}

export default VideoWrapper
