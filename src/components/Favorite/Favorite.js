import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaStar from 'react-icons/lib/fa/star';
import { Grid, Row, Col } from 'react-flexbox-grid';
import FavoritePokemon from './FavoritePokemon';
import './../style.css';

class Favorite extends Component {
  render() {
    return(
      <div className="favorite">
        <Row className="addFavorite">
          <Col xs={12} md={10}>
            <h3>Añade a tus pokemon favoritos</h3>
          </Col>
          <Col xs={12} md={2}>
            <FaStar className="star"/>
          </Col>
        </Row>
        <FavoritePokemon />
      </div>
    )
  }
}
class ButtonAdd extends Component {
  handleClick = () => {
    console.log('this is:', this);
  }
  render() {
    return(
      <button className="btnFav" type="button" onClick={this.handleClick} >Agregar a favoritos <FaStar className="starFav"/></button>
    )
  }
}

export {Favorite, ButtonAdd};