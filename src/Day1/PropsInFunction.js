// using props in functional component

import React from 'react';

function PropsInFunction(props) {
  return (
    <div>
      <h1>Hello {props.fname}</h1>

      {/* calling children prop */}
      {props.children}
    </div>
  );
}

export default PropsInFunction;
