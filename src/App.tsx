import React from 'react';
import './App.css';
import TodoProvider from './context/todoContext';
import AddTodo from './components/AddTodo';
import Todos from './containers/Todos';
import ThemeProvider from './context/themeContext';
import ThemeWrapper from './components/ThemeWrapper';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className='App'>
            <h1>My Todos</h1>
            <AddTodo />
            <Todos />
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
