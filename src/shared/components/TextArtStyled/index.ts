import styled from '@emotion/styled';
import theme from '../../../styles/theme.ts';

export const TextArtStyled = styled('pre')(() => ({
  fontFamily: 'monospace',
  fontSize: '0.5rem',
  lineHeight: 1,
  overflow: 'auto',
  padding: '1rem',
  whiteSpace: 'pre',
  color: theme.palette.text.primary,
  [theme.breakpoints.up('sm')]: {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '0.9rem',
  },
  [theme.breakpoints.up('lg')]: {
    fontSize: '1.25rem',
  },
  [theme.breakpoints.up('xl')]: {
    fontSize: '1.5rem',
  },
}));
