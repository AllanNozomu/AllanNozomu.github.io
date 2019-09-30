import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import { AnimatedHeader } from './components'

library.add(fab, faHeart)

function App() {
  return (
    <div className="App">

      <div className="content">
        <AnimatedHeader header={"Hi, I'm "} secondColorHeader={"Allan Nozomu"} />
        <div className="App-body">
          <h3 className="SubHeader">I'm a full-stack developer</h3>
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
