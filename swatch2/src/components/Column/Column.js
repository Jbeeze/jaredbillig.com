import React from 'react';

import Button from '../UI/Button/Button';

import classes from './Column.css';

const column = ( props ) => {
  const column_attrs = {
    backgroundColor: props.color,
    width: (props.width + '%'),
  };

  const classNames = [classes.Column];

  if (props.isActive) {
    classNames.push(classes.Active);
  }

  return (
    <div
      className={ classNames.join(' ') }
      onTouchStart={ props.touchStart }
      onTouchEnd={ props.touchEnd }
      onMouseUp={ props.touchEnd }
      onMouseDown={ props.touchStart }
      style={column_attrs}
    >

      <input
        onKeyDown={ props.keyDown }
      />

      <Button
        click={ props.removeColumn }
        btnType="Remove">
        Remove
      </Button>
    </div>
  );
}

export default column;
