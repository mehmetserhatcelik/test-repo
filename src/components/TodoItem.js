import React, { useState, useCallback, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { toggleTodo, deleteTodo, updateTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = useCallback(() => {
    if (editText.trim() && editText !== todo.text) {
      updateTodo(todo.id, { text: editText.trim() });
    }
    setIsEditing(false);
  }, [editText, todo.text, todo.id, updateTodo]);

  const handleToggle = useCallback(() => {
    if (todo && todo.id) {
      toggleTodo(todo.id);
    }
  }, [todo, toggleTodo]);

  const handleDelete = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (todo && todo.id) {
      deleteTodo(todo.id);
    }
  }, [todo, deleteTodo]);

  useEffect(() => {
    if (isEditing && todo) {
      setEditText(todo.text);
    }
  }, [isEditing, todo?.text]);

  const handleKeyPress = useCallback((e) => {
    if (e.key === 'Enter') {
      handleEdit();
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  }, [handleEdit, todo.text]);

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggle}
        style={{ marginRight: '10px' }}
      />
      
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={handleEdit}
          onKeyDown={handleKeyPress}
          autoFocus
          style={{ flex: 1, marginRight: '10px' }}
        />
      ) : (
        <span 
          style={{ flex: 1, cursor: 'pointer' }}
          onDoubleClick={() => setIsEditing(true)}
        >
          {todo.text}
        </span>
      )}
      
      <div className="todo-actions">
        <button
          className="btn btn-success"
          onClick={() => setIsEditing(!isEditing)}
          style={{ marginRight: '5px' }}
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem; 