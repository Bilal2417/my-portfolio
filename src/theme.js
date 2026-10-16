'use client';
import { createTheme } from '@mui/material/styles';

export const GREEN = '#10b05a';
export const GREEN_DARK = '#0c8f48';
export const GREEN_LIGHT = '#e7f7ee';
export const INK = '#111111';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: GREEN, dark: GREEN_DARK, light: GREEN_LIGHT, contrastText: '#fff' },
    text: { primary: INK, secondary: '#555' },
    background: { default: '#ffffff', paper: '#ffffff' },
  },
  shape: { borderRadius: 6 },
  typography: {
    fontFamily: '"Poppins", "Helvetica Neue", Arial, sans-serif',
    h1: { fontWeight: 600, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.2 },
    h2: { fontWeight: 600, fontSize: 'clamp(1.7rem, 3.4vw, 2.3rem)', lineHeight: 1.25 },
    h3: { fontWeight: 600, fontSize: '1.1rem' },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: { padding: '10px 26px', boxShadow: 'none', '&:hover': { boxShadow: 'none' } },
      },
    },
  },
});

export default theme;
