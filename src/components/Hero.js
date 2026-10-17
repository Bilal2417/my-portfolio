'use client';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import SectionTag from './SectionTag';
import { FloatingDots, DotGrid } from './Dots';
import { profile } from '../data';

const fade = (delay) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const socials = [
    { Icon: GitHubIcon, href: profile.socials.github, label: 'GitHub' },
    // { Icon: InstagramIcon, href: profile.socials.instagram, label: 'Instagram' },
    { Icon: LinkedInIcon, href: profile.socials.linkedin, label: 'LinkedIn' },
  ];

  return (
    <Box id="top" component="section" sx={{ position: 'relative', pt: { xs: 14, md: 18 }, pb: { xs: 8, md: 12 } }}>
      <FloatingDots />
      <DotGrid sx={{ right: 0, bottom: 0 }} />
      <Container maxWidth="lg" id="about" sx={{ position: 'relative' }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div {...fade(0.05)}>
              <SectionTag>Welcome</SectionTag>
            </motion.div>
            <motion.div {...fade(0.15)}>
              <Typography variant="h1" sx={{ mb: 2 }}>
                I build scalable{' '}
                <Box component="span" sx={{ color: 'primary.main' }}>
                  MERN Stack
                </Box>{' '}
                web apps
              </Typography>
            </motion.div>
            <motion.div {...fade(0.28)}>
              <Typography sx={{ color: 'text.secondary', fontSize: 14, maxWidth: 440, mb: 4 }}>
                {profile.intro}
              </Typography>
            </motion.div>
            <motion.div {...fade(0.4)}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, flexWrap: 'wrap' }}>
                <Button component="a" href="#contact" variant="contained">
                  Contact Me
                </Button>
                <Button
                  component="a"
                  href="#portfolio"
                  color="inherit"
                  endIcon={<ArrowOutwardIcon sx={{ fontSize: 16 }} />}
                  sx={{ '&:hover': { color: 'primary.main', bgcolor: 'transparent' } }}
                >
                  View Portfolio
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ position: 'relative', width: { xs: 290, sm: 330 }, height: { xs: 340, sm: 390 }, mr: { md: 6 } }}>
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{
                  position: 'absolute',
                  inset: '30px -28px -30px 28px',
                  border: '3px solid',
                  borderColor : "background.default"
                }}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ position: 'absolute', inset: 0, background: '#10b05a', overflow: 'hidden' }}
              >
                <motion.img
                  src="/profile.png"
                  alt={profile.name}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }}
                />
              </motion.div>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', lg: 'flex' },
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1.5,
                position: 'absolute',
                right: 0,
                top: 120,
              }}
            >
              <Typography
                sx={{
                  writingMode: 'vertical-rl',
                  color: 'primary.main',
                  fontSize: 13,
                  letterSpacing: 1,
                }}
              >
                Follow me on:
              </Typography>
              <Box sx={{ width: 1, height: 50, bgcolor: '#ddd' }} />
              {socials.map(({ Icon, href, label }) => (
                <IconButton
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  size="small"
                  sx={{
                    bgcolor: 'primary.main',
                    color: '#fff',
                    borderRadius: 1,
                    width: 26,
                    height: 26,
                    transition: 'transform .25s',
                    '&:hover': { bgcolor: 'primary.dark', transform: 'translateY(-3px) scale(1.1)' },
                  }}
                >
                  <Icon sx={{ fontSize: 16 }} />
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
