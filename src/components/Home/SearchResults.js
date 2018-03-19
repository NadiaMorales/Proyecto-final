import React, { Component } from 'react';

import PropTypes from 'prop-types';
import FaStar from 'react-icons/lib/fa/star';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Favorite, ButtonAdd} from './../Favorite/Favorite';
import Modal from './Modal/openModal';
import { Row, Col } from 'react-flexbox-grid';
import Results from './Results'
import $ from 'jquery'
import './../style.css'

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

componentWillMount() {   
    $.ajax({
        url: `https://api.pokemontcg.io/v1/cards?`
    }).done(addCards)
    .fail(error)
    function addCards(news) {
        news.cards.map((pic) => {
            let $list = $(
                    `<div class="pokeCards" >
                        <div class="col-xs-12">
                            <img src=${pic.imageUrl} />
                        </div>
                        <div class="col-xs-12">
                            <button class="btnFav" type="button" >Agregar a favoritos</button>
                        </div>   
                    </div>`
            )
            return ($('.cartas').append($list))
        })
    }

    function error() {
        console.log('Se ha presentado un error')
    }

}

  render() {
    return(
      <Row className="pokResults searchResults">
        <Col xs={12}>
           <div className="cartas">
                {this.state.pokes}
           </div>
            <Results />
        </Col>
      </Row>
    )>>>>>>> master
  }
}

export default SearchResults;