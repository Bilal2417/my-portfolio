import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Reviews from '../components/Reviews';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export const metadata = {
  title: "My Portfolio | Web Developer",
  description:
    "Explore my portfolio, projects, skills, and experience as a web developer.",
  icons: {
    icon: "favicon.ico",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Projects />
      {/* <Reviews /> */}
      <Contact />
      <Footer />
    </main>
  );
}
