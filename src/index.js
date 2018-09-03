import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import pkg from "./package.alias.json";

const App = () => (
  <React.Fragment>
    <div className="App">
      <p>Under Construction! Please check back later...</p>
    </div>
    <footer id="footer">v{pkg.version}</footer>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
