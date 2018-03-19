import React, { Component } from 'react';
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
    )
  }
}

export default SearchResults;
