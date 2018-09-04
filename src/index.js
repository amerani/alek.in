import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import pkg from "./package.alias.json";
import { Photo } from "./components/Photo";
import { Intro } from "./components/Intro";
import { Bio } from "./components/Bio";
import { Contact } from "./components/Contact";

const App = () => (
  <React.Fragment>
    <div className="App">
      <Photo />
      <Intro /><br/>
      <Bio /><br/><br/><br/>
      <Contact /><br/><br/>
      <footer id="footer">
        <p>version {pkg.version}</p>
        <p>{new Date().toUTCString()}</p>
      </footer>
    </div>
  </React.Fragment>
);

ReactDOM.render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
