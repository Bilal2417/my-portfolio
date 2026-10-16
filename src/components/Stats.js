'use client';
import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'framer-motion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Reveal from './Reveal';
import { stats } from '../data';

function Counter({ to, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.8,
      ease: 'easeOut',
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <Grid container>
          {stats.map((s, i) => (
            <Grid
              key={s.label}
              size={{ xs: 12, sm: 4 }}
              sx={{
                borderLeft: { sm: i ? '1px solid #ddd' : 'none' },
                pl: { sm: i ? 6 : 0 },
                mb: { xs: 3, sm: 0 },
              }}
            >
              <Reveal delay={i * 0.12}>
                <Typography sx={{ color: 'primary.main', fontSize: { xs: 36, md: 44 }, fontWeight: 600, lineHeight: 1.2 }}>
                  <Counter to={s.value} suffix={s.suffix} />
                </Typography>
                <Typography sx={{ fontSize: 18 }}>{s.label}</Typography>
              </Reveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
