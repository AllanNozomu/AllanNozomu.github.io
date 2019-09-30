import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { AnimatedHeader, FixedFooter } from './components'

import './App.css';

library.add(fab, faHeart)

function App() {
  return (
    <div className="App">

      <div className="content">
        <AnimatedHeader header={"Hi, I'm "} secondColorHeader={"Allan Nozomu"} />
        <h3 className="SubHeader">I'm a full-stack developer</h3>

        <div className="App-body">
          <a href="https://linkedin.com/in/allan-nozomu/" target="#">
            <FontAwesomeIcon  className="social-item" icon={['fab', 'linkedin']} />
          </a>
          <a href="https://github.com/allannozomu" target="#">
            <FontAwesomeIcon  className="social-item" icon={['fab', 'github']} />
          </a>
        </div>

      </div>
      
      <FixedFooter />
    </div>
  );
}

export default App;
