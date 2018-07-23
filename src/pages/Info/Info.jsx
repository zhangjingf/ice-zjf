import React, { Component } from 'react';
import BasicDetailInfo from './components/BasicDetailInfo';

export default class Info extends Component {
  static displayName = 'Info';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="info-page">
        <BasicDetailInfo />
      </div>
    );
  }
}
