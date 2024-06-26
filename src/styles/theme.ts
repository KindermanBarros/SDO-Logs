import { createTheme, responsiveFontSizes } from '@mui/material';
import ConectionIII from './Fonts/ConnectionIii-Rj3W.otf';

let appTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [
            {
              fontFamily: 'Conection III',
              fontStyle: 'normal',
              fontWeight: '400',
              src: `url(${ConectionIII}) format('opentype')`,
            },
          ],
          'html, body, #root': {
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            letterSpacing: '0.1rem',
            width: '100vw',
            height: '100vh',
            overflowWrap: 'break-word',
            padding: '1.25rem',
            gap: '1rem',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: 'Conection III, Roboto, Arial',
  },
  palette: {
    primary: {
      main: '#1976d2',
      light: '#63a4ff',
      dark: '#004ba0',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
    },
    common: {
      white: '#ffffff',
      black: '#000000',
    },
    warning: {
      main: '#ff9800',
      light: '#ffc947',
      dark: '#c66900',
    },
    success: {
      main: '#4caf50',
      light: '#80e27e',
      dark: '#087f23',
    },
    error: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
    },
    info: {
      main: '#2196f3',
      light: '#64b5f6',
      dark: '#1769aa',
    },
    background: {
      default: '#121212',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.85)',
    },
    action: {
      active: '#f50057',
      hover: 'rgba(245, 0, 87, 0.08)',
      selected: 'rgba(245, 0, 87, 0.16)',
    },
  },
});

const theme = responsiveFontSizes(appTheme);

export default theme;
