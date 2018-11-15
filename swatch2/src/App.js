import React, { Component } from 'react';

import Layout from './components/UI/Layout/Layout';
import Column from './components/Column/Column';

import './App.css';

const ENTER = 13;

class App extends Component {
  state = {
    columns: [
      {id: 1, color: '#fff', width: '100', active: false },
    ]
  }

  keyDownHandler = (e, id) => {
    const key = e.keyCode;
    const color = e.target.value;

    if (key === ENTER) {
      this.changeColumnColor(color, id);
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

  addColumnHandler = () => {
    const columns_copy = [...this.state.columns];
    const next_id = columns_copy.length + 1;
    const width = columns_copy[0] ? columns_copy[0].width : '100';

    columns_copy.push({
      id: next_id,
      color: '#fff',
      width: width
    });

    columns_copy.map(col => {
      col.width = 100 / columns_copy.length
    });

    this.setState({
      columns: columns_copy
    });
  }

  removeColumnHandler = (index) => {
    const columns_copy = [...this.state.columns];

    columns_copy.splice(index, 1);

    columns_copy.map(col => {
      col.width = 100 / columns_copy.length
    });

    this.setState({
      columns: columns_copy
    });
  }

  touchHandler = (index) => {
    const canShow = this.state.columns[index].active;
    const columns_copy = [...this.state.columns];
    
    columns_copy[index].active = !canShow;

    this.setState({
      columns: columns_copy
    });
  }

  render() {
    let columns = null;

    if (this.state.columns) {
      columns = (
        <>
          <Layout
            addColumn={ this.addColumnHandler }
          >
          {
            this.state.columns.map((col, index) => {
              return <Column
                key={ col.id }
                color={ col.color }
                width={ col.width }
                isActive={ col.active }
                click={ () => this.moveColumnHandler(index)}
                touchStart={ () => this.touchHandler(index)}
                touchEnd={ () => this.touchHandler(index)}
                keyDown={(e) => this.keyDownHandler(e, index)}
                removeColumn={() => this.removeColumnHandler(index)}
              />
            })
          }
          </Layout>
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
