import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import { Routes as appRoutes } from './routes';
import TodoProvider from './context/todoContext';
import ThemeProvider from './context/themeContext';
import ThemeWrapper from './components/ThemeWrapper';

function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <ThemeWrapper>
          <main className='App'>
            <Router>
              <Routes>
                {
                  appRoutes.map((route) => (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={ <route.component /> }
                    />
                  ))
                }
              </Routes>
            </Router>
          </main>
        </ThemeWrapper>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
