import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import CssBaseline from '@material-ui/core/CssBaseline';
import 'antd/dist/antd.css'

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
