import React from 'react'
import './AnimatedHeader.css';

const AnimatedChar = (c, index) => {
  return <span key={index} className={c === ' ' && "space"}>{c}</span>
}

const AnimatedHeader = (props) => {
  const { header, secondColorHeader } = props;
  return (
    <h1 className="header animated-char">
      {header && <span>
        {[...header].map((c, index) => AnimatedChar(c, index))}
        </span>
      }
      {secondColorHeader && <span className="different-color">
        {[...secondColorHeader].map((c, index) => AnimatedChar(c, index))}
      </span>
      }
    </h1>
  )
}

export default AnimatedHeader
