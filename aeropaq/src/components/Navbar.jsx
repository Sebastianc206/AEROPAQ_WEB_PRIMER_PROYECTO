import { useState, useEffect } from 'react'
import './Navbar.css'
import Logo from '../Imagenes/logo.png'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        {/* Logo */}
        <div className="navbar__logo" onClick={() => scrollTo('inicio')}>
          <img src={Logo} alt="AeroPaq" className="navbar__logo-img" />
          <span className="navbar__logo-text">
            AERO<strong>PAQ</strong>
          </span>
        </div>

        {/* Links */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><button onClick={() => scrollTo('servicios')}>Servicios</button></li>
          <li><button onClick={() => scrollTo('cobertura')}>Cobertura</button></li>
          <li><button onClick={() => scrollTo('como-funciona')}>Como funciona</button></li>
          <li><button onClick={() => scrollTo('sobre-nosotros')}>Sobre nosotros</button></li>
          <li><button onClick={() => scrollTo('faq')}>Preguntas Frecuentes</button></li>
          <li><button onClick={() => scrollTo('contacto')}>Contactos</button></li>
        </ul>

        {/* CTA */}
        <button className="navbar__cta" onClick={() => scrollTo('cotizador')}>
          Cotizar envío
        </button>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar