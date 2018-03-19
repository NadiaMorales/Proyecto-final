import React, { Component } from 'react';
import { Row, Col } from 'react-flexbox-grid';
import Home from './components/Home';
import {Favorite} from './components/Favorite/Favorite';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Modal from './Modal/openModal';


import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Row>
          <Col xs={12} md={8}>
            <Home />
          </Col>
          <Col xs={12} md={4}>
            <Favorite />
          </Col>
        </Row>
      </MuiThemeProvider>
    );
  }
}

export default App;
