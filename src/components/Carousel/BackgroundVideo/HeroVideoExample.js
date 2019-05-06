import React, { Component } from "react";
import VideoCover from 'react-video-cover'
const itribeCourse = "https://www.youtube.com/watch?v=I3zlHtFE8kw";

export class HeroVideoExample extends Component {
    render() {
      const videoOptions = {
        src: 'https://www.youtube.com/watch?v=I3zlHtFE8kw',
        ref: videoRef => {
          this.videoRef = videoRef;
        },
        onClick: () => {
          if (this.videoRef && this.videoRef.paused) {
            this.videoRef.play();
          } else if (this.videoRef) {
            this.videoRef.pause();
          }
        },
        title: 'click to play/pause',
      };
      return (
        <div style={{
          width: '300px',
          height: '300px',
          overflow: 'hidden',
        }}>
          <VideoCover
            videoOptions={videoOptions}
          />
        </div>
      );
    }
  }