import { useState } from 'react'
import './Home.css'

// Imágenes
import ImgCalculators from '../Imagenes/Calculators.png'
import ImgCamion from '../Imagenes/Camion.png'
import ImgMundo from '../Imagenes/Mundo icono.png'
import ImgHome from '../Imagenes/Home.png'
import ImgRayo from '../Imagenes/Rayo simbolo.png'
import ImgPedir from '../Imagenes/Pedir.png'
import ImgPaquete from '../Imagenes/Paquete.png'
import ImgCamion2 from '../Imagenes/Camion2.png'
import ImgChecklist from '../Imagenes/Checklist.png'
import ImgPlaneta from '../Imagenes/Planeta Tierra.png'
import ImgSoporte from '../Imagenes/Soporte.png'
import ImgEntrega from '../Imagenes/Entrega inmediata.png'
import ImgTelefono from '../Imagenes/Telefono.png'
import ImgCorreo from '../Imagenes/Correo.png'
import ImgUbicaciones from '../Imagenes/ubicaciones.png'
import ImgLogo from '../Imagenes/logo.png'

/* 
PAGINA DE INICIO.
*/
const Hero = () => {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="inicio">
      <div className="hero__bg" />
      <div className="container hero__inner">
        {/* Left */}
        <div className="hero__left">
          <h1 className="hero__title">
            Envíos<br />
            Rápidos y<br />
            confiables
          </h1>
          <p className="hero__subtitle">
            Soluciones logísticas sin fronteras. Desde entregas locales hasta envíos globales,
            aseguramos que tu paquete llegue a su destino siempre a tiempo
          </p>
          <div className="hero__btns">
            <button className="btn btn--blanco" onClick={() => scrollTo('cotizador')}>
              Cotizar envío
            </button>
            <button className="btn btn--outline" onClick={() => scrollTo('contacto')}>
              Contáctanos
            </button>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            <div className="hero__stat">
              <div className="hero__stat-icon">
                <img src={ImgPlaneta} alt="Países" className="stat-color" />
              </div>
              <div className="hero__stat-num">+ 150</div>
              <div className="hero__stat-lbl">Países</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-icon">
                <img src={ImgSoporte} alt="Soporte" />
              </div>
              <div className="hero__stat-num">24/7</div>
              <div className="hero__stat-lbl">Soporte</div>
            </div>
            <div className="hero__stat">
              <div className="hero__stat-icon">
                <img src={ImgEntrega} alt="Entrega a tiempo" />
              </div>
              <div className="hero__stat-num">99.7%</div>
              <div className="hero__stat-lbl">Entrega a tiempo</div>
            </div>
          </div>
        </div>

        {/* Right - Tracking card */}
        <div className="hero__right">
          <div className="hero__card">
            <div className="hero__card-header">
              <div className="hero__card-icon">
                <img src={ImgLogo} alt="AeroPaq" />
              </div>
              <div>
                <div className="hero__card-label">Seguimiento de pedido</div>
                <div className="hero__card-code">ABC-3214-4321</div>
              </div>
            </div>
            <div className="hero__card-steps">
              <div className="hero__card-step hero__card-step--done">
                <span className="step-dot step-dot--done" />
                <span>Paquete recogido</span>
                <span className="step-time">9:30 am</span>
              </div>
              <div className="hero__card-step hero__card-step--done">
                <span className="step-dot step-dot--done" />
                <span>Paquete en tránsito</span>
                <span className="step-time">3:30 pm</span>
              </div>
              <div className="hero__card-step hero__card-step--active">
                <span className="step-dot step-dot--active" />
                <span>En proceso de entrega</span>
                <span className="step-time"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* 
SERVICIOS
*/
const servicios = [
  {
    img: ImgCamion,
    titulo: 'Envíos Nacionales',
    desc: 'Entregas rápidas y confiables en todo el país con rastreo en tiempo real y opciones de seguro',
  },
  {
    img: ImgMundo,
    titulo: 'Envíos Internacionales',
    desc: 'Realiza envíos a todo el mundo con asistencia en trámites aduanales y tarifas internacionales competitivas',
  },
  {
    img: ImgHome,
    titulo: 'Recolección a Domicilio',
    desc: 'Conveniente servicio de recolección desde tu puerta. Agenda en el horario y lugar de tu preferencia',
  },
  {
    img: ImgRayo,
    titulo: 'Servicio Exprés',
    desc: 'Manejo prioritario y entrega acelerada para envíos urgentes. Opciones de entrega el mismo día disponibles.',
  },
]

const Servicios = () => (
  <section className="servicios" id="servicios">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Nuestros Servicios</h2>
        <p className="section-sub">
          Soluciones integrales de envío diseñadas para cubrir todas tus necesidades logísticas.
        </p>
      </div>
      <div className="servicios__grid">
        {servicios.map((s, i) => (
          <div className="servicios__card" key={i}>
            <div className="servicios__card-icon">
              <img src={s.img} alt={s.titulo} />
            </div>
            <h3 className="servicios__card-title">{s.titulo}</h3>
            <p className="servicios__card-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/*
COTIZADOR
*/
const TARIFAS = {
  misma_ciudad: { base: 25, por_kg: 5, dias: '1-2 días' },
  otro_departamento: { base: 55, por_kg: 8, dias: '2-4 días' },
  internacional: { base: 150, por_kg: 20, dias: '5-10 días' },
}
const NIVEL = { estandar: 1, expres: 1.6 }
const EXTRAS = { recoleccion: 20, seguro: 15 }

const Cotizador = () => {
  const [form, setForm] = useState({
    origen: '',
    destino: '',
    peso: '',
    ancho: '',
    alto: '',
    largo: '',
    tipo_ruta: 'misma_ciudad',
    nivel: 'estandar',
    recoleccion: false,
    seguro: false,
  })
  const [resultado, setResultado] = useState(null)
  const [errores, setErrores] = useState({})

  const handle = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    setErrores((prev) => ({ ...prev, [name]: '' }))
  }

  const validar = () => {
    const err = {}
    if (!form.origen.trim()) err.origen = 'El origen es requerido'
    if (!form.destino.trim()) err.destino = 'El destino es requerido'
    if (!form.peso || isNaN(form.peso) || Number(form.peso) <= 0)
      err.peso = 'Ingresa un peso válido (mayor a 0)'
    if (form.ancho && (isNaN(form.ancho) || Number(form.ancho) <= 0))
      err.ancho = 'Ancho inválido'
    if (form.alto && (isNaN(form.alto) || Number(form.alto) <= 0))
      err.alto = 'Alto inválido'
    if (form.largo && (isNaN(form.largo) || Number(form.largo) <= 0))
      err.largo = 'Largo inválido'
    return err
  }

  const calcular = (e) => {
    e.preventDefault()
    const err = validar()
    if (Object.keys(err).length > 0) {
      setErrores(err)
      return
    }

    const tarifa = TARIFAS[form.tipo_ruta]
    const peso = Number(form.peso)
    const costoBase = tarifa.base
    const costoPeso = peso * tarifa.por_kg

    let costoVolumen = 0
    if (form.ancho && form.alto && form.largo) {
      const volumen = (Number(form.ancho) * Number(form.alto) * Number(form.largo)) / 5000
      if (volumen > peso) costoVolumen = (volumen - peso) * tarifa.por_kg
    }

    const subtotal = (costoBase + costoPeso + costoVolumen) * NIVEL[form.nivel]
    const extraRecoleccion = form.recoleccion ? EXTRAS.recoleccion : 0
    const extraSeguro = form.seguro ? EXTRAS.seguro : 0
    const total = subtotal + extraRecoleccion + extraSeguro

    setResultado({
      costoBase: costoBase.toFixed(2),
      costoPeso: costoPeso.toFixed(2),
      costoVolumen: costoVolumen.toFixed(2),
      extraRecoleccion: extraRecoleccion.toFixed(2),
      extraSeguro: extraSeguro.toFixed(2),
      total: total.toFixed(2),
      tiempo: tarifa.dias,
    })
  }

  return (
    <section className="cotizador" id="cotizador">
      <div className="container">
        <div className="cotizador__box">
          <div className="cotizador__header">
            <div className="cotizador__header-icon">
              <img src={ImgCalculators} alt="Calculadora" />
            </div>
            <h2 className="cotizador__header-title">Calcular costos de envío</h2>
          </div>

          <form className="cotizador__form" onSubmit={calcular} noValidate>
            <div className="cotizador__row">
              <div className="cotizador__field">
                <label>Origen</label>
                <input type="text" name="origen" value={form.origen} onChange={handle} placeholder="Ciudad de origen" />
                {errores.origen && <span className="error">{errores.origen}</span>}
              </div>
              <div className="cotizador__field">
                <label>Destino</label>
                <input type="text" name="destino" value={form.destino} onChange={handle} placeholder="Ciudad de destino" />
                {errores.destino && <span className="error">{errores.destino}</span>}
              </div>
            </div>

            <div className="cotizador__row">
              <div className="cotizador__field">
                <label>Peso (kg)</label>
                <input type="number" name="peso" value={form.peso} onChange={handle} placeholder="ej. 2.5" min="0" step="0.1" />
                {errores.peso && <span className="error">{errores.peso}</span>}
              </div>
              <div className="cotizador__field cotizador__field--dims">
                <label>Dimensiones cm - opcional</label>
                <div className="cotizador__dims">
                  <input type="number" name="ancho" value={form.ancho} onChange={handle} placeholder="Ancho" min="0" max="9999" />
                  <input type="number" name="alto" value={form.alto} onChange={handle} placeholder="Alto" min="0" max="9999" />
                  <input type="number" name="largo" value={form.largo} onChange={handle} placeholder="Largo" min="0" max="9999" />
                </div>
                {(errores.ancho || errores.alto || errores.largo) && (
                  <span className="error">{errores.ancho || errores.alto || errores.largo}</span>
                )}
              </div>
            </div>

            {/* Tipo de ruta */}
            <div className="cotizador__field">
              <label>Tipo de servicio</label>
              <div className="cotizador__radios">
                {[
                  { val: 'misma_ciudad', lbl: 'Misma ciudad', sub: 'Opción más económica' },
                  { val: 'otro_departamento', lbl: 'Otro departamento', sub: 'Cobertura nacional' },
                  { val: 'internacional', lbl: 'Internacional', sub: 'A cualquier país' },
                ].map((r) => (
                  <label key={r.val} className={`cotizador__radio-label ${form.tipo_ruta === r.val ? 'cotizador__radio-label--active' : ''}`}>
                    <input type="radio" name="tipo_ruta" value={r.val} checked={form.tipo_ruta === r.val} onChange={handle} />
                    <span className="radio-text">
                      <strong>{r.lbl}</strong>
                      <small>{r.sub}</small>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Nivel */}
            <div className="cotizador__field">
              <label>Nivel de servicio</label>
              <div className="cotizador__radios">
                {[
                  { val: 'estandar', lbl: 'Envío Estándar', sub: 'Opción más económica' },
                  { val: 'expres', lbl: 'Envío Exprés', sub: 'Entrega prioritaria' },
                ].map((r) => (
                  <label key={r.val} className={`cotizador__radio-label ${form.nivel === r.val ? 'cotizador__radio-label--active' : ''}`}>
                    <input type="radio" name="nivel" value={r.val} checked={form.nivel === r.val} onChange={handle} />
                    <span className="radio-text">
                      <strong>{r.lbl}</strong>
                      <small>{r.sub}</small>
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Extras */}
            <div className="cotizador__field">
              <label>Servicios Extras</label>
              <div className="cotizador__checks">
                <label className={`cotizador__check-label ${form.recoleccion ? 'cotizador__check-label--active' : ''}`}>
                  <input type="checkbox" name="recoleccion" checked={form.recoleccion} onChange={handle} />
                  <span className="check-text">
                    <strong>Recoger pedido</strong>
                    <small>Recogeremos el pedido desde tu ubicación (+Q20)</small>
                  </span>
                </label>
                <label className={`cotizador__check-label ${form.seguro ? 'cotizador__check-label--active' : ''}`}>
                  <input type="checkbox" name="seguro" checked={form.seguro} onChange={handle} />
                  <span className="check-text">
                    <strong>Seguro contra pérdida y accidentes</strong>
                    <small>Protección total para tu paquete (+Q15)</small>
                  </span>
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn--azul btn--full">Calcular envío</button>
          </form>

          {/* Resultado */}
          {resultado && (
            <div className="cotizador__resultado">
              <h3>Cotización estimada</h3>
              <div className="resultado__desglose">
                <div className="resultado__row"><span>Costo base</span><span>Q{resultado.costoBase}</span></div>
                <div className="resultado__row"><span>Costo por peso</span><span>Q{resultado.costoPeso}</span></div>
                {Number(resultado.costoVolumen) > 0 && (
                  <div className="resultado__row"><span>Ajuste volumétrico</span><span>Q{resultado.costoVolumen}</span></div>
                )}
                {Number(resultado.extraRecoleccion) > 0 && (
                  <div className="resultado__row"><span>Recolección a domicilio</span><span>Q{resultado.extraRecoleccion}</span></div>
                )}
                {Number(resultado.extraSeguro) > 0 && (
                  <div className="resultado__row"><span>Seguro</span><span>Q{resultado.extraSeguro}</span></div>
                )}
                <div className="resultado__row resultado__row--total"><span>Total estimado</span><span>Q{resultado.total}</span></div>
              </div>
              <div className="resultado__tiempo">
                <span>⏱ Tiempo estimado de entrega: <strong>{resultado.tiempo}</strong></span>
              </div>
              <p className="resultado__nota">* Precios en quetzales (GTQ). Cotización estimada, puede variar.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/*
CÓMO FUNCIONA
*/
const pasos = [
  { img: ImgPedir,     titulo: 'Solicitud',   desc: 'Obtén una cotización y realiza tu orden de envío en línea o por teléfono.' },
  { img: ImgPaquete,   titulo: 'Recolección', desc: 'Recolectamos tu paquete en tu ubicación según tu conveniencia.' },
  { img: ImgCamion2,   titulo: 'Despacho',    desc: 'Tu paquete es procesado y despachado a través de nuestra red segura.' },
  { img: ImgChecklist, titulo: 'Entrega',     desc: 'Entrega segura en el destino con actualizaciones de rastreo en tiempo real.' },
]

const ComoFunciona = () => (
  <section className="como-funciona" id="como-funciona">
    <div className="container">
      <div className="section-header section-header--light">
        <h2 className="section-title">Como Funciona</h2>
        <p className="section-sub">Un proceso simple y transparente, desde la recolección hasta la entrega.</p>
      </div>
      <div className="pasos__grid">
        {pasos.map((p, i) => (
          <div className="paso" key={i}>
            <div className="paso__icon">
              <img src={p.img} alt={p.titulo} />
            </div>
            {i < pasos.length - 1 && <div className="paso__linea" />}
            <h3 className="paso__titulo">{p.titulo}</h3>
            <p className="paso__desc">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

/*
COBERTURA
*/
const Cobertura = () => (
  <section className="cobertura" id="cobertura">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title" style={{ color: 'white' }}>Nuestra Cobertura</h2>
      </div>
      <div className="cobertura__grid">
        <div className="cobertura__card">
          <h3>Cobertura Local</h3>
          <p>Cobertura completa en las principales ciudades con opciones de entrega el mismo día.</p>
          <ul>
            <li>✔ Áreas Metropolitanas.</li>
            <li>✔ Centros Urbanos.</li>
            <li>✔ Zonas Suburbanas.</li>
          </ul>
        </div>
        <div className="cobertura__card">
          <h3>Red Nacional</h3>
          <p>Entregas a nivel nacional llegando a cada departamento y región.</p>
          <ul>
            <li>✔ Todos los Departamentos.</li>
            <li>✔ Áreas Remotas.</li>
            <li>✔ Islas.</li>
          </ul>
        </div>
        <div className="cobertura__card">
          <h3>Cobertura global</h3>
          <p>Envíos a más de 150 países en todos los continentes.</p>
          <ul>
            <li>✔ Américas.</li>
            <li>✔ Europa.</li>
            <li>✔ Asia-Pacífico.</li>
            <li>✔ África.</li>
            <li>✔ Medio Oriente.</li>
          </ul>
        </div>
      </div>
      <div className="cobertura__banner">
        <h3>Logística Global, Experiencia Local</h3>
        <p>Con alianzas estratégicas y centros de distribución en todo el mundo, combinamos el alcance internacional con el conocimiento local para brindar un servicio excepcional donde sea que nos necesites.</p>
      </div>
    </div>
  </section>
)

/*
SOBRE NOSOTROS
*/
const SobreNosotros = () => (
  <section className="sobre" id="sobre-nosotros">
    <div className="container">
      <div className="section-header">
        <h2 className="section-title">Sobre AeroPaq</h2>
      </div>
      <div className="sobre__grid">
        {[
          { titulo: 'Nuestra Historia', texto: 'Fundada en 1995, AeroPaq evolucionó de un servicio local a un líder logístico global con tres décadas de trayectoria. Consolidamos una reputación basada en la innovación, conectando personas mediante soluciones de transporte eficientes.' },
          { titulo: 'Nuestra Misión', texto: 'Proveer soluciones de envío rápidas, seguras y rentables que conecten a empresas e individuos en todo el mundo. Optimizamos la cadena de suministro manteniendo altos estándares de calidad y sostenibilidad en cada entrega.' },
          { titulo: 'Nuestra Visión', texto: 'Ser el socio logístico más confiable, reconocido por nuestra responsabilidad ambiental y excelencia operativa a nivel internacional. Transformamos el comercio global creando conexiones fluidas que superan cualquier frontera geográfica.' },
          { titulo: 'Nuestros Valores', texto: 'Promovemos la integridad, la innovación constante y la excelencia operativa como pilares fundamentales de nuestra cultura. Priorizamos la satisfacción del cliente y el respeto absoluto hacia nuestro equipo y socios estratégicos.' },
        ].map((item, i) => (
          <div className="sobre__card" key={i}>
            <h3 className="sobre__card-title">{item.titulo}</h3>
            <p className="sobre__card-text">{item.texto}</p>
          </div>
        ))}
      </div>
      <div className="sobre__porque">
        <div className="sobre__porque-left">
          <h3>¿Por qué escoger AeroPaq?</h3>
          <ul>
            <li>Tasa de entrega a tiempo del 99.8%, líder en la industria.</li>
            <li>Soporte 24/7 en múltiples idiomas.</li>
            <li>Tecnología de rastreo avanzada para actualizaciones en tiempo real.</li>
            <li>Opciones de envío ecológicas y programas de carbono neutral.</li>
            <li>Precios competitivos con una estructura de tarifas transparente.</li>
          </ul>
        </div>
        <div className="sobre__porque-right">
          {[
            { num: '98%', lbl: 'Satisfacción del Cliente' },
            { num: '25+', lbl: 'Años en el Mercado' },
            { num: '300+', lbl: 'Miembros del Equipo' },
            { num: '5,000+', lbl: 'Socios Globales' },
          ].map((s, i) => (
            <div className="sobre__stat" key={i}>
              <span className="sobre__stat-lbl">{s.lbl}</span>
              <span className="sobre__stat-num">{s.num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

/*
PREGUNTAS FRECUENTES
 */
const faqs = [
  { pregunta: '¿Cómo puedo rastrear mi envío?', respuesta: 'Puedes rastrear tu paquete ingresando el número de seguimiento en nuestra página principal o llamando al servicio al cliente 24/7.' },
  { pregunta: '¿Qué artículos está prohibido enviar?', respuesta: 'Los artículos prohibidos incluyen materiales peligrosos, sustancias inflamables, explosivos, drogas ilegales, armas y productos perecederos sin el embalaje adecuado.' },
  { pregunta: '¿Cuánto tiempo tarda un envío internacional?', respuesta: 'Los envíos internacionales estándar tardan entre 5 y 10 días hábiles. El servicio exprés puede reducir este tiempo a 2-3 días.' },
  { pregunta: '¿Ofrecen seguro para los paquetes?', respuesta: 'Sí, ofrecemos seguro opcional contra pérdida y accidentes por un costo adicional de Q15.' },
  { pregunta: '¿Cuál es el peso máximo permitido por paquete?', respuesta: 'Para envíos nacionales aceptamos paquetes de hasta 70 kg. Para internacionales el límite varía según el destino.' },
  { pregunta: '¿Realizan recolección a domicilio?', respuesta: 'Sí, ofrecemos recolección a domicilio. Puedes programarlo al crear tu envío con un costo adicional de Q20.' },
]

const FAQ = () => {
  const [abierto, setAbierto] = useState(null)
  return (
    <section className="faq" id="faq">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Preguntas Frecuentes</h2>
        </div>
        <div className="faq__lista">
          {faqs.map((f, i) => (
            <div key={i} className={`faq__item ${abierto === i ? 'faq__item--open' : ''}`} onClick={() => setAbierto(abierto === i ? null : i)}>
              <div className="faq__pregunta">
                <span>{f.pregunta}</span>
                <span className="faq__chevron">{abierto === i ? '∧' : '∨'}</span>
              </div>
              {abierto === i && <div className="faq__respuesta">{f.respuesta}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/*
 CONTACTO 
*/
const Contacto = () => {
  const [form, setForm] = useState({ nombre: '', correo: '', telefono: '', mensaje: '' })
  const [errores, setErrores] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [exito, setExito] = useState(false)

  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw3bgFoOsVY3J-vdZa48gC_OuRuIWfXfz2NnZUtiZooZVdGhE06TZxxoOY6Ei_oAQoK8A/exec'

  const handle = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setErrores((prev) => ({ ...prev, [name]: '' }))
    setExito(false)
  }

  const validar = () => {
    const err = {}
    if (!form.nombre.trim() || form.nombre.trim().length < 2)
      err.nombre = 'El nombre debe tener al menos 2 caracteres'
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailReg.test(form.correo))
      err.correo = 'Ingresa un correo válido'
    const telReg = /^[\d\s\+\-\(\)]{7,15}$/
    if (!telReg.test(form.telefono))
      err.telefono = 'Ingresa un teléfono válido (7-15 dígitos)'
    if (!form.mensaje.trim() || form.mensaje.trim().length < 10)
      err.mensaje = 'El mensaje debe tener al menos 10 caracteres'
    return err
  }
  

  const enviar = async (e) => {
    e.preventDefault()
    const err = validar()
    if (Object.keys(err).length > 0) {
      setErrores(err)
      return
    }

    setEnviando(true)

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      setExito(true)
      setForm({ nombre: '', correo: '', telefono: '', mensaje: '' })
    } catch (error) {
      alert('Hubo un error al enviar. Intenta de nuevo.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Contáctanos</h2>
        </div>
        <div className="contacto__grid">
          <div className="contacto__form-box">
            <div className="contacto__form-header">
              <h3>Mándanos un mensaje</h3>
            </div>
            {exito && (
              <div className="contacto__exito">
                ✅ ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
              </div>
            )}
            <form onSubmit={enviar} noValidate>
              <div className="form__row">
                <div className="form__field">
                  <label>Nombre</label>
                  <input type="text" name="nombre" value={form.nombre} onChange={handle} placeholder="Tu nombre completo" disabled={enviando} />
                  {errores.nombre && <span className="error">{errores.nombre}</span>}
                </div>
                <div className="form__field">
                  <label>Correo</label>
                  <input type="email" name="correo" value={form.correo} onChange={handle} placeholder="tu@correo.com" disabled={enviando} />
                  {errores.correo && <span className="error">{errores.correo}</span>}
                </div>
              </div>
              <div className="form__field">
                <label>Número de teléfono</label>
                <input type="tel" name="telefono" value={form.telefono} onChange={handle} placeholder="+502 1234-5678" disabled={enviando} />
                {errores.telefono && <span className="error">{errores.telefono}</span>}
              </div>
              <div className="form__field">
                <label>Mensaje</label>
                <textarea name="mensaje" value={form.mensaje} onChange={handle} placeholder="¿En qué podemos ayudarte?" rows={4} disabled={enviando} />
                {errores.mensaje && <span className="error">{errores.mensaje}</span>}
              </div>
              <button type="submit" className="btn btn--azul btn--full" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </form>
          </div>

          <div className="contacto__info">
            <div className="contacto__info-box">
              <h3>Información de contactos</h3>
              <div className="contacto__info-item">
                <div className="info-icon"><img src={ImgTelefono} alt="Teléfono" /></div>
                <div>
                  <strong>Teléfono</strong>
                  <p>(+502) 1234 - 4567</p>
                  <p>(+502) 4321 - 1234</p>
                </div>
              </div>
              <div className="contacto__info-item">
                <div className="info-icon"><img src={ImgCorreo} alt="Correo" /></div>
                <div>
                  <strong>Correos</strong>
                  <p>soporte@aeropaq.com</p>
                  <p>ventas@aeropaq.com</p>
                </div>
              </div>
              <div className="contacto__info-item">
                <div className="info-icon"><img src={ImgUbicaciones} alt="Ubicaciones" /></div>
                <div>
                  <strong>Ubicaciones</strong>
                  <p>Avenida La Reforma 12-01, Zona 10</p>
                </div>
              </div>
            </div>
            <div className="contacto__horarios">
              <h3>Horarios</h3>
              <div className="horario__row"><span>Lunes - Viernes</span><span>8:00 AM - 8:00 PM</span></div>
              <div className="horario__row"><span>Sábados</span><span>9:00 AM - 6:00 PM</span></div>
              <div className="horario__row"><span>Domingos</span><span>10:00 AM - 4:00 PM</span></div>
              <p className="horario__nota">Atención al Cliente 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


const Home = () => (
  <main>
    <Hero />
    <Servicios />
    <Cotizador />
    <ComoFunciona />
    <Cobertura />
    <SobreNosotros />
    <FAQ />
    <Contacto />
  </main>
)

export default Home
