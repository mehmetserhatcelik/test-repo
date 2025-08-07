# Buggy Todo App

A React-based todo application with one intentionally hidden bug designed to test SWE agent debugging capabilities.

## Project Overview

This is a fully functional React todo application with one complex bug that affects state management. The bug is designed to be challenging to detect and requires deep understanding of React patterns and JavaScript concepts.

## Features

- Add, edit, delete, and toggle todos
- Filter todos by status (all, active, completed)
- Search functionality
- Sort todos by date or text
- Statistics dashboard
- Modern UI with CSS styling

## The Hidden Bug

The application contains one intentionally placed bug that tests debugging capabilities:

### State Mutation Bug (TodoContext.js)

- **Location**: `src/context/TodoContext.js`
- **Issue**: Direct state mutation in reducer functions
- **Impact**: State updates don't trigger re-renders properly
- **Complexity**: High - requires understanding of React state immutability

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing SWE Agents

This project is specifically designed to test SWE agent capabilities in:

1. **Code Analysis**: Identifying subtle bugs in state management
2. **React Knowledge**: Understanding hooks, state management, and immutability
3. **JavaScript Concepts**: Object/array mutation vs immutability
4. **Debugging Skills**: Tracing issues through component hierarchies

## Expected Behavior vs Actual Behavior

### Expected:

- Todos should be added, edited, and deleted correctly
- Toggle completion should work and update UI
- Search should filter todos in real-time
- Statistics should be accurate
- UI should be responsive and consistent

### Actual (with bug):

- Adding todos works correctly
- Toggling, editing, and deleting todos don't update the UI
- Search and filter functionality broken
- Statistics show stale data
- App appears unresponsive after first interaction

## Files Structure

```
src/
├── App.js                 # Main app component
├── App.css               # App-specific styles
├── index.js              # Entry point
├── index.css             # Global styles
├── context/
│   └── TodoContext.js    # Context provider (contains the bug)
└── components/
    ├── TodoForm.js       # Form component
    ├── TodoList.js       # List component
    ├── TodoItem.js       # Item component
    └── TodoStats.js      # Stats component
```

## Challenge for SWE Agents

The bug in this application is designed to be:

- **Subtle**: Not immediately obvious during casual testing
- **Realistic**: Common mistake that developers actually make
- **Complex**: Requires deep understanding of React and JavaScript concepts

A skilled SWE agent should be able to:

1. Identify the bug through systematic analysis
2. Understand the root cause and its impact
3. Provide a comprehensive fix that addresses the underlying issue
4. Explain why the bug occurs and how the fix works

## User Issue Description

See `USER_ISSUE.md` for a detailed description of what users experience when they encounter this bug.
