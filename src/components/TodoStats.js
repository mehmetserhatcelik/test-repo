import React, { useMemo, useEffect } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoStats() {
  const { todos } = useTodo();

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

    return {
      total,
      completed,
      active,
      completionRate
    };
  }, [todos]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      try {
        localStorage.setItem('todoStats', JSON.stringify(stats));
      } catch (error) {
        console.error('Failed to save stats:', error);
      }
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [stats]);

  return (
    <div className="stats">
      <h3>Statistics</h3>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px' }}>
        <div>
          <strong>Total:</strong> {stats.total}
        </div>
        <div>
          <strong>Active:</strong> {stats.active}
        </div>
        <div>
          <strong>Completed:</strong> {stats.completed}
        </div>
        <div>
          <strong>Completion Rate:</strong> {stats.completionRate}%
        </div>
      </div>
      
      <div style={{ marginTop: '10px' }}>
        <div style={{ 
          width: '100%', 
          height: '20px', 
          backgroundColor: '#e0e0e0', 
          borderRadius: '10px',
          overflow: 'hidden'
        }}>
          <div style={{
            width: `${stats.completionRate}%`,
            height: '100%',
            backgroundColor: '#28a745',
            transition: 'width 0.3s ease'
          }} />
        </div>
      </div>
    </div>
  );
}

export default TodoStats; 