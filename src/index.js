import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import pkg from "./package.alias.json";
import { Photo } from "./Photo";
import { Intro } from "./Intro";
import { Bio } from "./Bio";

const App = () => (
  <React.Fragment>
    <div className="App">
      <Photo />
      <Intro /><br/>
      <Bio />
    </div>
    <footer id="footer">v{pkg.version}</footer>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
