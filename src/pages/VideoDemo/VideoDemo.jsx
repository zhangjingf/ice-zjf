import React, { Component } from 'react';
import SimpleVideoPlayer from './components/SimpleVideoPlayer';

export default class VideoDemo extends Component {
  static displayName = 'VideoDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="video-demo-page">
        <SimpleVideoPlayer />
      </div>
    );
  }
}
