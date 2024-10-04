import React from 'react'
import './Button.css';
export default function Button({ text, backgroundColor, width, height }) {
  return (
    <button style={{ backgroundColor, width, height }}>
    {text}
  </button>
  )
}
