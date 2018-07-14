import React, { Component } from 'react';
import OverviewChart from './components/OverviewChart';

export default class PictureDemo extends Component {
  static displayName = 'PictureDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="picture-demo-page">
        <OverviewChart />
      </div>
    );
  }
}
