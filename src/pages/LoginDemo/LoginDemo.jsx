import React, { Component } from 'react';
import UserLogin from './components/UserLogin';

export default class LoginDemo extends Component {
  static displayName = 'LoginDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-demo-page">
        <UserLogin />
      </div>
    );
  }
}
