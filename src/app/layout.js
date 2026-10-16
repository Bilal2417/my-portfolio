import './globals.css';
import ThemeRegistry from '../components/ThemeRegistry';

export const metadata = {
  title: 'Bilal | MERN Stack Developer',
  description: 'Portfolio of Bilal, a MERN stack developer building scalable full-stack web apps.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
