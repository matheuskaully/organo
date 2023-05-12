import React from "react";
import './style.css'

interface ButtonProps {
  children: any
}

export function Button(props:ButtonProps) {
  return (
    <button className="button-style">
      {props.children}
    </button>
  )
}