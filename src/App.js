import React, { Component } from 'react';
import './App.css';
import NavBarComponent from './components/NavBarComponent';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <NavBarComponent/>
      </div>
    );
  }
}

export default App;
