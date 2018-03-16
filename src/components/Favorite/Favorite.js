import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaStar from 'react-icons/lib/fa/star';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import { Row, Col } from 'react-flexbox-grid';
import FavoritePokemon from './FavoritePokemon';
import './../style.css';

class Favorite extends Component {
  render() {
    return(
      <div className="favorite">
        <Row>
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

export default Favorite;