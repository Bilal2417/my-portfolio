'use client';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';

const DOTS = [
  { top: '12%', left: '4%', c: '#10b05a', s: 9 },
  { top: '9%', left: '34%', c: '#ff2d2d', s: 8 },
  { top: '20%', left: '20%', c: '#ffd400', s: 9 },
  { top: '30%', left: '43%', c: '#10b05a', s: 10 },
  { top: '50%', left: '12%', c: '#ffd400', s: 9 },
  { top: '66%', left: '9%', c: '#ff2d2d', s: 9 },
  { top: '70%', left: '24%', c: '#10b05a', s: 9 },
  { top: '26%', left: '90%', c: '#ff2d2d', s: 8 },
  { top: '78%', left: '88%', c: '#ffd400', s: 10 },
  { top: '45%', left: '60%', c: '#10b05a', s: 8 },
];

export function FloatingDots() {
  return (
    <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {DOTS.map((d, i) => (
        <motion.span
          key={i}
          style={{
            position: 'absolute',
            top: d.top,
            left: d.left,
            width: d.s,
            height: d.s,
            borderRadius: '50%',
            background: d.c,
          }}
          animate={{ y: [0, -14, 0], x: [0, i % 2 ? 8 : -8, 0], scale: [1, 1.25, 1] }}
          transition={{ duration: 4 + (i % 4), repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}
    </Box>
  );
}

export function DotGrid({ color = '#10b05a', sx }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: 70,
        height: 90,
        pointerEvents: 'none',
        backgroundImage: `radial-gradient(${color} 1.6px, transparent 1.7px)`,
        backgroundSize: '12px 12px',
        opacity: 0.85,
        ...sx,
      }}
    />
  );
}
