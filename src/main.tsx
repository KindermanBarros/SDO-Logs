import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme.ts';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import AppRouter from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
