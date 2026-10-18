'use client';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import LayersIcon from '@mui/icons-material/Layers';
import TerminalIcon from '@mui/icons-material/Terminal';
import SectionTag from './SectionTag';
import Reveal from './Reveal';
import { DotGrid } from './Dots';
import { skills } from '../data';

const icons = { db: StorageIcon, api: ApiIcon, ui: LayersIcon, node: TerminalIcon };

export default function Skills() {
  return (
    <Box id="skills" component="section" sx={{ position: 'relative', py: { xs: 6, md: 10 } }}>
      <DotGrid sx={{ left: 0, top: 40 }} />
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Reveal>
              <SectionTag>My Skills</SectionTag>
              <Typography variant="h2" sx={{ mb: 2 }}>
                Why Hire Me For Your{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  Next Project?
                </Box>
              </Typography>
              <Typography sx={{ color: 'text.secondary', fontSize: 14, mb: 4, maxWidth: 380 }}>
                I specialise in full-stack JavaScript. My passion is designing APIs, shaping data and building
                interfaces that solve real problems.
              </Typography>
              <Button component="a" href="#contact" variant="contained">
                Hire Me
              </Button>
            </Reveal>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={3}>
              {skills.map((s, i) => {
                const Icon = icons[s.icon];
                return (
                  <Grid key={s.title} size={{ xs: 12, sm: 6 }} sx={{ mt: { sm: i % 2 ? 6 : 0 } }}>
                    <Reveal delay={i * 0.1}>
                      <motion.div
                        whileHover={{ y: -8 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                      >
                        <Box
                          sx={{
                            p: 3,
                            height: '100%',
                            bgcolor: (theme) =>
                              theme.palette.mode === 'dark' ? '#121713' : '#ffffff',
                            boxShadow: (theme) =>
                              theme.palette.mode === 'dark'
                                ? '0 10px 40px rgba(0,0,0,0.25)'
                                : '0 10px 40px rgba(16,176,90,0.10)',
                            borderRadius: 2, 
                            border: '1px solid transparent',
                            transition: 'border-color .3s, box-shadow .3s',
                            '&:hover': {
                              borderColor: 'primary.main', boxShadow: (theme) =>
                                theme.palette.mode === 'dark'
                                  ? '0 16px 50px rgba(16,176,90,0.15)'
                                  : '0 16px 50px rgba(16,176,90,0.22)',
                            },
                          }}
                        >
                          <Icon sx={{ color: 'primary.main', mb: 1.5 }} />
                          <Typography variant="h3" sx={{ mb: 0.8 }}>
                            {s.title}
                          </Typography>
                          <Typography sx={{ color: 'text.secondary', fontSize: 12.5 }}>{s.text}</Typography>
                        </Box>
                      </motion.div>
                    </Reveal>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
