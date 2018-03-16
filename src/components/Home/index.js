import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col} from 'react-flexbox-grid';
import './../style.css';

class Search extends Component {
  render() {
    return(
      <Row className="searchPokemon">
        <Col className="findPoke" xs={7} md={7}>
          <label htmlFor="Text">Ingresa nombre pokemon:</label>
          <input className="search" type="text" placeholder="Encuentra tu carta Pokémon"/>
        </Col>
        <Col xs={3} md={3}>
          <input className="btn" type="submit" value="BUSCAR"/>
        </Col>
      </Row>
    )
  }
}

export default Search;