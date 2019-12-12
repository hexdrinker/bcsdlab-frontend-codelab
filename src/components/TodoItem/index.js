import React from 'react'
import './index.css'
import { MdDone, MdDelete } from 'react-icons/md';
 
export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <div className={`todo-item ${todo.done ? 'done' : 'undone'}`}>
      <div
        className="done-checkbox"
        onClick={() => onToggle(todo.id)}>
        {todo.done && <MdDone />}
      </div> 
      <div className="todo-item-text">{todo.text}</div>
      <div
        className="remove-button"
        onClick={() => onRemove(todo.id)}>
        <MdDelete />
      </div>
    </div>
  )
}
