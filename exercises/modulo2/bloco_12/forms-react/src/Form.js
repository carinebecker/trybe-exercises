import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super()

    this.state = {
      nome: '',
      maiorDuvida: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    this.setState({
      [name]: target.value,
    })
  }

  render() {
    return (
      <div>
        <label>
          Nome
          <input name="nome" onChange={ this.handleChange } type="text"  value={ this.state.nome } />
        </label>
        <label>
          Qual assunto de React te dá mais duvida?
          <select name="maiorDuvida" value={ this.state.select } onChange={ this.handleChange } >
            <option value="props">Props</option>
            <option value="estado">Estado</option>
            <option value="eventos">Eventos</option>
            <option value="Componentes">Componentes</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Form;
