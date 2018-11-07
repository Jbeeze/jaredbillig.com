import React from 'react';

import classes from './Button.css'

const button = ( props ) => {
  let classNames = [classes.Button];

  if (props.children === "-") {
    classNames.push(classes.Remove);
  }

  return (
    <button className={ classNames.join('') } onClick={ props.click }>
      { props.children }
    </button>
  )
}

export default button;
