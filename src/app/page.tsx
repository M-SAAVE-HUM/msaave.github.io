'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  return (
    <main className="text-gray-800 scroll-smooth bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Team />
      <Leadership />
      <Faculty />
      <Involved />
      <Sponsors />
      <Contact />
      <Footer />
    </main>
  );
}

/* ------------------------------------------------------------------ */
/* ------------------------------ NAVBAR ---------------------------- */
/* ------------------------------------------------------------------ */
const Navbar = () => {
  const links = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT' },
    { href: '#hum', label: 'HUM' },
    { href: '#leadership', label: 'LEADERSHIP' },
    { href: '#contact', label: 'CONTACT' },
  ];

  return (
    <header className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-2xl font-extrabold tracking-wide">M‑SAAVE</a>
        <ul className="hidden md:flex gap-8 font-medium">
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blue-700 transition-colors duration-200">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <MobileMenu links={links} />
      </nav>
    </header>
  );
};

const MobileMenu = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden inline-flex items-center justify-center p-2 border rounded focus:outline-none"
        aria-label="Toggle menu"
      >
        {/* Simple hamburger icon */}
        <span className="block w-6 h-0.5 bg-current mb-1" />
        <span className="block w-6 h-0.5 bg-current mb-1" />
        <span className="block w-6 h-0.5 bg-current" />
      </button>
      {open && (
        <ul className="md:hidden absolute top-full left-0 w-full bg-white shadow-md py-4 flex flex-col items-center gap-4">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2 w-full text-center hover:bg-gray-100"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

/* ------------------------------------------------------------------ */
/* ------------------------------ GALLERY --------------------------- */
/* ------------------------------------------------------------------ */
const Gallery = ({ children }) => (
  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">{children}</div>
);

/* ------------------------------------------------------------------ */
/* ------------------------------ HERO ------------------------------ */
/* ------------------------------------------------------------------ */
const Hero = () => (
  <section
    id="home"
    className="relative flex items-center justify-center h-screen text-center text-white overflow-hidden"
  >
    {/* Background image */}
    <Image
      src="/hero.jpg" // ensure the file exists in /public
      alt="Hero background"
      fill
      sizes="100vw"
      priority
      className="object-cover" // no negative z‑index so it sits at z‑0
    />

    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50 z-10" />

    {/* Foreground content */}
    <div className="relative z-20 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest drop-shadow-lg">
        Michigan Sustainability Applications <br className="hidden md:block" /> for Aerospace Vehicle Engineering
      </h1>
      <a
        href="#about"
        className="mt-10 inline-flex items-center gap-2 px-6 py-3 font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
      >
        Learn More
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M11.47 3.97a.75.75 0 011.06 0l8.25 8.25a.75.75 0 010 1.06l-8.25 8.25a.75.75 0 11-1.06-1.06L18.69 13.5H3a.75.75 0 010-1.5h15.69l-7.22-7.22a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* ------------------------------ ABOUT ----------------------------- */
/* ------------------------------------------------------------------ */
const About = () => (
  <section id="about" className="max-w-5xl mx-auto py-20 px-4">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">ABOUT</h2>
    <p className="leading-relaxed space-y-4 text-lg">
      Michigan Sustainability Applications for Aerospace Vehicle Engineering is a project team at the University of Michigan started by passionate aerospace students that care about sustainability and humanitarian aerospace missions. Our mission is to improve the human condition through targeted application of aerospace vehicles and engineering.
    </p>
    <p className="leading-relaxed space-y-4 text-lg mt-4">
      We are an interdisciplinary student project team which was established in January 2021 because a group of students saw a gap in humanitarian driven projects at the university. Our team is passionate about engineering for the greater good and also DEI in STEM fields. We are currently working on a Humanitarian UAV Mission (HUM) and previously completed a Wheelchair Accessibility Mission (WAM).
    </p>
  </section>
);

/* ------------------------------------------------------------------ */
/* ----------------------------- MISSION ---------------------------- */
/* ------------------------------------------------------------------ */
const Mission = () => (
  <section id="hum" className="bg-gray-50 py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Humanitarian UAV Mission</h3>
      <p className="text-lg leading-relaxed">
        M‑SAAVE HUM is partnered with Air Serv International, a non‑profit humanitarian relief organization based out of sub‑Saharan Africa. Air Serv provides aviation services including transportation of goods, medical supplies, and relief workers. Air Serv is also involved in medical evacuations and repatriating displaced persons.
      </p>
      <p className="text-lg leading-relaxed mt-4">
        In partnership with Air Serv, we hope to expand their reach into unmanned operations by delivering an aerial vehicle capable of humanitarian aid missions. Our aircraft is equipped with an airdrop payload delivery to supply medical supplies and food, and a mapping payload for aerial surveillance in disaster management.
      </p>
      <div className="flex justify-center mt-8">
        <a
          href="https://airserv.org" // placeholder external link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
        >
          Learn More about HUM
        </a>
      </div>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* ------------------------------ TEAM ------------------------------ */
/* ------------------------------------------------------------------ */
const Team = () => {
  const teamMembers = [
    { img: '/team-1.avif' },
    { img: '/team-2.avif' },
    { img: '/team-3.avif' },
    { img: '/team-4.avif' },
  ];

  return (
    <section id="team" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">OUR TEAM</h2>
      <Gallery>
        {teamMembers.map(({ img }, idx) => (
          <ProfileCard key={idx} img={img} />
        ))}
      </Gallery>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* --------------------------- LEADERSHIP --------------------------- */
/* ------------------------------------------------------------------ */
const Leadership = () => {
  // Put real data here (or fetch it).
  const leaders = [
    { img: '/leader-lewie.avif',   name: 'Lewie Lawrence',  role: 'Chief Engineer' },
    { img: '/leader-kabir.avif',  name: 'Kabir Khwaja',   role: 'President' },
    { img: '/leader-fernando.avif',  name: 'Fernando de Torres',     role: 'Business Director' },
    { img: '/leader-dan.avif',   name: 'Dan Fenton',     role: 'Payload Design & Delivery' },
    { img: '/leader-elise.avif',   name: 'Elise VeCasey',     role: 'Aerodynamics' },
    { img: '/leader-ali.jpg',   name: 'Ali Mothana',     role: 'Avionics' },
    { img: '/leader-lucie.avif',   name: 'Lucie Kovarick',     role: 'Systems' },
    { img: '/leader-kabir.avif',   name: 'Celia Radke',     role: 'Structures' },
    { img: '/leader-josh.avif',   name: 'Josh Zirin',     role: 'Structures' },
    { img: '/leader-kabir.avif',   name: 'Ashton Boichet',     role: 'Power & Propulsion' },
  ];

  return (
    <section id="leadership" className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Meet Our Leadership Team
        </h2>

        <Gallery>
          {leaders.map(({ img, name, role }) => (
            <ProfileCard key={name} img={img} name={name} role={role} />
          ))}
        </Gallery>
      </div>
    </section>
  );
};


const ProfileCard = ({ img, name, role }) => (
  <div className="flex flex-col items-center text-center">
    <Image src={img} alt={name || 'Team photo'} width={200} height={200} className="rounded-full object-cover" />
    {name && <h4 className="mt-4 font-semibold">{name}</h4>}
    {role && <p className="text-sm text-gray-600">{role}</p>}
  </div>
);

/* ------------------------------------------------------------------ */
/* ------------------------------ FACULTY --------------------------- */
/* ------------------------------------------------------------------ */
const Faculty = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Faculty Advisors</h2>
    <Gallery>
      {[
        { img: '/faculty-halow.jpg', name: 'George F. Halow', role: 'Professor of Practice of Aerospace Engineering' },
        { img: '/faculty-tzoumas.jpg', name: 'Vasileios Tzoumas', role: 'Assistant Professor of Aerospace Engineering' },
      ].map(member => (
        <ProfileCard key={member.name} img={member.img} name={member.name} role={member.role} />
      ))}
    </Gallery>
  </section>
);

/* ------------------------------------------------------------------ */
/* --------------------------- GET INVOLVED ------------------------- */
/* ------------------------------------------------------------------ */
const Involved = () => (
  <section className="bg-blue-600 text-white py-20 px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved!</h2>
    <p className="text-lg mb-4">Come to our meetings! We welcome new members at any point. There is no application process or member requirements.</p>
    <p className="text-lg mb-2 font-semibold">Full Team Meetings F25:</p>
    <p>Sundays 2‑4 pm @ FXB 1024</p>
    <p>Wednesdays 6‑8 pm @ CSRB 2230 (CAEN Lab)</p>
  </section>
);

/* ------------------------------------------------------------------ */
/* ----------------------------- SPONSORS --------------------------- */
/* ------------------------------------------------------------------ */
const Sponsors = () => (
  <section className="py-20 px-4 max-w-6xl mx-auto">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Thank You to Our Sponsors</h2>
    <div className="flex flex-wrap justify-center items-center gap-8">
      {['/sponsor-umich.avif', '/sponsor-umich-aerospace.avif', '/sponsor-ga.avif', '/sponsor-whirlpool.png'].map(src => (
        <Image key={src} src={src} alt="Sponsor logo" width={180} height={90} className="object-contain" />
      ))}
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* ----------------------------- CONTACT --------------------------- */
/* ------------------------------------------------------------------ */
const Contact = () => (
  <section id="contact" className="bg-gray-50 py-20 px-4">
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
      <div>
        <h2 className="text-3xl font-bold mb-4">CONTACT</h2>
        <h3 className="text-xl font-semibold mb-2">Inquiries</h3>
        <p className="mb-4">For any inquiries, questions, or commendations, please email <a href="mailto:msaave.recruiting@umich.edu" className="text-blue-600 underline">msaave.recruiting@umich.edu</a> or fill out the form.</p>
        <h3 className="text-xl font-semibold mb-2">Social Media</h3>
        <p>Instagram: <a href="https://instagram.com/msaave_umich" className="text-blue-200 underline" target="_blank" rel="noopener noreferrer">@msaave_umich</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/company/michigan-sustainability-applications-for-aerospace-vehicle-engineering/" className="text-blue-200 underline" target="_blank" rel="noopener noreferrer">M‑SAAVE LinkedIn</a></p>
      </div>

      {/* Simple contact form – replace with your preferred form handler */}
      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <div className="flex gap-4">
          <input type="text" name="firstName" placeholder="First Name" className="flex-1 p-3 border rounded" required />
          <input type="text" name="lastName" placeholder="Last Name" className="flex-1 p-3 border rounded" required />
        </div>
        <input type="email" name="email" placeholder="Email" className="w-full p-3 border rounded" required />
        <input type="text" name="subject" placeholder="Subject" className="w-full p-3 border rounded" />
        <textarea name="message" placeholder="Message" rows="5" className="w-full p-3 border rounded" />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors w-full">
          SUBMIT
        </button>
      </form>
    </div>
  </section>
);

/* ------------------------------------------------------------------ */
/* ------------------------------ FOOTER ---------------------------- */
/* ------------------------------------------------------------------ */
const Footer = () => (
  <footer className="bg-blue-900 text-white py-8 flex flex-col items-center gap-4">
    <Image src="/umich-block-m.png" alt="Block M" width={60} height={60} />
    <p className="text-sm">© {new Date().getFullYear()} M‑SAAVE. All rights reserved.</p>
  </footer>
);
