import { Box, styled } from '@mui/material';

export const AppContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(4),
}));
