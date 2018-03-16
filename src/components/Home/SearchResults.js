import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
          //     <Row>
                  <div className="pokeCards" key={pic.cards}>
                      <Col xs={12}>
                          <img src={pic.imageUrl} />
                      </Col>
                      <Col xs={12}>
                          <button className="btnFav" type="button" >Agregar a favoritos ♥</button>
                      </Col>   
                  </div>
          //     </Row>
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
