import React from "react"
import './style.css'

interface ListProps {
  label: string
  items: string[]
}

export function List({label, items}: ListProps) {
  return (
    <div>
      <label>{label}</label>
      <select name="" id="">
        {items.map(item => {
          return (
            <option value="">{item}</option>
          )
        })}
      </select>
    </div>
  )
}