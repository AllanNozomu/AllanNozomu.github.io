import React from 'react'
import './FixedFooter.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FixedFooter = (props) => {
  const {lastTimeUpdate} = props

  return (
    <footer className="App-footer">
      <p>
        {`Created with `}
        <FontAwesomeIcon icon="heart" className="heart animated-char" /> 
        {` by `} 
        <a href="https://github.com/allannozomu/my-site" target="#">allannozomu</a>
        {` | Last update on ${lastTimeUpdate}`}
      </p>
    </footer>
  )
}

export default FixedFooter