import React, { Component } from 'react';
import 'typeface-roboto';
import AppBar from "./components/AppBar";
import Table from './components/Table';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar />
        <Table />
      </React.Fragment>
    );
  }
}

export default App;
