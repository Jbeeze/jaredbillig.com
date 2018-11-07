import React from 'react';

import classes from './Button.css'

const button = ( props ) => {
  return (
    <button
      className={ classes.Button }
      onClick={props.clicked}>+</button>
  )
}

export default button;
