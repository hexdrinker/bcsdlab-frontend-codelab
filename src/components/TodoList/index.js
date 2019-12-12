import React from 'react'
import './index.css'
import TodoItem from '../TodoItem';

export default function TodoList({ todos, onRemove, onToggle }) {
  return (
    <div className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
          todo={todo}
        />
      ))}
    </div>
  )
}
