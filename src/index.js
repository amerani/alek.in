import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => (
  <div className="App">
    <p>Under Construction! Please check back later...</p>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
