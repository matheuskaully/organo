import React from 'react'
import './style.css'

interface SquadProps {
  squadName: string
  primaryColor: string
  secondColor: string
}

export function Squad({squadName, primaryColor, secondColor}: SquadProps) {
  return (
    <section 
      className="squad"
      style={{ backgroundColor: secondColor }}
    >
      <h3 
        style={{ borderColor: primaryColor }}
      >
        {squadName}
      </h3>
    </section>
  )
}