import React, { useState } from 'react';
import './App.css';
import TodoContainer from './components/TodoContainer';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoInputForm from './components/TodoInputForm';

function App() {
  const [todos, setTodos] = useState([]);
  const unDoneTodos = todos.filter(todo => !todo.done).length;
  const onCreate = text => {
    if (text === '') {
      alert("할 일을 입력해주세요");
      return;
    }
    setTodos(todos.concat({
      id: todos.length + 1,
      text,
      done: false
    }))
  }

  const onToggle = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, done: !todo.done } : todo));
  }
  
  const onRemove = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <TodoContainer>
        <TodoHead unDoneTodos={unDoneTodos} />
        <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
        <TodoInputForm onCreate={onCreate} />
      </TodoContainer>
    </div>
  );
}

export default App;
