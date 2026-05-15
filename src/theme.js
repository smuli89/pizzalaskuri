import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff6f61', // Custom primary color
    },
    secondary: {
      main: '#6b5b95', // Custom secondary color
    },
  },
  typography: {
    fontFamily: 'Comic Sans MS, Arial, sans-serif', // Adding a playful font
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
  },
});

export default theme;