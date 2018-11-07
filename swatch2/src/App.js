import React, { Component } from 'react';

import Columns from './components/Columns/Columns';

import './App.css';

const ENTER = 13;
const DELETE = 8;

class App extends Component {
  state = {
    columns: [
      {id: 1, color: '#cc111c', width: '50%' },
      {id: 2, color: '#ddd111', width: '50%' },
    ]
  }

  keyDownHandler = (e) => {
    const key = e.keyCode;
    const color = e.target.value;

    if (e.target.value.length > 6 && key !== DELETE) {
      e.preventDefault();
    }

    if (key === ENTER) {
      this.changeColumnColor(color);
    }
  }

  changeColumnColor(color) {
    const columns_copy = [...this.state.columns];

    if (color.split('')[0] !== "#") {
      color = "#" + color;
    }

    columns_copy[0].color = color;

    this.setState({
      columns: columns_copy
    });
  }

  render() {
    return (
      <div className="App">
        <Columns
          keyDown={e => this.keyDownHandler(e)}
          columns={ this.state.columns }
        />
      </div>
    );
  }
}

export default App;
