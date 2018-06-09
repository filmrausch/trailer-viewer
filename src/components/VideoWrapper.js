import React from 'react'
import YouTube from 'react-youtube'

export default ({ video }) => (
  <div className="video">
    <h2 className="video__title">{video.name}</h2>
    {video.special && <p className="video__subtitle">{video.special}</p>}
    <YouTube
      containerClassName="video__iframe"
      videoId={video.id}
    />
  </div>
)
