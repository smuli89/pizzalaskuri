import React, { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PizzaCalculator from './PizzaCalculator';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ padding: 16 }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>
        <PizzaCalculator />
      </div>
    </ThemeProvider>
  );
}

export default App;