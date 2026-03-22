import './Footer.css'

const Footer = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><button onClick={() => scrollTo('servicios')}>Servicios</button></li>
            <li><button onClick={() => scrollTo('cotizador')}>Calculadora de envío</button></li>
            <li><button onClick={() => scrollTo('como-funciona')}>Como funciona</button></li>
            <li><button onClick={() => scrollTo('cobertura')}>Cobertura</button></li>
            <li><button onClick={() => scrollTo('sobre-nosotros')}>Sobre nosotros</button></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Recursos</h4>
          <ul>
            <li><button onClick={() => scrollTo('inicio')}>Rastrear Paquete</button></li>
            <li><button onClick={() => scrollTo('cotizador')}>Guías de Envío</button></li>
            <li><button onClick={() => scrollTo('faq')}>Preguntas Frecuentes</button></li>
            <li><button>Términos y Condiciones</button></li>
            <li><button>Política de Privacidad</button></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Información de Contacto</h4>
          <p>(+502) 1234 - 4567 (Soporte 24/7)</p>
          <p>soporte@aeropaq.com</p>
          <p>Avenida La Reforma 12-01, Zona 10</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© 2026 AeroPaq. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer