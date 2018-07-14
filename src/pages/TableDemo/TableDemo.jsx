import React, { Component } from 'react';
import ComplexTabTable from './components/ComplexTabTable';

export default class TableDemo extends Component {
  static displayName = 'TableDemo';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="table-demo-page">
        <ComplexTabTable />
      </div>
    );
  }
}
