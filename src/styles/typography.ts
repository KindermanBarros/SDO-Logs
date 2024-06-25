import { createTheme } from '@mui/material/styles';
import Connection3 from './Fonts/ConnectionIii-Rj3W.otf';

// Extend your existing theme configuration
const typography = createTheme({
  typography: {
    fontFamily: ['"Connection3"', 'Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '2.25rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    // Continue with your existing styles
  },
  // Define @font-face to include the custom font
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Connection3';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Connection3'), url(${Connection3}) format('opentype');
        }
      `,
    },
  },
});

export default typography;
