import { Box, styled, Typography } from '@mui/material';
import ConnectionIII from '../../styles/Fonts/ConnectionIii-Rj3W.otf';

export const VerticalContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
  fontFamily: ConnectionIII,
}));

export const ImageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  backgroundColor: theme.palette.background.default,
}));

export const EmbededImage = styled('img')(({}) => ({
  width: '40rem',
  height: 'auto',
  maxWidth: '100%',
  display: 'block',
  margin: 'auto',
}));

export const Secret = styled(Typography)(({ theme }) => ({
  color: theme.palette.background.default,
}));
