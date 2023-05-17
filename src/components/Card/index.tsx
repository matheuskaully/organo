import React from "react"
import "./style.css"

interface CardProps {
  name: string
  office: string
  image: string
  bgcolor: string
}

export function Card({name, office, image, bgcolor}: CardProps) {
  return (
    <div className="player">
      <div className="header" style={{ backgroundColor: bgcolor }}>
        <img src={image} alt={name} style={{ borderBottomColor: bgcolor }} />
      </div>
      <div className="footers">
        <h4>{name}</h4>
        <h5>{office}</h5>
      </div>
    </div>
  )
}