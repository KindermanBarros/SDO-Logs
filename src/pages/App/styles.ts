import { Box, styled, Typography } from '@mui/material';

export const AppContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  margin: '0 auto',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));

export const Secret = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.default,
}));
