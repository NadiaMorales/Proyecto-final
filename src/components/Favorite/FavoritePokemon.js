import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FaStar from 'react-icons/lib/fa/star';
import { Grid, Row, Col } from 'react-flexbox-grid';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import './../style.css';

class FavoritePokemon extends Component {
  render() {
    return(
      <List className="pokemonFav">
      <ListItem className="items" primaryText="Jigglypuff"/>
      </List>
    )
  } onDrop(data) {
    console.log(data)
  }
}

export default FavoritePokemon;