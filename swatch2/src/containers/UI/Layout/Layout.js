import React from 'react';

import Button from '../../UI/Button/Button';

const layout = ( props ) => {
  return (
    <div>
      <Button clicked={ props.clicked } />
      { props.children }
    </div>
  )
}

export default layout;
