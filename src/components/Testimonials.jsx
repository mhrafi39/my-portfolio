import React from 'react'
import { motion } from 'framer-motion'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      text: 'Outstanding work! The attention to detail and innovative solutions exceeded our expectations.'
    },
    {
      name: 'Mike Chen',
      role: 'Product Manager, InnovateCo',
      text: 'A true professional who delivers high-quality work on time. Highly recommended!'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Designer, CreativeHub',
      text: 'Great collaboration and excellent technical skills. Made our vision come to life perfectly.'
    }
  ]

  return (
    <div className="testimonials">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          className="quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 }}
          viewport={{ once: true }}
        >
          <div className="quote-mark">"</div>
          <p>{testimonial.text}</p>
          <footer>
            <strong>{testimonial.name}</strong>
            <span>{testimonial.role}</span>
          </footer>
        </motion.div>
      ))}
    </div>
  )
}
