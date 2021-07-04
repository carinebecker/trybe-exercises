import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Solutions extends Component {
  render() {
    const solutionId = this.props.match.params.id;
    if(solutionId) return <div>{ solutionId }</div>
    
    const { solutions } = this.props;
    return (
      <div>
        {solutions.map((solution, index) => (
          <div key={index}>
            <span><Link to={`/solutions/${solution}`}>{solution}</Link></span>
          </div>
          ))
        }
      </div>
    )
  }
}

export default Solutions;

