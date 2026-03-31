'use client'
import { useRef, useEffect, useCallback } from 'react'

export default function RegisterButton() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const animationIdRef = useRef<number>(0)
  const isHoveringRef = useRef(false)

  const drawInitialCircle = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, 60, 60)
    ctx.beginPath()
    ctx.arc(30, 30, 14, 0, Math.PI * 2)
    ctx.strokeStyle = 'white'
    ctx.lineWidth = 2
    ctx.stroke()
    ctx.fillStyle = '#111'
    ctx.fill()
  }, [])

  const updateIndicator = useCallback(
    (ctx: CanvasRenderingContext2D, expandingRadius: number) => {
      const button = buttonRef.current
      const canvas = canvasRef.current
      if (!button || !canvas) return

      const buttonRect = button.getBoundingClientRect()
      const canvasRect = canvas.getBoundingClientRect()
      const expandCenter = {
        x: buttonRect.left + buttonRect.width / 2 - canvasRect.left,
        y: buttonRect.top + buttonRect.height / 2 - canvasRect.top,
      }

      ctx.clearRect(0, 0, 60, 60)
      ctx.beginPath()
      ctx.arc(30, 30, 14, 0, Math.PI * 2)
      ctx.strokeStyle = 'white'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.fillStyle = '#111'
      ctx.fill()

      if (expandingRadius > 0) {
        ctx.save()
        ctx.beginPath()
        ctx.arc(30, 30, 14, 0, Math.PI * 2)
        ctx.clip()
        ctx.beginPath()
        ctx.arc(expandCenter.x, expandCenter.y, expandingRadius, 0, Math.PI * 2)
        ctx.fillStyle = '#f68627'
        ctx.fill()
        ctx.restore()
      }
    },
    []
  )

  const updateBackground = useCallback((radius: number) => {
    const button = buttonRef.current
    const bg = bgRef.current
    if (!button || !bg) return

    const buttonRect = button.getBoundingClientRect()
    const cx = buttonRect.left + buttonRect.width / 2
    const cy = buttonRect.top + buttonRect.height / 2
    const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
    const pct = (radius / diagonal) * 100
    bg.style.clipPath = `circle(${pct}% at ${cx}px ${cy}px)`
  }, [])

  useEffect(() => {
    const button = buttonRef.current
    const canvas = canvasRef.current
    if (!button || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    drawInitialCircle(ctx)

    const handleEnter = () => {
      isHoveringRef.current = true
      const startTime = performance.now()
      const diagonal = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2)
      cancelAnimationFrame(animationIdRef.current)

      const animate = (now: number) => {
        if (!isHoveringRef.current) return
        const progress = Math.min((now - startTime) / 500, 1)
        const eased = Math.pow(progress, 3.5)
        const radius = diagonal * eased
        updateIndicator(ctx, radius)
        updateBackground(radius)
        if (progress < 1) animationIdRef.current = requestAnimationFrame(animate)
      }
      animationIdRef.current = requestAnimationFrame(animate)
    }

    const handleLeave = () => {
      isHoveringRef.current = false
      cancelAnimationFrame(animationIdRef.current)
      const bg = bgRef.current
      if (bg) bg.style.clipPath = 'circle(0% at 50% 50%)'
      drawInitialCircle(ctx)
    }

    button.addEventListener('mouseenter', handleEnter)
    button.addEventListener('mouseleave', handleLeave)
    return () => {
      button.removeEventListener('mouseenter', handleEnter)
      button.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(animationIdRef.current)
    }
  }, [drawInitialCircle, updateIndicator, updateBackground])

  return (
    <div className="relative">
      {/* Full-screen color overlay that expands from button center on hover.
          Must be position:fixed. Do NOT add transform to any ancestor of this component
          or the clip-path coordinates will be wrong. */}
      <div
        ref={bgRef}
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundColor: '#00a7e4',
          backgroundImage:
            'linear-gradient(to right, #f68627 1px, transparent 1px), linear-gradient(to bottom, #f68627 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          clipPath: 'circle(0% at 50% 50%)',
          zIndex: -1,
        }}
      />
      {/* Floating canvas indicator above the button */}
      <canvas
        ref={canvasRef}
        width={60}
        height={60}
        className="absolute pointer-events-none"
        style={{
          top: '-100px',
          left: '80px',
          animation: 'float 2s ease-in-out infinite',
        }}
      />
      <button ref={buttonRef} className="button-56">
        Pre-Register
      </button>
    </div>
  )
}
