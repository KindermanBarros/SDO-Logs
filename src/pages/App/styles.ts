import { Box, styled } from '@mui/material';

export const AppContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
  margin: 'auto',
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
}));
