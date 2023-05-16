import React from 'react'
import { Card } from '../Card'
import './style.css'

interface SquadProps {
  squadName: string
  primaryColor: string
  secondColor: string
  players: [
    {
      name: string
      office: string
      image: string
      squad: string
    }
  ]
}

export function Squad({squadName, primaryColor, secondColor, players}: SquadProps) {
  return (
    players.length > 0 && 
    <section 
      className="squad"
      style={{ backgroundColor: secondColor }}
    >
      <h3 
        style={{ borderColor: primaryColor }}
      >
        {squadName}
      </h3>
      <div className="players">
        {players.map(player => {
          return (
            <Card 
              key={player.name}
              name={player.name}
              office={player.office}
              image={player.image}
              squad={player.squad}
            />
          )
        })}
      </div>   
    </section>
  )
}