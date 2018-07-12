import React, { Component } from 'react';
import IntroBanner from './components/IntroBanner';

export default class Welcome extends Component {
  static displayName = 'Welcome';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="welcome-page">
        <IntroBanner />
      </div>
    );
  }
}
