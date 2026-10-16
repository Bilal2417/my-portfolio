'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import PhoneIcon from '@mui/icons-material/PhoneOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import PlaceIcon from '@mui/icons-material/PlaceOutlined';
import SectionTag from './SectionTag';
import Reveal from './Reveal';
import { profile } from '../data';

const info = [
  { Icon: PhoneIcon, label: 'Call me', value: profile.phone },
  { Icon: EmailIcon, label: 'Email me', value: profile.email },
  { Icon: PlaceIcon, label: 'Address', value: profile.address },
];

const empty = { name: '', email: '', phone: '', budget: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(empty);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    // Opens the visitor's mail app. Swap for an API route / Formspree / EmailJS later.
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nBudget: ${form.budget}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      'Portfolio enquiry from ' + form.name
    )}&body=${encodeURIComponent(body)}`;
    setDone(true);
    setForm(empty);
  };

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Reveal style={{ textAlign: 'center', marginBottom: 48 }}>
          <SectionTag>Contact</SectionTag>
          <Typography variant="h2" sx={{ mb: 1 }}>
            Let&apos;s Discuss{' '}
            <Box component="span" sx={{ color: 'primary.main' }}>
              Your Project
            </Box>
          </Typography>
          <Typography sx={{ color: 'text.secondary', fontSize: 13 }}>
            Let&apos;s make something new, different and more meaningful.
          </Typography>
        </Reveal>

        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 4 }}>
            {info.map(({ Icon, label, value }, i) => (
              <Reveal key={label} delay={i * 0.1} x={-30} y={0}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: 8,
                      background: '#10b05a',
                      color: '#fff',
                      display: 'grid',
                      placeItems: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon fontSize="small" />
                  </motion.div>
                  <Box>
                    <Typography sx={{ fontSize: 11, color: 'text.secondary' }}>{label}</Typography>
                    <Typography sx={{ fontSize: 13 }}>{value}</Typography>
                  </Box>
                </Box>
              </Reveal>
            ))}
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Reveal x={30} y={0}>
              <Box component="form" onSubmit={submit}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField required fullWidth size="small" label="Full name" value={form.name} onChange={set('name')} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField required fullWidth size="small" type="email" label="Your email" value={form.email} onChange={set('email')} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth size="small" label="Phone number" value={form.phone} onChange={set('phone')} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField fullWidth size="small" label="Budget" value={form.budget} onChange={set('budget')} />
                  </Grid>
                  <Grid size={12}>
                    <TextField required fullWidth multiline rows={5} label="Message" value={form.message} onChange={set('message')} />
                  </Grid>
                  <Grid size={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button type="submit" variant="contained">
                      Submit Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Reveal>
          </Grid>
        </Grid>
      </Container>

      <Snackbar open={done} autoHideDuration={4000} onClose={() => setDone(false)}>
        <Alert severity="success" variant="filled" onClose={() => setDone(false)}>
          Opening your mail app — thanks for reaching out!
        </Alert>
      </Snackbar>
    </Box>
  );
}
