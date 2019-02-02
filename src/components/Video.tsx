import React, { createRef } from "react";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import { IVideo } from "../interfaces/video";
import { findDOMNode } from "react-dom";

interface Props {
  video: IVideo;
}

class Video extends React.Component<Props, { playing: boolean }> {
  state = {
    playing: false
  };

  private ref = createRef<ReactPlayer>();

  ended = () => {
    screenfull && screenfull.exit()
    this.setState({
      playing: false
    })    
  }

  keyBinding = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      const player: any = findDOMNode(this.ref.current!)
      if(player && screenfull) {
        screenfull.request(player)
      }
      this.setState({
        playing: !this.state.playing
      });
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keyBinding);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyBinding);
  }

  render() {
    const { video } = this.props;
    const { playing } = this.state;
    return (
      <div className="video">
        <h2 className="video__title">
          {video.name} ({video.year})
        </h2>
        <p className="video__subtitle">{video.special}</p>
        <ReactPlayer ref={this.ref} url={video.url} playing={playing} onEnded={this.ended} />

      </div>
    );
  }
}

export default Video;
