import React from 'react'
import './style.css'

interface TextProps {
  label: string
  placeholder: string
}

export function Text({label, placeholder}: TextProps) {
  return (
    <div className="text-label">
      <label htmlFor="">{label}</label>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}