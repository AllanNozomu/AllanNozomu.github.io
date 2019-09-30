import React from 'react'
import './AnimatedHeader.css';

const AnimatedChar = (c, index, cls) => {
  return (
    <span key={index} className={c === ' ' ? "space" : "animated-char " + cls}>
      {c}
    </span>
  )
}

const AnimatedHeader = (props) => {
  const { header, secondColorHeader } = props;
  return (
    <h1 className="animated-header">
      {header && 
        [...header].map((c, index) => AnimatedChar(c, index))
      }
      {secondColorHeader && 
        [...secondColorHeader].map((c, index) => AnimatedChar(c, index, "different-color"))
      }
    </h1>
  )
}

export default AnimatedHeader
