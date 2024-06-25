import { createTheme } from '@mui/material';
import Connection3 from './Fonts/ConnectionIii-Rj3W.otf';

export const appTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: 'Connection3, Roboto, Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
  @font-face {
    font-family: 'Connection3';
    src: url(${Connection3}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }
  html, body, #root {
    box-sizing: border-box;
    background-color: '#121212';
    color: '#e0e0e0';
    display: flex;
    justify-content: center;
    align-content: center;
    minWidth: '100vw';
    letter-spacing: 0.1rem;
    overflow-wrap: break-word;
    padding: 20px;
  }
  body, button, input, textarea, select {
    font-family: 'Connection3', Roboto, Arial, sans-serif;
  }
`,
    },
  },
});
