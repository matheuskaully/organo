import React from 'react'
import './style.css'

interface TextProps {
  label: string
  placeholder: string
  required?: boolean
}

export function Text({label, placeholder, required}: TextProps) {
  return (
    <div className="text-label">
      <label htmlFor="">{label}</label>
      <input 
        required={required} 
        type="text" 
        placeholder={placeholder} 
      />
    </div>
  )
}