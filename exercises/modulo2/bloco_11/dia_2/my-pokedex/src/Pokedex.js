import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component{
  

  render() {

    
    return (
      <div>
        <div className="cards">
          {this.props.data.map((currentPokemon, index) => <Pokemon pokemon={currentPokemon} key={index} />)}
        </div>
          <button>Próximo Pokémon</button>
      </div>
    )
  }
}

export default Pokedex;
