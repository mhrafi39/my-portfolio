import React from 'react'
import { motion } from 'framer-motion'

export default function Stats() {
  const stats = [
    { label: 'Projects Completed', value: '50+', icon: '🚀' },
    { label: 'Happy Clients', value: '30+', icon: '😊' },
    { label: 'Years Experience', value: '5+', icon: '⏱️' },
    { label: 'Technologies', value: '20+', icon: '💻' }
  ]

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="stat-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <span className="stat-icon">{stat.icon}</span>
          <h3 className="stat-value">{stat.value}</h3>
          <p className="stat-label">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
