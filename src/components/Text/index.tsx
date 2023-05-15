import React from 'react'
import './style.css'

interface TextProps {
  label: string
  placeholder: string
  required?: boolean
  inputValue: string
  handleChange: Function
}

export function Text({label, placeholder, required, inputValue, handleChange}: TextProps) {
  function handleType(event: any) {
    handleChange(event.target.value)
  }

  return (
    <div className="text-label">
      <label>{label}</label>
      <input
        value={inputValue}
        onChange={handleType}
        required={required} 
        type="text" 
        placeholder={placeholder} 
      />
    </div>
  )
}