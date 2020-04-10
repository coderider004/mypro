import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'

import Header from './components/Header'
import InputFood from './components/InputFood'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <InputFood></InputFood>
        </div>
      </div>
    );
  }
}
