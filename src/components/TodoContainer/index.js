import React from 'react'
import './index.css'

export default function TodoContainer({ children }) {
  return (
    <div className="todo-container">
     { children }
    </div>
  )
}
