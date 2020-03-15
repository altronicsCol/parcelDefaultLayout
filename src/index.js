import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
  module.hot.accept()
}

const App = (props) => {
  return(
  <div>
    <h1>React Default Layout</h1>
  </div>
  )
}

var rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)