import React, { Component } from 'react';
import $ from 'jquery'
import { Row, Col } from 'react-flexbox-grid';
import './../style.css'

class Results extends Component {
    constructor() {
      super();
      this.state = {
        poke: [],
      };

  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    let searched
    
    $('#search-form').submit(function (e) {
      e.preventDefault()
      $('.cartas').html('')
      $('.cards').html('')
      searched = $('#pokeInput').val()

    $.ajax({
        url: `https://api.pokemontcg.io/v1/cards?name=${searched}`
    }).done(addCardsPoke)
    .fail(error)
    
  })

    function addCardsPoke(news) {
      const poke = news.cards.map((pic) => {

      let $list2 = $(
        `<div class="pokeCards" >
            <div class="col-xs-12">
                <img src=${pic.imageUrl} />
            </div>
            <div class="col-xs-12">
                <button class="btnFav" type="button">Agregar a favoritos ♥</button>
            </div>   
        </div>`
      )
      return ($('.resultcartas').append($list2))
      console.log(news.cards);
    })
    }
    
    
    function error() {
      console.log('Se ha presentado un error')
    } 
  }

 

  render() {
    return(
           <div className="resultcartas cards">
              {this.state.poke}
           </div>         
    )
  }
}

export default Results;