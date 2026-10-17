"use client";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { IconButton, Tooltip } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import baseTheme, { GREEN, GREEN_DARK, GREEN_LIGHT } from "../theme";

export const MODE_KEY = "portfolio-color-mode";

/* ------------------------------------------------------------------
   Your own theme (../theme) is used as-is for light mode (the default).
   Dark mode is derived from it here, and the extra colors the pages
   need (palette.app) are layered on top. Your theme file is not changed.
------------------------------------------------------------------- */
const APP = {
  light: {
    accentText: GREEN_DARK,
    gradientText: `linear-gradient(135deg, ${GREEN_DARK}, ${GREEN})`,
    chip: GREEN_LIGHT,
    chipText: "#1f3d2c",
    field: "#ffffff",
    glass: "rgba(255,255,255,.88)",
    inset: "#eef3f0",
    shotBg: "linear-gradient(135deg, #eef3f0, #e1e9e4)",
    fallbackText: "#9db3a5",
    dialog: "#ffffff",
    overlay: "rgba(17,17,17,.55)",
    cta: `linear-gradient(160deg, #ffffff, ${GREEN_LIGHT})`,
    glow: "rgba(16,176,90,.14)",
  },
  dark: {
    accentText: "#34d17f",
    gradientText: `linear-gradient(135deg, ${GREEN}, #34d17f)`,
    chip: "#1a211c",
    chipText: "#d3ddd6",
    field: "#111512",
    glass: "rgba(11,14,12,.78)",
    inset: "#0e120f",
    shotBg: "linear-gradient(135deg, #1a221c, #0e120f)",
    fallbackText: "#34443a",
    dialog: "#111512",
    overlay: "rgba(0,0,0,.78)",
    cta: "linear-gradient(160deg, #151a16, #0e120f)",
    glow: "rgba(16,176,90,.2)",
  },
};

const DARK_PALETTE = {
  mode: "dark",
  background: { default: "#0b0e0c", paper: "#151a16" },
  text: { primary: "#f1f5f2", secondary: "#98a59c" },
  divider: "#232b25",
  action: {
    active: "#fff",
    hover: "rgba(255,255,255,.08)",
    selected: "rgba(255,255,255,.16)",
    disabled: "rgba(255,255,255,.3)",
    disabledBackground: "rgba(255,255,255,.12)",
    focus: "rgba(255,255,255,.12)",
  },
};

export function buildTheme(mode) {
  return createTheme(baseTheme, {
    palette: { ...(mode === "dark" ? DARK_PALETTE : {}), app: APP[mode] },
  });
}

/* ---------- context ---------- */
const ColorModeContext = createContext({ mode: "light", toggleMode: () => {} });
export const useColorMode = () => useContext(ColorModeContext);

/* ---------- toggle button ----------
   <ColorModeToggle />          regular icon button (drop it inside your Navbar if you like)
   <ColorModeToggle floating /> fixed bottom-right button (what the provider renders by default) */
export function ColorModeToggle({ floating = false }) {
  const { mode, toggleMode } = useColorMode();
  const dark = mode === "dark";
  const label = dark ? "Switch to light theme" : "Switch to dark theme";
  return (
    <Tooltip title={label} placement={floating ? "left" : "bottom"}>
      <IconButton
        onClick={toggleMode}
        aria-label={label}
        sx={{
          width: 44, height: 44,
          bgcolor: "background.paper", border: 1, borderColor: "divider", color: "text.primary",
          ...(floating && { position: "fixed", right: 20, bottom: 20, zIndex: 1200, boxShadow: "0 8px 24px -8px rgba(0,0,0,.35)" }),
          "&:hover": { bgcolor: "background.paper", borderColor: "primary.main", color: (t) => t.palette.app.accentText },
        }}
      >
        {dark ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}

/* ---------- provider (put once in app/layout) ---------- */
export default function ThemeModeProvider({ children, floatingToggle = true }) {
  const [mode, setMode] = useState("light"); // default: light
  const [ready, setReady] = useState(false);

  // Restore a saved choice after mount, so server and client HTML match.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(MODE_KEY);
      if (saved === "dark" || saved === "light") setMode(saved);
    } catch { /* storage unavailable: stay on light */ }
    setReady(true);
  }, []);

  const theme = useMemo(() => buildTheme(mode), [mode]);

  // Keep <html> in sync so the global CSS (body background, color-scheme) follows the theme.
  useEffect(() => {
    if (!ready) return;
    const root = document.documentElement;
    root.setAttribute("data-theme", mode);
    root.style.setProperty("--app-bg", theme.palette.background.default);
  }, [ready, mode, theme]);

  const toggleMode = useCallback(() => {
    setMode((m) => {
      const next = m === "light" ? "dark" : "light";
      try { window.localStorage.setItem(MODE_KEY, next); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const value = useMemo(() => ({ mode, toggleMode }), [mode, toggleMode]);

  return (
    <ColorModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        {children}
        {floatingToggle && <ColorModeToggle floating />}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}