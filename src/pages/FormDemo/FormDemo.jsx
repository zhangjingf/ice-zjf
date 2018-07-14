import React, { Component } from 'react';
import StepForm from './components/StepForm';

export default class FormDemo extends Component {
  static displayName = 'FormDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="form-demo-page">
        <StepForm />
      </div>
    );
  }
}
