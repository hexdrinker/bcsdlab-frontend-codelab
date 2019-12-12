import React, { useState } from 'react'
import './index.css'
import { MdAdd } from 'react-icons/md';

export default function TodoInputForm({ onCreate }) {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onToggle = () => setOpen(!open);

  const onSubmit = e => {
    e.preventDefault();
    onCreate(text);
    setText('');
  }
  const onChange = e => setText(e.target.value);

  return (
    <div className={`todo-input-form ${open ? 'opened' : 'closed'}`}>
      {open && (
        <div className="form-container">
          <form onSubmit={onSubmit}>
            <input
              placeholder="할 일을 입력하고 Enter를 누르세요"
              value={text}
              onChange={onChange}
              autoFocus
            />
          </form>
        </div>
      )}
      <button
        className={`open-button ${open ? 'opened': 'closed'}`}
        onClick={onToggle}
        open={open}>
        <MdAdd />
      </button>
    </div>
  )
}
