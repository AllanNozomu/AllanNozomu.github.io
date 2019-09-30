import React from 'react'
import './FixedFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FixedFooter = () => {
  return (
    <footer className="App-footer">
      <p>
        {`Created with `}
        <FontAwesomeIcon icon="heart" className="heart" /> 
        {` by `} 
        <a href="https://github.com/allannozomu/my-site" target="#">allannozomu</a>
      </p>
    </footer>
  )
}

export default FixedFooter