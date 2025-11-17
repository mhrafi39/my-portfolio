import React, { useRef, useEffect, useState } from 'react'

export default function Hero3D() {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    
    // Matrix rain effect
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops = Array(columns).fill(1)
    
    // Tech characters (binary, hex, symbols)
    const chars = '01ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝABCDEF0123456789<>[]{}()#$%^&*+=!?~|'
    
    // Glitch lines
    const glitchLines = []
    const createGlitch = () => {
      if (Math.random() > 0.98) {
        glitchLines.push({
          y: Math.random() * canvas.height,
          speed: Math.random() * 3 + 2,
          width: Math.random() * 50 + 100,
          opacity: 1
        })
      }
    }
    
    // Floating code snippets
    const codeSnippets = [
      'function()',
      'const x = 0',
      'import {',
      'export default',
      'async await',
      'return true',
      '=> {}',
      'console.log',
      'npm install',
      'git commit',
      '<Component />',
      'useState()',
      'useEffect()',
      'className=',
      'onClick={}'
    ]
    
    const floatingCode = []
    const createFloatingCode = () => {
      if (Math.random() > 0.97) {
        floatingCode.push({
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          x: Math.random() * canvas.width,
          y: canvas.height + 20,
          speed: Math.random() * 1.5 + 0.5,
          opacity: 1,
          size: Math.random() * 6 + 10
        })
      }
    }
    
    // Binary streams
    const binaryStreams = []
    for (let i = 0; i < 5; i++) {
      binaryStreams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join(''),
        speed: Math.random() * 2 + 1,
        opacity: 0.8
      })
    }
    
    // Scan lines
    let scanLineY = 0
    
    function draw() {
      // Fade effect for trail
      ctx.fillStyle = 'rgba(5, 8, 16, 0.08)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      // Matrix rain
      ctx.font = fontSize + 'px monospace'
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        // Color gradient based on position
        const hue = (y / canvas.height) * 60 + 175 // cyan to turquoise
        ctx.fillStyle = `hsl(${hue}, 100%, ${Math.random() * 30 + 50}%)`
        ctx.fillText(char, x, y)
        
        // Add glow effect to some characters
        if (Math.random() > 0.98) {
          ctx.shadowBlur = 15
          ctx.shadowColor = '#00f5ff'
          ctx.fillStyle = '#00f5ff'
          ctx.fillText(char, x, y)
          ctx.shadowBlur = 0
        }
        
        // Reset drop randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
      
      // Glitch lines
      createGlitch()
      glitchLines.forEach((line, index) => {
        ctx.fillStyle = `rgba(0, 245, 255, ${line.opacity * 0.3})`
        ctx.fillRect(0, line.y, line.width, 2)
        ctx.fillStyle = `rgba(10, 255, 237, ${line.opacity * 0.2})`
        ctx.fillRect(line.width, line.y, line.width * 0.5, 2)
        
        line.y -= line.speed
        line.opacity -= 0.01
        
        if (line.opacity <= 0) {
          glitchLines.splice(index, 1)
        }
      })
      
      // Floating code
      createFloatingCode()
      ctx.font = '12px "Courier New", monospace'
      floatingCode.forEach((code, index) => {
        ctx.fillStyle = `rgba(0, 245, 255, ${code.opacity})`
        ctx.font = `${code.size}px "Courier New", monospace`
        ctx.fillText(code.text, code.x, code.y)
        
        // Add subtle glow
        if (code.opacity > 0.5) {
          ctx.shadowBlur = 8
          ctx.shadowColor = '#00f5ff'
          ctx.fillText(code.text, code.x, code.y)
          ctx.shadowBlur = 0
        }
        
        code.y -= code.speed
        if (code.y < canvas.height / 2) {
          code.opacity -= 0.005
        }
        
        if (code.opacity <= 0 || code.y < -50) {
          floatingCode.splice(index, 1)
        }
      })
      
      // Binary streams
      ctx.font = '10px monospace'
      binaryStreams.forEach(stream => {
        ctx.fillStyle = `rgba(123, 47, 247, ${stream.opacity * 0.6})`
        ctx.fillText(stream.text, stream.x, stream.y)
        
        stream.y += stream.speed
        if (stream.y > canvas.height) {
          stream.y = -20
          stream.x = Math.random() * canvas.width
          stream.text = Array(20).fill(0).map(() => Math.random() > 0.5 ? '1' : '0').join('')
        }
      })
      
      // Animated scan line
      ctx.strokeStyle = 'rgba(0, 245, 255, 0.3)'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, scanLineY)
      ctx.lineTo(canvas.width, scanLineY)
      ctx.stroke()
      
      // Scan line glow
      const gradient = ctx.createLinearGradient(0, scanLineY - 20, 0, scanLineY + 20)
      gradient.addColorStop(0, 'rgba(0, 245, 255, 0)')
      gradient.addColorStop(0.5, 'rgba(0, 245, 255, 0.1)')
      gradient.addColorStop(1, 'rgba(0, 245, 255, 0)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, scanLineY - 20, canvas.width, 40)
      
      scanLineY += 2
      if (scanLineY > canvas.height) scanLineY = 0
      
      // Grid overlay
      if (Math.random() > 0.95) {
        ctx.strokeStyle = 'rgba(0, 245, 255, 0.1)'
        ctx.lineWidth = 1
        const gridSize = 50
        for (let i = 0; i < canvas.width; i += gridSize) {
          ctx.beginPath()
          ctx.moveTo(i, 0)
          ctx.lineTo(i, canvas.height)
          ctx.stroke()
        }
        for (let i = 0; i < canvas.height; i += gridSize) {
          ctx.beginPath()
          ctx.moveTo(0, i)
          ctx.lineTo(canvas.width, i)
          ctx.stroke()
        }
      }
    }
    
    const interval = setInterval(draw, 50)
    
    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])
  
  return (
    <div className="hero-3d">
      <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}
