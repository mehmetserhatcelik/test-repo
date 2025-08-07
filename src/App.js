import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import TodoStats from './components/TodoStats';
import { TodoProvider } from './context/TodoContext';
import './App.css';

function App() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    const handleSearch = () => {
      console.log('Search term:', searchTerm);
    };
    
    const timeoutId = setTimeout(handleSearch, 100);
    
    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <TodoProvider>
      <div className="container">
        <div className="todo-app">
          <h1>Todo App</h1>
          
          <div style={{ marginBottom: '20px' }}>
            <input
              type="text"
              placeholder="Search todos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
            />
            
            <div style={{ display: 'flex', gap: '10px' }}>
              <button 
                className={`btn ${filter === 'all' ? 'btn-primary' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`btn ${filter === 'active' ? 'btn-primary' : ''}`}
                onClick={() => setFilter('active')}
              >
                Active
              </button>
              <button 
                className={`btn ${filter === 'completed' ? 'btn-primary' : ''}`}
                onClick={() => setFilter('completed')}
              >
                Completed
              </button>
            </div>
          </div>

          <TodoForm />
          <TodoList filter={filter} searchTerm={searchTerm} />
          <TodoStats />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App; 