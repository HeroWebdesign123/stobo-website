"use client"
import { useEffect, useRef } from "react"
import HeroScene from "../components/HeroScene"

export default function Home() {
  const maskRef = useRef(null)

  // Simpler Scroll-Effekt ohne GSAP
  useEffect(() => {
    const onScroll = () => {
      if (!maskRef.current) return
      const scrollY = window.scrollY
      const winHeight = window.innerHeight
      // background-position x von 0% bis 100% je nach scroll
      const progress = Math.min(scrollY / winHeight, 1) * 100
      maskRef.current.style.backgroundPosition = `${progress}% 0`
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <section className="hero-wrapper">
        <HeroScene />
        <div className="hero-content">
          <h1>Präzision in Perfektion</h1>
          <p>Technische Lösungen aus Köln, modern und innovativ.</p>
        </div>
      </section>

      <section className="text-mask">
        <h2 className="mask-text" ref={maskRef}>
          Technik entsteht nicht zufällig. Sie entsteht durch Präzision.
        </h2>
      </section>

      <section style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
        <h3>Unsere Leistungen</h3>
        <p>
          Von industriellen Automatisierungen bis zu smarten Steuerungssystemen –
          wir realisieren maßgeschneiderte technische Lösungen für unsere Kunden.
        </p>
      </section>
    </>
  )
}
