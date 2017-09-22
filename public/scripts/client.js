console.log('in client.js');

// import React from 'react';
// import ReactDOM from 'react-dom';
//
// class MyComponentClass extends React.Component {
//   render() {
//     return <h1>Hello world</h1>;
//   }
// };

const title = React.createElement(
  'h3',
  {id:'title', className: 'header'},
  'enter calculation data here'
);

ReactDOM.render(
  title, // first argment
  document.getElementById('react-container'),
)

// ReactDOM.render(
//   <MyComponentClass />,
//   document.getElementById('server') // app
// );
// ReactDOM.render(<h1>Hello world</h1>, document.getElementById('server'));
