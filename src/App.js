import React, { Component } from 'react';
import './App.css';
import Routes from "./Routes";
import 'antd/dist/antd.css'
import {Layout} from "antd";
const {
    Header, Footer, Sider, Content,
} = Layout;

class App extends Component {

  render() {
    return (
      <div className="App">
          <Layout>
              <div className='headBanner'>Header</div>
              <Content>
                  <Routes/>
              </Content>
              <Footer>Mike ©️</Footer>
          </Layout>
      </div>
    );
  }
}

export default App;
