import React, { Component } from 'react';

import Column from './components/Column/Column';

import './App.css';

class App extends Component {
  state = {
    columns: [
      {id: 1, color: 'red', width: '80%' },
    ]
  }

  changeColorHandler = (e) => {
    const color = e.target.value;

  }

  render() {
    return (
      <div className="App">
        <Column
          color={this.state.columns[0].color}
          width={this.state.columns[0].width}
        />
      </div>
    );
  }
}

export default App;
