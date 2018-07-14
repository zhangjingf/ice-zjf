import React, { Component } from 'react';
import BraftEditor from './components/BraftEditor';

export default class EditDemo extends Component {
  static displayName = 'EditDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="edit-demo-page">
        <BraftEditor />
      </div>
    );
  }
}
