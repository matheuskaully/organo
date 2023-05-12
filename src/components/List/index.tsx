import React from "react"
import './style.css'

interface ListProps {
  label: string
  items: string[]
  required: boolean
}

export function List({label, items, required}: ListProps) {
  return (
    <div className="list">
      <label>{label}</label>
      <select required={required}>
        {items.map(item => {
          return (
            <option 
              key={item}
            >
              {item}
            </option>
          )
        })}
      </select>
    </div>
  )
}