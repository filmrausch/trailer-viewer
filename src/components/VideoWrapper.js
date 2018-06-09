import React from 'react'
import YouTube from 'react-youtube'

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

export default VideoWrapper
