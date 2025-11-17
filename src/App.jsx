import React, { Suspense, lazy } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { motion } from 'framer-motion'
import ProjectsGrid from './components/ProjectsGrid'
import Skills from './components/Skills'
import Experience from './components/Experience'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'
import About from './components/About'
import ScrollProgress from './components/ScrollProgress'
import ScrollIndicator from './components/ScrollIndicator'
import BackToTop from './components/BackToTop'
import profileImg from './assets/prfl.png'

const Hero3D = lazy(() => import('./components/Hero3D'))

export default function App() {
  return (
    <div id="root">
      <ScrollProgress />
      <ScrollIndicator />
      <BackToTop />
      <AnimatedBackground />
      <Navbar />
      <main>
        <section id="home" className="hero">
          <div className="hero-canvas">
            <motion.div 
              className="profile-overlay" 
              initial={{ opacity: 0, scale: 0.95 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="profile-badge"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                style={{
                  position: 'absolute',
                  top: 'clamp(0.5rem, 2vw, 1rem)',
                  right: 'clamp(0.5rem, 2vw, 1rem)',
                  zIndex: 10,
                  fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                  padding: 'clamp(0.3rem, 1vw, 0.5rem) clamp(0.6rem, 2vw, 1rem)'
                }}
              >
                <span className="status-dot"></span>
                <span>Available</span>
              </motion.div>
              <img src={profileImg} alt="MD Mehedi Hasan Rafi" className="avatar" />
              <div className="profile-gradient-overlay"></div>
              <div className="profile-info-overlay">
                <motion.div
                  className="code-snippet"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 'clamp(0.65rem, 1.8vw, 0.9rem)',
                    color: 'var(--accent)',
                    marginTop: '0.5rem',
                    padding: 'clamp(0.5rem, 1.5vw, 0.8rem)',
                    background: 'rgba(0, 245, 255, 0.05)',
                    borderRadius: '6px',
                    border: '1px solid rgba(0, 245, 255, 0.2)',
                    maxWidth: '95%',
                    lineHeight: '1.5',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis'
                  }}
                >
                  <div style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}>
                    <span style={{ color: '#888' }}>const</span> <span style={{ color: '#0affed' }}>dev</span> = &#123;<br/>
                    &nbsp;<span style={{ color: '#888' }}>name:</span> <span style={{ color: '#7b2ff7' }}>'M. H. Rafi'</span>,<br/>
                    &nbsp;<span style={{ color: '#888' }}>role:</span> <span style={{ color: '#7b2ff7' }}>'Full-Stack'</span>,<br/>
                    &nbsp;<span style={{ color: '#888' }}>goal:</span> <span style={{ color: '#7b2ff7' }}>'Build Future'</span><br/>
                    &#125;;
                  </div>
                </motion.div>
              </div>
            </motion.div>
            <Suspense fallback={<div className="canvas-fallback">Loading scene…</div>}>
              <Hero3D />
            </Suspense>
          </div>
          
          <div className="hero-content">
            <motion.div
              className="hero-intro"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h2>👋 Hi, I'm Mehedi Hasan Rafi</h2>
              <p className="hero-description">
                A passionate <strong>Full-Stack Developer</strong> and <strong>CSE student</strong> who loves building modern, 
                secure, and intelligent applications. I specialize in <strong>MERN</strong>, <strong>Laravel</strong>, and <strong>Flutter</strong>, 
                crafting digital experiences that connect people and solve real problems.
              </p>
              <div className="hero-stats-inline">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Projects</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">Tech Stacks</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Years Learning</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="hero-skills"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h3>Core Technologies</h3>
              <div className="skill-badges">
                <span className="skill-badge primary">MERN Stack</span>
                <span className="skill-badge primary">Laravel</span>
                <span className="skill-badge primary">Flutter</span>
                <span className="skill-badge secondary">React</span>
                <span className="skill-badge secondary">Node.js</span>
                <span className="skill-badge secondary">MongoDB</span>
                <span className="skill-badge secondary">PHP</span>
                <span className="skill-badge secondary">Dart</span>
              </div>
            </motion.div>

            <motion.div 
              className="hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <motion.a
                className="cta"
                href="#projects"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 40px rgba(0, 245, 255, 0.4)" }}
                whileTap={{ scale: 0.98 }}
              >
                <span>💼 View My Projects</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
              <motion.a 
                className="btn-secondary" 
                href="#resume" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                📄 Download Resume
              </motion.a>
              <motion.a 
                className="btn-icon" 
                href="https://github.com/mhrafi39" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <About />
          </motion.div>
        </section>

        <section id="skills" className="section skills-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Skills & Expertise
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Skills />
          </motion.div>
        </section>

        <section id="projects" className="section projects-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 60, rotateX: 45 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{ transformPerspective: 1000 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            A showcase of my recent work and creative solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.1 }}
          >
            <ProjectsGrid />
          </motion.div>
        </section>

        <section id="experience" className="section experience-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, x: -100, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            style={{ transformPerspective: 1000 }}
          >
            Education & Learning
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <Experience />
          </motion.div>
        </section>

        <section className="cta-section">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: false, amount: 0.3 }}
            style={{ transformPerspective: 1200 }}
          >
            <h2>Ready to bring your ideas to life?</h2>
            <p>Let's collaborate and create something amazing together</p>
            <div className="cta-buttons">
              <motion.a
                className="cta-btn primary"
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Start a Project
              </motion.a>
              <motion.a
                className="cta-btn secondary"
                href="mailto:mehedihasanrafi39@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Send an Email
              </motion.a>
            </div>
          </motion.div>
        </section>

        <section id="contact" className="section contact-section">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, scale: 1.5, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Let's Work Together
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Open to collaboration, internships, and freelance opportunities.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

