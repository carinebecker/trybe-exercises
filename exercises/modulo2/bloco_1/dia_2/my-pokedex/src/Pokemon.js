import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight: {value: weight}, averageWeight: {measurementUnit: unit}, image } = this.props.pokemon
  
    return (
      <div className="card">
        <div className="card-info">
          <p>{name}</p>
          <p>{type}</p>
          <p>Average weight: {weight}{unit}</p>
        </div>
        <img src={image} alt={name} />
      </div>
    )
  }
}

export default Pokemon;
