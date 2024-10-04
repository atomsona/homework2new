import React from 'react'
import './Card.css'

export default function Card({name, age}) {
  return (
    <div className="card">
      <h2 className="card-title">Name: {name} </h2>
      <p className="card-age">Age: {age} </p>
      <p className="card-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, asperiores!</p>
    </div>
  )
}
