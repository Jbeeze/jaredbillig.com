import React from 'react';

import Button from '../Button/Button';

const layout = ( props ) => {
  return (
    <div>
      <Button
        click={ props.addColumn }>
        Add
      </Button>
      { props.children }
    </div>
  )
}

export default layout;
