import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Home from './component/Home';
import './App.css';

class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
            <Row>
              
              <Col xsOffset={10} xs={1}>
              <button type="button">☺</button>
              </Col>
              <Col  xs={1}>
              <button type="button" >♥</button>
              </Col>
              
            </Row>
              <h1 className="App-title">Pokémon TCG</h1>
            </header>
            <input className="search" type="text" placeholder="Encuentra tu carta Pokémon"/>
            <input className="btn" type="submit" value="Buscar"/>
            <h1 className="result">Aqui puedes buscar tus cartas favoritas de Pokémon TCG</h1>
            <Searchpoke /> 
          </div>
    );
  }
}

export default App;
