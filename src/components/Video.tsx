import React from 'react'
import ReactPlayer from 'react-player'
import { IVideo } from '../interfaces/video'

interface Props {
  video: IVideo
}

const Video = ({ video }: Props) => (
  <div className="video">
    <h2 className="video__title">{video.name} ({video.year})</h2>
    <p className="video__subtitle">{video.special}</p>
    <ReactPlayer url={video.url} />
  </div>
)

export default Video
