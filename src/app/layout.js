// src/app/layout.jsx  (merge this into your existing layout: keep your metadata, fonts, etc.)
import "./globals.css";
import ThemeModeProvider from "../components/ThemeModeProvider";
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-sans',
});
// Runs before first paint so a saved dark choice doesn't flash white on reload.
const setInitialTheme = `try{var m=localStorage.getItem("portfolio-color-mode");if(m==="dark"||m==="light")document.documentElement.setAttribute("data-theme",m)}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning: the script above sets data-theme on <html> before React hydrates
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
      </head>
      <body>
        {/* Replaces any ThemeProvider you currently have around {children}. */}
        <ThemeModeProvider>{children}</ThemeModeProvider>
      </body>
    </html>
  );
}