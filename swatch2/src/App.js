import React, { Component } from 'react';

import Column from './components/Column/Column';

import './App.css';

const ENTER = 13;
const DELETE = 8;

class App extends Component {
  state = {
    columns: [
      {id: 1, color: '#cc111c', width: '33%' },
      {id: 2, color: '#ddd111', width: '33%' },
      {id: 3, color: '#dd11a1', width: '33%' },
    ]
  }

  keyDownHandler = (e, id) => {
    const key = e.keyCode;
    const color = e.target.value;

    if (key === ENTER) {
      this.changeColumnColor(color, id);
    }

    if (e.target.value.length > 6 && key !== DELETE) {
      e.preventDefault();
    }
  }

  changeColumnColor(color, id) {
    const columns_copy = [...this.state.columns];

    if (color.split('')[0] !== "#") {
      color = "#" + color;
    }

    columns_copy[id].color = color;

    this.setState({
      columns: columns_copy
    });
  }

  render() {
    let columns = null;

    if (this.state.columns) {
      columns = (
        <>
          {
            this.state.columns.map((col, index) => {
              return <Column
                key={ col.id }
                color={ col.color }
                width={ col.width }
                keyDown={(e) => this.keyDownHandler(e, index)}
              />
            })
          }
        </>
      )
    }
    return (
      <div className="App">
        { columns }
      </div>
    );
  }
}

export default App;
