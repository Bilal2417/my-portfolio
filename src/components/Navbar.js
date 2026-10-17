'use client';
import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { nav, profile } from '../data';
import { alpha } from '@mui/material/styles';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 10 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={0}
        sx={{
          bgcolor: (t) => (scrolled ? alpha(t.palette.background.default, 0.92) : 'transparent'),
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: (t) =>
            scrolled
              ? t.palette.mode === 'dark'
                ? '0 4px 24px rgba(0,0,0,0.45)'
                : '0 4px 24px rgba(0,0,0,0.07)'
              : 'none',
          borderBottom: (t) =>
            scrolled && t.palette.mode === 'dark' ? `1px solid ${t.palette.divider}` : 'none',
          transition: 'all .3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: 84, justifyContent: 'space-between' }}>
            <Box
              component="a"
              href="#top"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}
            >
              <motion.div
                whileHover={{ rotate: -8, scale: 1.08 }}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 8,
                  background: '#10b05a',
                  color: '#fff',
                  fontWeight: 700,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 20,
                }}
              >
                {profile.firstName[0]}
              </motion.div>
              <Typography sx={{ color: 'primary.main', fontWeight: 500, fontSize: 20 }}>
                {profile.firstName}.dev
              </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4 }}>
              {nav.map((n) => (
                <Box
                  key={n.href}
                  component="a"
                  href={n.href}
                  sx={{
                    position: 'relative',
                    color: 'text.primary',
                    textDecoration: 'none',
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: `var(--font-sans),"Helvetica Neue",Arial,sans-serif`,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 0,
                      bottom: -4,
                      height: 2,
                      width: 0,
                      bgcolor: 'primary.main',
                      transition: 'width .3s ease',
                    },
                    '&:hover': { color: 'primary.main' },
                    '&:hover::after': { width: '100%' },
                  }}
                >
                  {n.label}
                </Box>
              ))}
            </Box>

            <Button
              component="a"
              href={profile.cv}
              download
              variant="outlined"
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
                borderWidth: 2,
                '&:hover': { borderWidth: 2, bgcolor: 'primary.main', color: '#fff' },
              }}
            >
              Download CV
            </Button>

            <IconButton sx={{ display: { md: 'none' } }} onClick={() => setOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
        <motion.div
          style={{ scaleX, transformOrigin: '0 50%', height: 3, background: '#10b05a' }}
        />
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 260, p: 2 }}>
          <IconButton onClick={() => setOpen(false)} sx={{ mb: 1 }} aria-label="close menu">
            <CloseIcon />
          </IconButton>
          <List>
            {nav.map((n) => (
              <ListItemButton key={n.href} component="a" href={n.href} onClick={() => setOpen(false)}>
                <ListItemText sx={{
                  fontFamily: `var(--font-sans),"Helvetica Neue",Arial,sans-serif`,
                }} primary={n.label} />
              </ListItemButton>
            ))}
          </List>
          <Button
            component="a"
            href={profile.cv}
            download
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
          >
            Download CV
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
