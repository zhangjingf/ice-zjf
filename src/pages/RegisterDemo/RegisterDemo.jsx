import React, { Component } from 'react';
import Register from './components/Register';

export default class RegisterDemo extends Component {
  static displayName = 'RegisterDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="register-demo-page">
        <Register />
      </div>
    );
  }
}
