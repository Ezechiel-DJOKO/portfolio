// src/app/page.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cvData } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 w-full bg-navy/90 backdrop-blur-md border-b border-accent-dim z-50">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="font-display font-bold text-2xl tracking-tighter hover:opacity-80 transition-opacity">
            DJOKO Tanguy Mawougnon Ezékiel<span className="text-accent">.</span>
          </a>
          
          {/* Menu Desktop */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
            <li><a href="#about" className="hover:text-accent transition-colors">À propos</a></li>
            <li><a href="#formation" className="hover:text-accent transition-colors">Formation</a></li>
            <li><a href="#skills" className="hover:text-accent transition-colors">Compétences</a></li>
            <li><a href="#projects" className="hover:text-accent transition-colors">Projets</a></li>
            <li><a href="#contact" className="px-4 py-2 border border-accent text-accent rounded hover:bg-accent-dim transition-colors">Contact</a></li>
          </ul>

          {/* Bouton Menu Mobile (Hamburger) */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span className={`block w-8 h-0.5 bg-accent transition-transform duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-accent transition-opacity duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-8 h-0.5 bg-accent transition-transform duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </button>
        </nav>

        {/* Menu Déroulant Mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-navy-light border-b border-accent-dim overflow-hidden"
            >
              <ul className="flex flex-col items-center py-6 gap-6 text-main font-medium">
                <li><a href="#about" onClick={toggleMenu} className="hover:text-accent">À propos</a></li>
                <li><a href="#formation" onClick={toggleMenu} className="hover:text-accent">Formation</a></li>
                <li><a href="#skills" onClick={toggleMenu} className="hover:text-accent">Compétences</a></li>
                <li><a href="#projects" onClick={toggleMenu} className="hover:text-accent">Projets</a></li>
                <li><a href="#contact" onClick={toggleMenu} className="px-6 py-2 border border-accent text-accent rounded hover:bg-accent-dim">Contact</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pt-24 md:pt-28">
        
        {/* HERO (AVEC LA PHOTO) */}
<motion.section
  id="hero"
  initial="hidden"
  animate="visible"
  variants={fadeUp}
  className="min-h-[calc(100vh-5rem)] flex items-center py-12 md:py-0"
>
  <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
    
    {/* TEXTE */}
    <div className="order-2 md:order-1 text-center md:text-left">
      <p className="text-accent font-display font-medium mb-3 md:mb-4 text-sm sm:text-base">
        Bonjour, je suis
      </p>

      <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] mb-4 text-main">
        {cvData.personal.name}
        <br />
        {cvData.personal.lastName}
      </h1>

      <h2 className="text-lg sm:text-xl lg:text-2xl font-medium text-muted mb-5 md:mb-6 max-w-xl mx-auto md:mx-0">
        {cvData.personal.title}
      </h2>

      <p className="text-sm sm:text-base lg:text-lg text-muted max-w-lg mb-8 leading-relaxed mx-auto md:mx-0">
        {cvData.personal.description}
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
        <a
          href="#projects"
          className="px-6 py-3 bg-accent text-navy font-semibold rounded hover:-translate-y-1 transition-transform shadow-[0_4px_14px_0_rgba(100,255,218,0.39)] text-sm sm:text-base"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent-dim transition-colors text-sm sm:text-base"
        >
          Me contacter
        </a>
      </div>
    </div>

    {/* PHOTO */}
    <div className="order-1 md:order-2 flex justify-center md:justify-end">
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
        {/* Anneau décoratif */}
        <div className="absolute -inset-2 sm:-inset-3 rounded-full border-2 border-accent/40"></div>
        <div className="absolute -inset-1 rounded-full border border-accent/20"></div>

        {/* Image */}
        <div className="relative w-full h-full rounded-full overflow-hidden bg-navy-light border-4 border-navy-light shadow-2xl">
          <img
            src={cvData.personal.photoUrl}
            alt={`${cvData.personal.name} ${cvData.personal.lastName}`}
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.classList.add("flex", "items-center", "justify-center");
                parent.innerHTML =
                  '<span class="text-5xl md:text-6xl text-muted font-bold font-display">TD</span>';
              }
            }}
          />
        </div>
      </div>
    </div>
  </div>
</motion.section>

        {/* ABOUT */}
        <motion.section id="about" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-16 md:py-24">
          <h2 className="section-title font-display text-2xl sm:text-3xl font-bold text-main">À propos de moi</h2>
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 mt-8">
            <div className="md:col-span-3 space-y-4 text-muted text-base sm:text-lg leading-relaxed">
              {cvData.about.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
              
              <div className="mt-8 space-y-2 text-sm">
                <p><span className="text-accent font-semibold uppercase tracking-wider text-xs mr-2">Localisation:</span> {cvData.personal.location}</p>
                <p><span className="text-accent font-semibold uppercase tracking-wider text-xs mr-2">Disponibilité:</span> Stages & opportunités</p>
              </div>
            </div>
            
            <div className="md:col-span-2 bg-navy-light border border-accent-dim rounded-xl p-6 sm:p-8 h-fit">
              <h3 className="font-display text-accent font-semibold text-xl mb-6">En quelques mots</h3>
              <ul className="space-y-3 text-muted">
                {cvData.about.qualities.map((q, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="text-accent text-xs">▹</span> {q}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* FORMATION & CERTIFICATIONS */}
        <motion.section id="formation" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-16 md:py-24">
          <h2 className="section-title font-display text-2xl sm:text-3xl font-bold text-main">Formation & Certifications</h2>
          
          <div className="relative pl-6 border-l-2 border-accent-dim mt-8 mb-16">
            {cvData.timeline.map((item, i) => (
              <div key={i} className="mb-10 relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-navy border-2 border-accent" />
                <h3 className="text-xl font-bold text-main">{item.title}</h3>
                <span className="text-accent text-sm font-medium block mt-1 mb-2">{item.place}</span>
                {item.desc && <p className="text-muted text-sm sm:text-base">{item.desc}</p>}
              </div>
            ))}
          </div>

          <h3 className="font-display text-xl sm:text-2xl font-semibold mb-6 text-main">Certifications (Cliquez pour consulter)</h3>
          
          {/* GRILLE DES CERTIFICATIONS CLIQUABLES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {cvData.certifications.map((cert, i) => (
              <a 
                key={i} 
                href={cert.fileUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-navy-light border border-accent-dim rounded p-4 text-muted text-sm hover:border-accent hover:text-main transition-all flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-[0_4px_10px_rgba(100,255,218,0.1)]"
              >
                <span className="pr-4">{cert.title}</span>
                {/* Icône de lien externe qui apparait au survol */}
                <svg className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section id="skills" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-16 md:py-24">
          <h2 className="section-title font-display text-2xl sm:text-3xl font-bold text-main">Compétences techniques</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {cvData.skills.map((category, i) => (
              <div key={i} className="bg-navy-light border border-accent-dim rounded-xl p-6 sm:p-8">
                <h3 className="font-display text-accent font-semibold text-lg mb-4">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.tags.map((tag, j) => (
                    <span key={j} className="bg-accent-dim text-accent text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-16 md:py-24">
          <h2 className="section-title font-display text-2xl sm:text-3xl font-bold text-main">Projets sélectionnés</h2>
          <p className="text-muted text-base sm:text-lg mb-8 -mt-2">Quelques réalisations qui illustrent mon approche.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {cvData.projects.map((project, i) => (
              <div key={i} className="bg-navy-light border border-accent-dim rounded-xl p-6 sm:p-8 hover:-translate-y-2 hover:border-accent transition-all duration-300 flex flex-col h-full">
                <div className="text-3xl sm:text-4xl mb-6">{project.icon}</div>
                <h3 className="font-display font-bold text-lg sm:text-xl mb-3 text-main">{project.title}</h3>
                <p className="text-muted text-sm sm:text-base mb-6 flex-grow">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, j) => (
                    <span key={j} className="text-xs text-accent bg-accent-dim px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="py-16 md:py-24 mb-10 md:mb-20">
          <h2 className="section-title font-display text-2xl sm:text-3xl font-bold text-main">Contact</h2>
          <p className="text-muted text-base sm:text-lg mb-8 -mt-2">Je suis ouvert aux opportunités de stage et aux collaborations.</p>
          
          <div className="bg-navy-light border border-accent-dim rounded-xl p-6 sm:p-8 max-w-lg">
            <div className="space-y-6">
              <div>
                <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-1">Email</span>
                <a href={`mailto:${cvData.personal.email}`} className="text-base sm:text-lg hover:text-accent transition-colors break-all">{cvData.personal.email}</a>
              </div>
              <div>
                <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-1">Téléphone</span>
                <a href={`tel:${cvData.personal.phone}`} className="text-base sm:text-lg hover:text-accent transition-colors">{cvData.personal.phone}</a>
              </div>
              <div>
                <span className="block text-accent text-xs font-semibold uppercase tracking-widest mb-1">Localisation</span>
                <span className="text-base sm:text-lg">{cvData.personal.location}</span>
              </div>
            </div>
            <a href={`mailto:${cvData.personal.email}`} className="inline-block mt-8 px-6 py-3 bg-accent text-navy font-semibold rounded hover:bg-[#4cdbba] transition-colors w-full sm:w-auto text-center">
              M'envoyer un email
            </a>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-accent-dim py-6 sm:py-8 text-center text-muted text-xs sm:text-sm">
        <p>© {new Date().getFullYear()} {cvData.personal.name} {cvData.personal.lastName} — Portfolio professionnel</p>
      </footer>
    </>
  );
}