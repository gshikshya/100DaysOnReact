// Without using JSX

import React from 'react';

function Hello1() {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      { id: 'JSX', className: 'Class' },
      'Without Using JSX',
    ),
  );
}

export default Hello1;
