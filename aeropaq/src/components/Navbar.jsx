import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/servicios', label: 'Servicios' },
    { to: '/cobertura', label: 'Cobertura' },
    { to: '/como-funciona', label: 'Cómo Funciona' },
    { to: '/sobre-nosotros', label: 'Nosotros' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo">
          <span className="navbar__logo-icon">✈</span>
          <span className="navbar__logo-text">Aero<strong>Paq</strong></span>
        </Link>

        {/* Links desktop */}
        <ul className="navbar__links">
          {navLinks.map(link => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`navbar__link ${location.pathname === link.to ? 'navbar__link--active' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/cotizador" className="navbar__cta">
          Cotizar Envío
        </Link>

        {/* Hamburger mobile */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map(link => (
          <Link
            key={link.to}
            to={link.to}
            className={`navbar__mobile-link ${location.pathname === link.to ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Link to="/cotizador" className="navbar__mobile-cta" onClick={() => setMenuOpen(false)}>
          Cotizar Envío
        </Link>
      </div>
    </nav>
  )
}

export default Navbar