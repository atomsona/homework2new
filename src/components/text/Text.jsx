import React from 'react'
import './Text.css';
export default function text( { text, fontSize, color, textAlign } ) {
  return (
    <h1 style={{ fontSize, color, textAlign }}>
    {text}
  </h1>

  )
}
