import React from 'react';
import ReactDOM from 'react-dom/client';
import { appTheme } from './styles/theme.ts';
import { ThemeProvider } from '@emotion/react';
import { Box, CssBaseline } from '@mui/material';
import AppRouter from './router/router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Box>
    <React.StrictMode>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <AppRouter />
      </ThemeProvider>
    </React.StrictMode>
  </Box>
);
