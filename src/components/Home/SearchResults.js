import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaStar from 'react-icons/lib/fa/star';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Favorite, ButtonAdd} from './../Favorite/Favorite';
import Modal from './Modal/openModal';



class SearchResults extends Component {
  constructor() {
    super();
    this.state = {
        pokes: [],
    };

}

componentWillMount() {
  fetch(`https://api.pokemontcg.io/v1/cards?`)
  
  .then(results => {
    return results.json();
  }).then(data => {
    console.log(data.cards);
      let pokes = data.cards.map((pic) => {
        return(
          // <Grid>
          // <Row>
          <div className="pokeCards" key={pic.cards}>
            <Col xs={12}>
              <img src={pic.imageUrl} />
            </Col>
            <Col xs={12}>
            <Modal show={this.state.isOpen}
                onClose={this.toggleModal}>
              <Button onClick={this.props.onClose}>
              onClose
              <Button/>
            </Col>
          </div>
          //</Row>
          // </Grid>
        )
      })
    this.setState({pokes: pokes});
  })
}

  render() {
    return(
      <Row className="searchResults">
        <Col xs={12}>
           <div className="cartas">
            {this.state.pokes}
          </div>
        </Col>
      </Row>
    )
  }
}

export default SearchResults;
