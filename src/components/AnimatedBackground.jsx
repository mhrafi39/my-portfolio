import React, { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationFrameId
    let mouseX = 0
    let mouseY = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Particle system
    const particles = []
    const particleCount = 80

    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.opacity = Math.random() * 0.5 + 0.2
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height - canvas.height
        this.speed = Math.random() * 0.5 + 0.2
        this.radius = Math.random() * 2 + 1
        this.hue = Math.random() * 20 + 175 // Cyan to turquoise range
      }

      update() {
        this.y += this.speed
        
        // Mouse interaction
        const dx = mouseX - this.x
        const dy = mouseY - this.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        
        if (dist < 100) {
          const angle = Math.atan2(dy, dx)
          this.x -= Math.cos(angle) * 2
          this.y -= Math.sin(angle) * 2
        }

        if (this.y > canvas.height) {
          this.reset()
        }
      }

      draw() {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${this.hue}, 100%, 60%, ${this.opacity})`
        ctx.fill()
        
        // Glow effect
        ctx.shadowBlur = 10
        ctx.shadowColor = `hsl(${this.hue}, 100%, 60%)`
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Waves
    class Wave {
      constructor(y, amplitude, frequency, speed) {
        this.y = y
        this.amplitude = amplitude
        this.frequency = frequency
        this.speed = speed
        this.offset = 0
      }

      update() {
        this.offset += this.speed
      }

      draw() {
        ctx.beginPath()
        ctx.moveTo(0, this.y)
        
        for (let x = 0; x < canvas.width; x++) {
          const y = this.y + Math.sin((x * this.frequency) + this.offset) * this.amplitude
          ctx.lineTo(x, y)
        }
        
        ctx.strokeStyle = 'rgba(0, 245, 255, 0.1)'
        ctx.lineWidth = 2
        ctx.stroke()
      }
    }

    const waves = [
      new Wave(canvas.height * 0.3, 30, 0.01, 0.02),
      new Wave(canvas.height * 0.6, 20, 0.015, 0.015),
      new Wave(canvas.height * 0.8, 25, 0.008, 0.025)
    ]

    // Mouse move handler
    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(6, 7, 10, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw waves
      waves.forEach(wave => {
        wave.update()
        wave.draw()
      })

      // Update and draw particles
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0, 245, 255, ${0.2 * (1 - dist / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none'
      }}
    />
  )
}
