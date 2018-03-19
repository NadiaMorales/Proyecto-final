import React, { Component } from 'react';
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