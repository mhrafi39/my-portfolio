import React from 'react'
import { motion } from 'framer-motion'

export default function Skills() {
  const skillCategories = [
    {
      title: '🧩 Programming Languages',
      icon: '💻',
      skills: ['C / C++', 'JavaScript (ES6+)', 'PHP', 'Dart', 'Python']
    },
    {
      title: '💻 Frontend Development',
      icon: '🎨',
      skills: ['React.js', 'Tailwind CSS', 'Bootstrap', 'HTML5 / CSS3', 'Framer Motion', 'Formik + Yup']
    },
    {
      title: '⚙️ Backend Development',
      icon: '🔧',
      skills: ['Node.js / Express.js', 'Laravel 11', 'JWT Authentication', 'WebSockets', 'Nodemailer']
    },
    {
      title: '🗄️ Databases',
      icon: '💾',
      skills: ['MongoDB', 'MySQL', 'Firebase Firestore']
    },
    {
      title: '☁️ Cloud & Integrations',
      icon: '🌐',
      skills: ['Cloudinary', 'SSLCommerz / Stripe', 'Git & GitHub', 'Vercel / Railway', 'OpenAI API']
    },
    {
      title: '🧰 Tools & Platforms',
      icon: '🛠️',
      skills: ['VS Code', 'Postman', 'Figma', 'VirtualBox + Kali Linux']
    },
    {
      title: '🔐 Cyber Security',
      icon: '🛡️',
      skills: ['Kali Linux Environment', 'Network Scanning', 'Ethical Hacking Fundamentals']
    }
  ]

  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={catIndex}
            className="skill-category-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: catIndex * 0.05, duration: 0.5 }}
            whileHover={{ y: -5 }}
          >
            <div className="category-header">
              <span className="category-icon">{category.icon}</span>
              <h3 className="category-title">{category.title}</h3>
            </div>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <motion.span
                  key={index}
                  className="skill-badge"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: catIndex * 0.05 + index * 0.02 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
