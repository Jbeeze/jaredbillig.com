import React from 'react';

import Column from './Column/Column'

const columns = ( props ) => {
  return (
    props.columns.map(col => {
      return <Column
        key={ col.id }
        color={ col.color }
        width={ col.width }
        keyDown={ props.keyDown }
      />
    })
  )
}

export default columns;
