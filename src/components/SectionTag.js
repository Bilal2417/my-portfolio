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
        fontSize: 13,
        color: 'primary.main',
        border: '1px solid',
        borderColor: 'primary.main',
        borderRadius: 10,
        bgcolor: 'primary.light',
      }}
    >
      {children}
    </Box>
  );
}
