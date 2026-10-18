'use client';
import Box from '@mui/material/Box';

export default function SectionTag({ children }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        px: 1.2,
        py: 0.2,
        mb: 1.5,
        fontSize: 12,
        color: 'primary.main',
        border: '1px solid',
        borderColor: 'primary.main',
        fontWeight : 600,
        fontFamily: 'var(--font-sans), "Helvetica Neue", Arial, sans-serif',
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? '#121713' : '#ffffff',
        boxShadow: (theme) =>
          theme.palette.mode === 'dark'
            ? '0 10px 40px rgba(0,0,0,0.25)'
            : '0 10px 40px rgba(16,176,90,0.10)',
        borderRadius: 10,
        // bgcolor: 'primary.light',
      }}
    >
      {children}
    </Box>
  );
}
