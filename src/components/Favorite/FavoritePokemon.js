import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaStar from 'react-icons/lib/fa/star';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './../style.css';

class FavoritePokemon extends Component {
  render() {
    return(
      
        <Row className="barFavorite">
          <Col xs={12} md={4}>
            <FaArrowLeft />
          </Col>
          <Col xs={12} md={4}>
            <h3>Aquí puedes ver tus Pokemon favoritos.</h3>
          </Col>
          <Col xs={12} md={4}>
          <FaStar />
          </Col>
        </Row>
      
    )
  }
}

export default FavoritePokemon;