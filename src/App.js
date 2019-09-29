import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.css';

library.add(fab, faHeart)

function App() {
  return (
    <div className="App">

      <div className="content">
        <h1 className="Header">Hi, I'm <span className="Header-red">Allan Nozomu</span></h1>
        <h3 className="SubHeader">I'm a full-stack developer</h3>
        <div className="App-body">
          <a href="https://linkedin.com/in/allan-nozomu/" target="#">
            <FontAwesomeIcon  className="footer-item" icon={['fab', 'linkedin']} />
          </a>
          <a href="https://github.com/allannozomu" target="#">
            <FontAwesomeIcon  className="footer-item" icon={['fab', 'github']} />
          </a>
        </div>
      </div>
      <footer className="App-footer">
        <p>Created with <FontAwesomeIcon icon="heart" color="#EB5252" /> by <a href="https://github.com/allannozomu/my-site" target="#">allannozomu</a></p>
      </footer>
    </div>
  );
}

export default App;
