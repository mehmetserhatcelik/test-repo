import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoForm() {
  const [text, setText] = useState('');
  const { addTodo } = useTodo();
  const inputRef = useRef(null);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      addTodo(trimmedText);
      setText('');
      inputRef.current?.focus();
    }
  }, [text, addTodo]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && e.ctrlKey) {
        handleSubmit(e);
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleSubmit]);

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="todo-input"
        autoFocus
      />
      <button 
        type="submit" 
        className="btn btn-primary"
        style={{ width: '100%' }}
        disabled={!text.trim()}
      >
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm; 