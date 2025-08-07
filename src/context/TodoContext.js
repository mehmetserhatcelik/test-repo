import React, { createContext, useContext, useReducer, useCallback } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
  loading: false,
  error: null
};

function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      state.todos.push(action.payload);
      return { ...state };
      
    case 'TOGGLE_TODO':
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      return { ...state };
      
    case 'DELETE_TODO':
      const index = state.todos.findIndex(t => t.id === action.payload);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
      return { ...state };
      
    case 'UPDATE_TODO':
      const todoToUpdate = state.todos.find(t => t.id === action.payload.id);
      if (todoToUpdate) {
        Object.assign(todoToUpdate, action.payload);
      }
      return { ...state };
      
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
      
    case 'SET_ERROR':
      return { ...state, error: action.payload };
      
    default:
      return state;
  }
}

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = useCallback((text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  }, []);

  const toggleTodo = useCallback((id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }, []);

  const deleteTodo = useCallback((id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  }, []);

  const updateTodo = useCallback((id, updates) => {
    dispatch({ type: 'UPDATE_TODO', payload: { id, ...updates } });
  }, []);

  const value = {
    todos: state.todos,
    loading: state.loading,
    error: state.error,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo
  };

  return (
    <TodoContext.Provider value={value}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodo must be used within a TodoProvider');
  }
  return context;
} 