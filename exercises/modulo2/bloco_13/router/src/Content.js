import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import Solutions from './Solutions'
import Schedule from './Schedule'
import TrybeContent from './TrybeContent'
import Setup from './Setup'


class Content extends Component {
  constructor() {
    super()

    this.state = {
      availableSolutions: ['12.1', '12.2', '12.3']
    }
  }

  render() {
    return (
      <main>
        <Switch>
          <Route path='/solutions' render={(props) => <Solutions {...props} solutions={this.state.availableSolutions} /> } />
          <Route path='/solutions/:id' component={ Solutions } />
          <Route path='/schedule' component={ Schedule } />
          <Route path='/trybe-content' component={ TrybeContent } />
          <Route path='/setup' component={ Setup } />
          <Route path='/' component={ Home } />
        </Switch>
      </main>
    )
  }
}

export default Content;
