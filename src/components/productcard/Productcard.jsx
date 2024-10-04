import React from 'react'
import './ProductCard.css';
export default function Productcard({ name, price, quantity, description, color }) {
  return (
    <div className="product-card" style={{ backgroundColor: color }}>
    <img src={"https://cdn.trendhunterstatic.com/thumbs/highperformance-gaming-laptop.jpeg?auto=webp"} alt={name} className="product-image" />
    <h2>{name}</h2>
    <p>Price: ${price}</p>
    <p>Quantity: {quantity}</p>
    <p>{description}</p>
  </div>
  )
}
