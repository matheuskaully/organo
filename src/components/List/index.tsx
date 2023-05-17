import React from "react"
import './style.css'

interface ListProps {
  label: string
  items: string[]
  required: boolean
  selectValue: string
  handleChange: Function
}

export function List({label, items, required, selectValue, handleChange}: ListProps) {
  return (
    <div className="list">
      <label>{label}</label>
      <select 
        required={required} 
        value={selectValue}
        onChange={event => handleChange(event.target.value)}
      >
        <option
          value="" 
          disabled
        >
          Selecione uma equipe
        </option>
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