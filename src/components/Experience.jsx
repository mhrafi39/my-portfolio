import React from 'react'
import { motion } from 'framer-motion'

export default function Experience() {
  const education = {
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Ahsanullah University of Science and Technology (AUST)',
    status: 'Currently Pursuing',
    icon: '🎓'
  }

  const learningAreas = [
    {
      title: 'AI & Machine Learning',
      icon: '🤖',
      topics: ['Flask APIs', 'OpenAI Integration', 'AI-powered recommendations'],
      status: 'Active Learning'
    },
    {
      title: 'Cyber Security & Ethical Hacking',
      icon: '🔒',
      topics: ['Kali Linux environment', 'Network scanning', 'Penetration testing fundamentals'],
      status: 'Active Learning'
    },
    {
      title: 'Mobile App Development',
      icon: '📱',
      topics: ['Flutter framework', 'Firebase integration', 'Cross-platform development'],
      status: 'Active Learning'
    }
  ]

  return (
    <div className="experience-wrapper">
      {/* Education Section */}
      <motion.div
        className="education-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="education-header">
          <span className="education-icon">{education.icon}</span>
          <div className="education-info">
            <h3 className="education-degree">{education.degree}</h3>
            <div className="education-institution">{education.institution}</div>
            <span className="education-status">{education.status}</span>
          </div>
        </div>
      </motion.div>

      {/* Ongoing Learning Section */}
      <div className="learning-section">
        <h3 className="learning-title">Ongoing Learning</h3>
        <div className="learning-grid">
          {learningAreas.map((area, index) => (
            <motion.div
              key={index}
              className="learning-card"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="learning-header">
                <span className="learning-icon">{area.icon}</span>
                <h4 className="learning-area-title">{area.title}</h4>
              </div>
              <ul className="learning-topics">
                {area.topics.map((topic, i) => (
                  <li key={i}>{topic}</li>
                ))}
              </ul>
              <span className="learning-status">{area.status}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
