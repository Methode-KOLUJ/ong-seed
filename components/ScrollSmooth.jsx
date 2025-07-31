'use client'
import { useEffect } from 'react'
import Lenis from 'lenis'

export default function ScrollSmooth({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
     easing: (t) => t * (2 - t),
      smooth: true,
      // smoothTouch: false,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
