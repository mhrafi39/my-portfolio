import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  const quickFacts = [
    { icon: '🎓', label: 'CSE Student', value: 'Ahsanullah University of Science and Technology (AUST)' },
    { icon: '🌍', label: 'Based in', value: 'Bangladesh' },
    { icon: '💬', label: 'Interests', value: 'Web Development, AI, Cyber Security, Mobile Apps' },
    { icon: '💻', label: 'GitHub', value: 'github.com/mhrafi39' }
  ]

  return (
    <div className="about-wrapper">
      <div className="about-content">
        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="about-intro">
            I'm a dedicated <strong>CSE student</strong> who enjoys solving problems through code. 
            Over time, I've built multiple projects ranging from full-stack web platforms to mobile 
            apps and game prototypes.
          </p>
          <p>
            I'm currently exploring <strong>AI integrations</strong>, <strong>Cyber Security</strong>, 
            and <strong>Cloud systems</strong> to expand my technical horizon. I believe in continuous 
            learning, teamwork, and creating impactful digital experiences.
          </p>
          <p>
            When I'm not coding, you'll find me exploring the latest technologies, contributing to 
            open-source projects, and collaborating with fellow developers.
          </p>
        </motion.div>

        <motion.div
          className="about-journey"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Quick Facts</h3>
          <div className="journey-timeline">
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                className="journey-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="journey-year">{fact.icon}</span>
                <div className="journey-content">
                  <h4>{fact.label}</h4>
                  <p>{fact.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="highlight">
            <span className="highlight-icon">🚀</span>
            <h4>Full-Stack</h4>
            <p>MERN, Laravel, and Flutter expertise</p>
          </div>
          <div className="highlight">
            <span className="highlight-icon">🤖</span>
            <h4>AI Explorer</h4>
            <p>Integrating intelligent solutions</p>
          </div>
          <div className="highlight">
            <span className="highlight-icon">🔒</span>
            <h4>Security Focus</h4>
            <p>Building secure applications</p>
          </div>
          <div className="highlight">
            <span className="highlight-icon">☁️</span>
            <h4>Cloud Systems</h4>
            <p>Scalable cloud architecture</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
