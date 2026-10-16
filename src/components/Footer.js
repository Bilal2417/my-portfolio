'use client';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { profile } from '../data';

export default function Footer() {
  const socials = [
    { Icon: GitHubIcon, href: profile.socials.github, label: 'GitHub' },
    { Icon: LinkedInIcon, href: profile.socials.linkedin, label: 'LinkedIn' },
    { Icon: InstagramIcon, href: profile.socials.instagram, label: 'Instagram' },
  ];
  return (
    <Box component="footer" sx={{ pb: 4, pt: 6 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderTop: '1px solid #ddd',
            pt: 3,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: 12 }}>© {new Date().getFullYear()}. All Rights Reserved</Typography>
          <Typography sx={{ fontSize: 12 }}>Designed &amp; built by {profile.name}</Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
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
                  width: 28,
                  height: 28,
                  transition: 'transform .25s',
                  '&:hover': { bgcolor: 'primary.dark', transform: 'translateY(-3px)' },
                }}
              >
                <Icon sx={{ fontSize: 15 }} />
              </IconButton>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
