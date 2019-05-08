import React from 'react'
import './Video.css'

const videoImport = "https://www.youtube.com/watch?v=YnHcvwOXQIo"

export const VideoBackground = () => (
    <div>
        <div class="video-background">
    <div class="video-foreground">
      <video src={videoImport} frameborder="0" allowfullscreen></video>
    </div>
  </div>
    </div>
)