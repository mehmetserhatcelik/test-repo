import React, { useMemo, useState } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';

function TodoList({ filter, searchTerm }) {
  const { todos } = useTodo();
  const [sortBy, setSortBy] = useState('createdAt');

  const filteredTodos = useMemo(() => {
    let result = todos;

    if (searchTerm) {
      result = result.filter(todo => 
        todo.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (filter === 'active') {
      result = result.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      result = result.filter(todo => todo.completed);
    }

    if (sortBy === 'createdAt') {
      result = [...result].sort((a, b) => {
        const dateA = new Date(a.createdAt || 0);
        const dateB = new Date(b.createdAt || 0);
        return dateB - dateA;
      });
    } else if (sortBy === 'text') {
      result = [...result].sort((a, b) => a.text.localeCompare(b.text));
    }

    return result;
  }, [todos, filter, searchTerm, sortBy]);

  return (
    <div>
      <div style={{ marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3>Todo List ({filteredTodos.length})</h3>
        <select 
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
          style={{ padding: '5px' }}
        >
          <option value="createdAt">Sort by Date</option>
          <option value="text">Sort by Text</option>
        </select>
      </div>

      {filteredTodos.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
          {searchTerm ? 'No todos match your search.' : 'No todos yet. Add one above!'}
        </p>
      ) : (
        <div>
          {filteredTodos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList; 