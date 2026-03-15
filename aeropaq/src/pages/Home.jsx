import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  const services = [
    {
      icon: '🇬🇹',
      title: 'Envíos Nacionales',
      desc: 'Cobertura en todos los departamentos de Guatemala con seguimiento en tiempo real.',
    },
    {
      title: 'Envíos Internacionales',
      desc: 'Enviamos a más de 30 países con tarifas competitivas y tiempos garantizados.',
    },
    {
      title: 'Recolección a Domicilio',
      desc: 'Pasamos por tu paquete donde estés. Sin que tengas que salir de casa.',
    },
    {
      title: 'Servicio Exprés',
      desc: 'Entrega el mismo día o en menos de 24 horas para envíos urgentes.',
    },
  ]

  const steps = [
    { number: '01', title: 'Solicitud', desc: 'Cotiza y registra tu envío en línea o por WhatsApp.' },
    { number: '02', title: 'Recolección', desc: 'Pasamos a recoger tu paquete en la dirección indicada.' },
    { number: '03', title: 'Despacho', desc: 'Tu paquete entra a nuestra red de distribución.' },
    { number: '04', title: 'Entrega', desc: 'El destinatario recibe el paquete con confirmación.' },
  ]

  return (
    <main className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero__bg" />
        <div className="hero__content">
          <span className="hero__badge"> Rápido · Seguro · Confiable</span>
          <h1 className="hero__title">
            Envíos que llegan<br />
            <span className="hero__title-accent">donde los necesitas</span>
          </h1>
          <p className="hero__subtitle">
            AeroPaq conecta personas y negocios con soluciones de paquetería
            nacional e internacional. Simple, rápido y sin complicaciones.
          </p>
          <div className="hero__actions">
            <Link to="/cotizador" className="btn btn--primary">
              Cotizar ahora →
            </Link>
            <Link to="/servicios" className="btn btn--ghost">
              Ver servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <strong>+50K</strong>
              <span>Paquetes entregados</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>22 depts.</strong>
              <span>Cobertura nacional</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <strong>30+ países</strong>
              <span>Cobertura internacional</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__card hero__card--1">
            <div>
              <p>Paquete en camino</p>
              <small>Estimado: hoy 4:00 PM</small>
            </div>
          </div>
          <div className="hero__card hero__card--2">
            <div>
              <p>¡Entregado!</p>
              <small>Guatemala → Quetzaltenango</small>
            </div>
          </div>
          <div className="hero__orb hero__orb--1" />
          <div className="hero__orb hero__orb--2" />
        </div>
      </section>

      {/* ── Servicios ── */}
      <section className="section services">
        <div className="section__inner">
          <div className="section__header">
            <span className="section__tag">Nuestros servicios</span>
            <h2 className="section__title">Todo lo que necesitas<br />para enviar</h2>
          </div>
          <div className="services__grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <Link to="/servicios" className="service-card__link">Saber más →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="section how">
        <div className="section__inner">
          <div className="section__header">
            <span className="section__tag">Proceso simple</span>
            <h2 className="section__title">¿Cómo funciona?</h2>
          </div>
          <div className="how__steps">
            {steps.map((step, i) => (
              <div className="how__step" key={i}>
                <div className="how__step-number">{step.number}</div>
                <div className="how__step-line" />
                <h3 className="how__step-title">{step.title}</h3>
                <p className="how__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="cta-banner">
        <div className="cta-banner__inner">
          <h2>¿Listo para enviar tu primer paquete?</h2>
          <p>Cotiza en segundos, sin registro previo.</p>
          <Link to="/cotizador" className="btn btn--white">
            Cotizar gratis →
          </Link>
        </div>
      </section>

    </main>
  )
}

export default Home