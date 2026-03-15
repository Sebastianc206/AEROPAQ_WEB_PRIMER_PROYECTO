import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'

// Páginas temporales (las irás creando una por una)
const Placeholder = ({ title }) => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '72px', fontFamily: 'sans-serif', color: '#1a7a4a', fontSize: '2rem', fontWeight: 700 }}>
    🚧 {title} — próximamente
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App