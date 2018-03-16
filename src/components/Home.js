import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './Home/index';
import SearchResults from './Home/SearchResults';
import { Row, Col } from 'react-flexbox-grid';
import './style.css';
import './../img/pokemon.jpg';

class Home extends Component {
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon TCG</h1>
        </header>
        <Search />
        <h2 className="result">Aqui puedes buscar tus cartas favoritas de Pokémon TCG</h2>
        <SearchResults />
      </div>
    )
  }
}



export default Home;
