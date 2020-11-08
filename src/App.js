import React, { Component } from 'react';
import fstl from './fstl.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="content">
          <img src={fstl} className="fstl" alt="four seasons total landscaping" />
          <div className="source">John Minchillo/AP Photo</div>
        </div>
      </div>
    );
  }
}

export default App;
