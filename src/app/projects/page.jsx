"use client"
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Box, Container, Typography, Button, Chip, Stack, TextField, InputAdornment,
  Card, CardContent, Dialog, DialogContent, IconButton, Link, Fade, Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import { PROJECTS, IMG_BASE } from "../../components/ProjectsData";
import Navbar from "../../components/Navbar";

// Theme + light/dark toggle now come from <ThemeModeProvider> in app/layout (see ThemeModeProvider.jsx).
const GITHUB = "https://github.com/Bilal2417";
const LINKEDIN = "https://linkedin.com/in/bilal-arsal-702151314";

const gradientText = {
  background: (t) => t.palette.app.gradientText,
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const eyebrow = {
  color: (t) => t.palette.app.accentText,
  fontWeight: 600, letterSpacing: ".14em", textTransform: "uppercase", fontSize: ".78rem",
};

const hoverAccent = { color: (t) => t.palette.app.accentText };

const outlinedBtn = {
  borderColor: "divider",
  "&:hover": { borderColor: "primary.main", color: (t) => t.palette.app.accentText },
};

/* Reveal-on-scroll hook */
function useReveal() {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return setShown(true);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, shown];
}

function TechChips({ tech }) {
  return (
    <Stack direction="row" useFlexGap spacing={0.9} sx={{ flexWrap: "wrap" }} aria-label="Technologies used">
      {tech.map((t) => (
        <Chip key={t} label={t} size="small" variant="outlined"
          sx={{ borderRadius: 2, bgcolor: (th) => th.palette.app.chip, borderColor: "divider", color: (th) => th.palette.app.chipText, fontSize: ".74rem" }} />
      ))}
    </Stack>
  );
}

function ProjectCard({ project, index, onOpen }) {
  const [ref, shown] = useReveal();
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <Fade in={shown} timeout={600} style={{ transitionDelay: `${(index % 3) * 80}ms` }}>
      <Card ref={ref} variant="outlined"
        sx={{
          display: "flex", flexDirection: "column", overflow: "hidden", bgcolor: "background.paper",
          transition: "transform .3s, border-color .3s, box-shadow .3s",
          "&:hover": { transform: "translateY(-6px)", borderColor: "rgba(16,176,90,.6)", boxShadow: "0 22px 50px -24px rgba(16,176,90,.45)" },
          "&:hover .shot-img": { transform: "scale(1.07)" },
          "&:hover .shot-view": { opacity: 1, transform: "none" },
        }}>
        <Box component="button" type="button" onClick={onOpen} aria-label={`View details of ${project.title}`}
          sx={{ position: "relative", p: 0, border: 0, cursor: "pointer", aspectRatio: "16 / 10", overflow: "hidden", display: "block", width: "100%",
            background: (t) => t.palette.app.shotBg,
            "&:focus-visible .shot-view": { opacity: 1, transform: "none" } }}>
          {imgFailed ? (
            <Box sx={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", fontSize: "2.4rem", fontWeight: 700, color: (t) => t.palette.app.fallbackText }}>
              {project.title[0]}
            </Box>
          ) : (
            <Box component="img" className="shot-img" src={project.image} alt={`${project.title} screenshot`}
              loading="lazy" onError={() => setImgFailed(true)}
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform .6s" }} />
          )}
          <Chip label={project.category} size="small"
            sx={{ position: "absolute", top: 14, left: 14, bgcolor: (t) => t.palette.app.glass, backdropFilter: "blur(8px)", border: 1, borderColor: "divider", color: (t) => t.palette.app.accentText, fontWeight: 600 }} />
          <Chip className="shot-view" label="View details" size="small" color="primary"
            sx={{ position: "absolute", right: 14, bottom: 14, fontWeight: 600, opacity: 0, transform: "translateY(8px)", transition: ".3s" }} />
        </Box>

        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1.5, flex: 1, p: 2.75, "&:last-child": { pb: 2.75 } }}>
          <Typography variant="h6" component="h3" fontWeight={600}>{project.title}</Typography>
          <Typography variant="body2" color="text.secondary">{project.description}</Typography>
          <TechChips tech={project.tech} />
          <Stack direction="row" spacing={1.25} sx={{ mt: "auto", pt: 1 }}>
            <Button fullWidth size="small" variant="contained" color="primary" href={project.live} target="_blank" rel="noopener noreferrer" endIcon={<OpenInNewIcon fontSize="small" />}>
              Live demo
            </Button>
            <Button fullWidth size="small" variant="outlined" color="inherit" onClick={onOpen} sx={outlinedBtn}>
              Details
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Fade>
  );
}

function ProjectDialog({ project, onClose }) {
  return (
    <Dialog open={!!project} onClose={onClose} maxWidth="md" fullWidth scroll="body" aria-labelledby="project-title"
      slotProps={{
        backdrop: { sx: { bgcolor: (t) => t.palette.app.overlay, backdropFilter: "blur(4px)" } },
        paper: { sx: { backgroundImage: "none", bgcolor: (t) => t.palette.app.dialog, border: 1, borderColor: "divider" } },
      }}>
      {project && (
        <>
          <Box sx={{ aspectRatio: "16 / 8", bgcolor: (t) => t.palette.app.inset, overflow: "hidden" }}>
            <Box component="img" src={project.image} alt={`${project.title} screenshot`}
              sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          </Box>
          <DialogContent sx={{ p: { xs: 2.5, sm: 4 }, display: "grid", gap: 3 }}>
            <Stack direction="row" spacing={2} sx={{ justifyContent: "space-between", alignItems: "flex-start" }}>
              <Box>
                <Typography sx={eyebrow}>{project.category}</Typography>
                <Typography id="project-title" variant="h4" component="h2" fontWeight={700}>{project.title}</Typography>
              </Box>
              <IconButton onClick={onClose} aria-label="Close" autoFocus
                sx={{ border: 1, borderColor: "divider", bgcolor: "background.paper", "&:hover": { borderColor: "primary.main", ...hoverAccent } }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Box sx={{ display: "grid", gap: 3.25, gridTemplateColumns: { xs: "1fr", sm: "1.4fr 1fr" } }}>
              <Box>
                <Typography sx={{ ...eyebrow, mb: 1.25 }} component="h4">About the project</Typography>
                <Typography variant="body2" color="text.secondary">{project.description}</Typography>
                <Typography sx={{ ...eyebrow, mt: 2.5, mb: 1.25 }} component="h4">Key features</Typography>
                <Stack component="ul" spacing={1} sx={{ listStyle: "none", m: 0, p: 0 }}>
                  {project.features.map((f) => (
                    <Typography key={f} component="li" variant="body2" color="text.secondary">
                      <Box component="span" sx={{ color: "primary.main" }}>▹ </Box>{f}
                    </Typography>
                  ))}
                </Stack>
              </Box>
              <Box>
                <Typography sx={{ ...eyebrow, mb: 1.25 }} component="h4">Technologies used</Typography>
                <TechChips tech={project.tech} />
                <Typography sx={{ ...eyebrow, mt: 2.5, mb: 1.25 }} component="h4">My role</Typography>
                <Typography variant="body2" color="text.secondary">{project.role}</Typography>
              </Box>
            </Box>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
              <Button fullWidth variant="contained" color="primary" href={project.live} target="_blank" rel="noopener noreferrer" endIcon={<OpenInNewIcon fontSize="small" />}>
                Live demo
              </Button>
              <Button fullWidth variant="outlined" color="inherit" href={project.repo || GITHUB} target="_blank" rel="noopener noreferrer" startIcon={<GitHubIcon fontSize="small" />} sx={outlinedBtn}>
                GitHub
              </Button>
            </Stack>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
}

export default function ProjectsPage() {
  const [tech, setTech] = useState("All");
  const [query, setQuery] = useState("");
  const [openId, setOpenId] = useState(null);

  const techs = useMemo(() => ["All", ...new Set(PROJECTS.flatMap((p) => p.tech))], []);
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PROJECTS.filter((p) =>
      (tech === "All" || p.tech.includes(tech)) &&
      (!q || `${p.title} ${p.description} ${p.category} ${p.tech.join(" ")}`.toLowerCase().includes(q)));
  }, [tech, query]);
  const openProject = PROJECTS.find((p) => p.id === openId) || null;

  useEffect(() => {
    document.title = "Projects | Bilal.dev";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh", transition: "background-color .25s, color .25s" }}>
        <Navbar />

        <Box component="main">
          {/* Hero */}
          <Box sx={{ position: "relative", overflow: "hidden", pt: 9, pb: 5,
            "&::before": { content: '""', position: "absolute", top: -220, left: "50%", width: 640, height: 640, transform: "translateX(-50%)", pointerEvents: "none",
              background: (t) => `radial-gradient(circle, ${t.palette.app.glow}, transparent 65%)` } }}>
            <Container maxWidth="lg" sx={{ position: "relative" }}>
              <Button href="/" startIcon={<ArrowBackIcon fontSize="small" />} color="inherit" size="small"
                sx={{ color: "text.secondary", mb: 2.5, px: 0, "&:hover": { ...hoverAccent, bgcolor: "transparent" } }}>
                Back to home
              </Button>
              <Typography sx={eyebrow}>Portfolio</Typography>
              <Typography variant="h2" component="h1" fontWeight={700}
                sx={{ fontSize: { xs: "2rem", md: "3.4rem" }, lineHeight: 1.15, mt: 1.25, mb: 1.75, maxWidth: 760 }}>
                All my <Box component="span" sx={gradientText}>projects</Box>, in one place
              </Typography>
              <Typography color="text.secondary" sx={{ maxWidth: 620 }}>
                Full-stack apps I've built and shipped. Open any card for the full breakdown, or jump straight to the live demo.
              </Typography>
              <Stack direction="row" spacing={4.5} useFlexGap sx={{ mt: 4, flexWrap: "wrap" }}>
                {[[PROJECTS.length, "Projects"], ["MERN", "Core stack"], ["100%", "Live & deployed"]].map(([n, l]) => (
                  <Box key={l}>
                    <Typography variant="h5" fontWeight={700}>{n}</Typography>
                    <Typography variant="body2" color="text.secondary">{l}</Typography>
                  </Box>
                ))}
              </Stack>
            </Container>
          </Box>

          <Container maxWidth="lg">
            {/* Filters */}
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} sx={{ my: 3.5, justifyContent: "space-between", alignItems: { md: "center" } }}>
              <Stack direction="row" useFlexGap spacing={1} sx={{ flexWrap: "wrap" }} role="group" aria-label="Filter by technology">
                {techs.map((t) => (
                  <Chip key={t} label={t} clickable onClick={() => setTech(t)} aria-pressed={t === tech}
                    color={t === tech ? "primary" : "default"} variant={t === tech ? "filled" : "outlined"}
                    sx={t === tech ? { fontWeight: 600 } : { bgcolor: (th) => th.palette.app.field, color: "text.secondary", borderColor: "divider" }} />
                ))}
              </Stack>
              <TextField size="small" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search projects…"
                type="search" slotProps={{ htmlInput: { "aria-label": "Search projects" }, input: {
                  startAdornment: <InputAdornment position="start"><SearchIcon fontSize="small" /></InputAdornment>,
                  sx: { borderRadius: 999, bgcolor: (t) => t.palette.app.field } } }}
                sx={{ minWidth: { md: 260 } }} />
            </Stack>

            {/* Grid */}
            {visible.length ? (
              <Box sx={{ display: "grid", gap: 3.25, pb: 5, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" } }}>
                {visible.map((p, i) => (
                  <ProjectCard key={p.id} project={p} index={i} onOpen={() => setOpenId(p.id)} />
                ))}
              </Box>
            ) : (
              <Typography color="text.secondary" align="center" sx={{ py: 8 }}>No projects match that search.</Typography>
            )}

            {/* CTA */}
            <Box sx={{ mt: 4, mb: 9, p: { xs: 4, sm: 6 }, textAlign: "center", borderRadius: 6, border: 1, borderColor: "divider",
              background: (t) => t.palette.app.cta }}>
              <Typography variant="h5" component="h2" fontWeight={700} sx={{ mb: 1 }}>Have a project in mind?</Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>Let's build something new, different and more meaningful.</Typography>
              <Stack direction="row" spacing={1.5} useFlexGap sx={{ justifyContent: "center", flexWrap: "wrap" }}>
                <Button variant="contained" color="primary" href="/#contact">Contact Me</Button>
                <Button variant="outlined" color="inherit" href={GITHUB} target="_blank" rel="noopener noreferrer" sx={outlinedBtn}>
                  See more on GitHub
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>

        {/* Footer */}
        <Divider />
        <Container maxWidth="lg" sx={{ py: 3.25 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ justifyContent: "space-between", color: "text.secondary", fontSize: ".85rem" }}>
            <span>© 2026. All Rights Reserved · Designed &amp; built by Bilal Arsal</span>
            <Stack direction="row" spacing={2.25}>
              <Link href={GITHUB} target="_blank" rel="noopener noreferrer" color="inherit" underline="none" sx={{ "&:hover": hoverAccent }}>GitHub</Link>
              <Link href={LINKEDIN} target="_blank" rel="noopener noreferrer" color="inherit" underline="none" sx={{ "&:hover": hoverAccent }}>LinkedIn</Link>
            </Stack>
          </Stack>
        </Container>

        <ProjectDialog project={openProject} onClose={() => setOpenId(null)} />
      </Box>
    </>
  );
}