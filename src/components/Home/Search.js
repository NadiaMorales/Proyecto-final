import React from 'react';

const url = 'https://api.pokemontcg.io/v1/cards';

class Search extends Component {
  constructor(){
    super();
  }

  componentWillMount(){
    fetch(url).then(data => {
      console.log(data);
    })
  }
}


export default Search;
