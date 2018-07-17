import React, { Component } from 'react';
import SimpleSlider from './components/SimpleSlider';

export default class SlideDemo extends Component {
  static displayName = 'SlideDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="slide-demo-page">
        <SimpleSlider />
      </div>
    );
  }
}
