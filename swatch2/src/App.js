import React, { Component } from 'react';

import Column from './components/Column/Column';

import './App.css';

const ENTER = 13;

class App extends Component {
  state = {
    columns: [
      {id: 1, color: 'red', width: '80%' },
    ]
  }

  keyDownHandler = (e) => {
    const key = e.keyCode;
    const color = e.target.value;

    if (key === ENTER) {
      this.changeColumnColor(color);
    }
  }

  changeColumnColor(color) {
    const columns_copy = [...this.state.columns];

    columns_copy[0].color = color;

    this.setState({
      columns: columns_copy
    });
  }

  render() {
    return (
      <div className="App">
        <Column
          color={this.state.columns[0].color}
          width={this.state.columns[0].width}
          keyDown={e => this.keyDownHandler(e)}
        />
      </div>
    );
  }
}

export default App;
