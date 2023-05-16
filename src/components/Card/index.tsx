import React from "react"
import "./style.css"

interface CardProps {
  name: string
  office: string
  squad: string
  image: string
}

export function Card({name, office, squad, image}: CardProps) {
  return (
    <div className="player">
      <div className="header is-animating">
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  )
}