import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
  render() {
    return (
      <div className="cards">
      {this.props.data.map((currentPokemon, index) => <Pokemon pokemon={currentPokemon} key={index} />)}
      </div>
    )
  }
}

export default Pokedex;
