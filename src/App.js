import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import CssBaseline from '@material-ui/core/CssBaseline';

class App extends Component {

  render() {
    return (
      <div className="App">
        <CssBaseline>
          <Routes/>
        </CssBaseline>
      </div>
    );
  }
}

export default App;
