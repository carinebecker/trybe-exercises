import React, { Component } from 'react';

class Clock extends Component {
  constructor() {
    console.log('constructor')
    super();

    this.state = {
      dataHora: new Date(),
      showMessage: false
    }

    this.jequiti = this.jequiti.bind(this)
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ dataHora: new Date() })
    }, 1000)
    // O setInterval vai atualizar o estado de dataHora a cada segundo
    console.log('monta')
    // o componentDidMount vai rodar depois do render
  }

  jequiti() {
    let dataHora = this.state.dataHora;
    this.setState({ showMessage: false }, // primeiro parametro
      () => { // segundo parametro, callback do setState
        let maoe = dataHora.getSeconds() % 10 === 0
          ? { showMessage: true }
          : false
        return maoe;
    })
  }
  componentDidUpdate() {
    // this.jequiti()
    console.log('update')
  }

  // componentWillUnmount() {
  //   console.log('desmonta')
  //   clearInterval(this.setState.interval)
  // }

  render() {
    console.log('render')
    // o render roda depois do constructor
    return(
      <div>
        <p>{ this.state.dataHora.toLocaleTimeString() }</p>
        { this.state.showMessage ? <p>Jequiti</p> : '' }
      </div>
      // linha 51: se showMessage é true exibe o conteúdo
    )
  }
}

export default Clock;
