import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

class SearchResults extends Component {
  render() {
    return(
      <Row className="searchResults">
        <Col xs={12} md={6}>
          hola
        </Col>
        <Col xs={12} md={6}>
          hola
        </Col>
      </Row>
    )
  }
}

export default SearchResults;
