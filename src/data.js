// Edit everything here — name, links, projects, reviews. Components read from this file.
export const profile = {
  name: 'Bilal Arsal',
  firstName: 'Bilal',
  role: 'MERN Stack Developer',
  years: 2,
  intro:
    "I'm Bilal, a MERN stack developer. I build fast, scalable full-stack web apps — from MongoDB schemas and Express APIs to polished React and Next.js interfaces.",
  email: 'bilalarsal.dev@gmail.com',
  phone: '+92 328 920 1739',
  address: 'Faisalabad, Pakistan',
  cv: '/1_M_Bilal_Arsal_CV.pdf',
  socials: {
    github: 'https://github.com/Bilal2417',
    linkedin: 'https://linkedin.com/in/bilal-arsal-702151314',
    instagram: 'https://instagram.com/your-username',
  },
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  // { label: 'Testimonial', href: '#reviews' },
];

export const stats = [
  { value: 20, suffix: '+', label: 'Satisfied clients' },
  { value: 40, suffix: '+', label: 'Projects completed' },
  { value: 15, suffix: '+', label: 'Reviews given' },
];

export const skills = [
  { icon: 'db', title: 'MongoDB', text: 'Schema design, aggregation pipelines and Mongoose models that scale.' },
  { icon: 'api', title: 'Express & REST APIs', text: 'Secure, well-structured APIs with JWT auth and validation.' },
  { icon: 'ui', title: 'React & Next.js', text: 'Fast, responsive interfaces with MUI, SSR and clean component design.' },
  { icon: 'node', title: 'Node.js', text: 'Backend services, background jobs and real-time features with sockets.' },
];

export const projects = [
  {
    title: 'Dentora',
    live: 'https://dental-app-billy.vercel.app/',
    img : '/projects/dentora.jpeg'
  },
  {
    title: '0xverse',
    live: 'https://0xverse-b.netlify.app/',
    img : '/projects/0xverse.jpeg'
  },
  {
    title: 'Trd Network',
    live: 'https://trdnetworkbilly.netlify.app/',
    img : '/projects/trdNetwork.jpeg'
  },
  {
    title: 'Gem Coin',
    live: 'https://gemcoinb.vercel.app/',
    img : '/projects/gemCoin.jpeg'
  },
  {
    title: 'Crypticarc',
    live: 'https://crypticarc-b.netlify.app/',
    img : '/projects/crypticarc.jpeg'
  },
  // {
  //   title: 'Your Next Project',
  //   text: 'Replace this card in src/data.js with your own work.',
  //   tags: ['MERN'],
  //   gradient: 'linear-gradient(135deg,#7b2ff7,#c04bff 55%,#ff8ad8)',
  //   live: '#',
  //   code: '#',
  // },
];

// Placeholder testimonials — replace with real ones.
export const reviews = [
  {
    name: 'Client One',
    role: 'Startup Founder',
    text: 'Delivered our MVP ahead of schedule. Clean code, great communication and a really polished UI.',
  },
  {
    name: 'Client Two',
    role: 'Product Manager',
    text: 'Turned a rough idea into a fast, reliable web app. Easy to work with and quick on feedback.',
  },
  {
    name: 'Client Three',
    role: 'Agency Owner',
    text: 'Solid full-stack skills. The API design and database structure made future features simple to add.',
  },
  {
    name: 'Client Four',
    role: 'Business Owner',
    text: 'Professional, responsive and detail-oriented. Would happily hire again for the next phase.',
  },
];
