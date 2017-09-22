console.log('in client.js');

// import React from 'react';
// import ReactDOM from 'react-dom';

const instructions = React.createElement(
  'h3',
  {id:'instructions', className: 'header'},
  'enter calculation data here'
);

ReactDOM.render(
  instructions, // first argment
  document.getElementById('react-container'),
);
