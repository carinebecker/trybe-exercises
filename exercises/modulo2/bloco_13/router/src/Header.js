import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <nav>
          <span><Link to='/'>Página Inicial</Link></span>
          <span><Link to='/solutions'>Gabarito</Link></span>
          <span><Link to='/schedule'>Agenda</Link></span>
          <span><Link to='/trybe-content'>Conteúdo</Link></span>
          <span><Link to='/setup'>Setup inicial</Link></span>
        </nav>
      </header>
    )
  }
}

export default Header;
