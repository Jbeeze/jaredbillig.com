import React from 'react';

const column = ( props ) => {
  const column_attrs = {
    backgroundColor: props.color
  };

  return (
    <div style={column_attrs}>
      <input
        onSubmit={ props.change_color }
      />
    </div>
  );
}

export default column;
