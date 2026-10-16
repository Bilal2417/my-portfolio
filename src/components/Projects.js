'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SectionTag from './SectionTag';
import Reveal from './Reveal';
import { projects, profile } from '../data';

export default function Projects() {
  const track = useRef(null);
  const scroll = (dir) => track.current?.scrollBy({ left: dir * 340, behavior: 'smooth' });

  return (
    <Box id="portfolio" component="section" sx={{ py: { xs: 6, md: 10 }, overflow: 'hidden' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', gap: 6, flexDirection: { xs: 'column', md: 'row' }, alignItems: { md: 'center' } }}>
          <Box sx={{ flex: '0 0 auto', width: { md: 300 } }}>
            <Reveal>
              <SectionTag>Portfolio</SectionTag>
              <Typography variant="h2" sx={{ mb: 2 }}>
                My Creative Works{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Latest Projects
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 14, mb: 4 }}>
                A selection of full-stack projects I have built and shipped recently.
              </Typography>
              <Button component="a" href={profile.socials.github} target="_blank" rel="noreferrer" variant="contained">
                Show More
              </Button>
            </Reveal>
          </Box>

          <Box sx={{ minWidth: 0, flex: 1 }}>
            <Box
              ref={track}
              className="hide-scroll"
              sx={{ display: 'flex', gap: 3, overflowX: 'auto', scrollSnapType: 'x mandatory', py: 2, px: 0.5 }}
            >
              {projects.map((p, i) => (
                <Reveal
                  key={p.title}
                  delay={i * 0.1}
                  style={{
                    scrollSnapAlign: "start",
                    flex: "0 0 auto",
                  }}
                >
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                    }}
                  >
                    <Box
                      component="a"
                      href={p?.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "block",
                        height: "450px",
                        cursor: "pointer",
                      }}
                    >
                      <Box
                        component="img"
                        src={p?.img}
                        alt={p?.title || "Project preview"}
                        sx={{
                          height: "100%",
                          width: "100%",
                          objectFit: "cover",
                          display: "block",
                          borderRadius: 2,
                        }}
                      />
                    </Box>
                  </motion.div>
                </Reveal>
              ))}
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1, mt: 1 }}>
              <IconButton onClick={() => scroll(-1)} aria-label="previous">
                <ArrowBackIcon />
              </IconButton>
              <IconButton onClick={() => scroll(1)} aria-label="next" sx={{ color: 'primary.main' }}>
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
