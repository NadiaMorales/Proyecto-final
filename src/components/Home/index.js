import React, { Component } from 'react';
import { Row, Col} from 'react-flexbox-grid';
import './../style.css';

class Search extends Component {
  render() {
    return(
      <Row className="searchPokemon">
        <Col className="findPoke" xs={12} md={7}>
        <form id="search-form">
          <label htmlFor="Text">Ingresa nombre pokemon:</label>
            <input id="pokeInput" className="form search" type="text" name="search" placeholder="Encuentra tu carta Pokémon" required=""/>
            <input type="submit" className="btn btn-success" id="submit-btn pokeSearch" value="Buscar"/>
          </form>
        </Col>
      </Row>
    )
  }
}

export default Search;