import React from 'react';

import classes from './Column.css';

const column = ( props ) => {
  const column_attrs = {
    backgroundColor: props.color,
    width: props.width,
  };

  return (
    <div className={ classes.Column }
      style={column_attrs}>
      <input
        onKeyDown={ props.keyDown }
      />
    </div>
  );
}

export default column;
