'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionTag from './SectionTag';
import Reveal from './Reveal';
import { DotGrid } from './Dots';
import { reviews } from '../data';

export default function Reviews() {
  const track = useRef(null);
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });

  return (
    <Box id="reviews" component="section" sx={{ position: 'relative', py: { xs: 6, md: 10 } }}>
      <DotGrid sx={{ right: 0, top: 20 }} />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 3 }}>
          <Reveal>
            <SectionTag>Reviews</SectionTag>
            <Typography variant="h2">
              Our Customer Say{' '}
              <Box component="span" sx={{ color: 'primary.main' }}>
                Something About Me
              </Box>
            </Typography>
          </Reveal>
          <Box>
            <IconButton onClick={() => scroll(-1)} aria-label="previous">
              <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={() => scroll(1)} aria-label="next" sx={{ color: 'primary.main' }}>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>

        <Box
          ref={track}
          className="hide-scroll"
          sx={{ display: 'flex', gap: 3, overflowX: 'auto', scrollSnapType: 'x mandatory', py: 2, px: 0.5 }}
        >
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.1} style={{ scrollSnapAlign: 'start', flex: '0 0 auto' }}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                <Box
                  sx={{
                    width: 320,
                    p: 3,
                    bgcolor: '#fff',
                    borderRadius: 2,
                    boxShadow: '0 10px 36px rgba(0,0,0,0.08)',
                    height: '100%',
                  }}
                >
                  <Rating value={5} readOnly size="small" sx={{ color: '#ef6a5b', mb: 1.5 }} />
                  <Typography sx={{ color: 'text.secondary', fontSize: 13, mb: 2.5, minHeight: 78 }}>
                    {r.text}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar sx={{ bgcolor: 'primary.main', width: 34, height: 34, fontSize: 15 }}>{r.name[0]}</Avatar>
                    <Box>
                      <Typography sx={{ fontSize: 13, fontWeight: 600 }}>{r.name}</Typography>
                      <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>{r.role}</Typography>
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            </Reveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
