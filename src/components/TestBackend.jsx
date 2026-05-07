import { useState } from 'react';
import './TestBackend.css';

export default function TestBackend() {
  const [backendStatus, setBackendStatus] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [formData, setFormData] = useState({ number: 5 });

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3001';

  const testHealth = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/health`);
      if (res.ok) {
        const data = await res.json();
        setBackendStatus(data);
        setResponse(data);
      } else {
        throw new Error(`Error: ${res.status}`);
      }
    } catch (err) {
      setError(`❌ No se puede conectar al backend: ${err.message}`);
      setBackendStatus(null);
    } finally {
      setLoading(false);
    }
  };

  const testProcess = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/process`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ number: parseInt(formData.number) })
      });
      if (res.ok) {
        const data = await res.json();
        setResponse(data);
      } else {
        throw new Error(`Error: ${res.status}`);
      }
    } catch (err) {
      setError(`❌ Error al procesar: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const testInfo = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${BACKEND_URL}/api/info`);
      if (res.ok) {
        const data = await res.json();
        setResponse(data);
      } else {
        throw new Error(`Error: ${res.status}`);
      }
    } catch (err) {
      setError(`❌ Error al obtener info: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="test-backend">
      <h2>🧪 Pruebas del Backend</h2>
      
      <div className="status-info">
        <p>🔗 URL Backend: <code>{BACKEND_URL}</code></p>
        {backendStatus && (
          <div className="status-ok">
            ✅ Backend conectado y funcionando
          </div>
        )}
      </div>

      <div className="test-buttons">
        <button 
          onClick={testHealth} 
          disabled={loading}
          className="btn-primary"
        >
          {loading ? '⏳ Cargando...' : '🏥 Test Health'}
        </button>
        
        <button 
          onClick={testInfo} 
          disabled={loading}
          className="btn-info"
        >
          {loading ? '⏳ Cargando...' : 'ℹ️ Info Server'}
        </button>
      </div>

      <div className="process-section">
        <h3>Procesar un número</h3>
        <div className="input-group">
          <input 
            type="number" 
            value={formData.number}
            onChange={(e) => setFormData({ number: e.target.value })}
            placeholder="Ingresa un número"
          />
          <button 
            onClick={testProcess} 
            disabled={loading}
            className="btn-success"
          >
            {loading ? '⏳ Procesando...' : '✨ Procesar'}
          </button>
        </div>
      </div>

      {error && (
        <div className="error-box">
          <strong>Error:</strong>
          <p>{error}</p>
        </div>
      )}

      {response && (
        <div className="response-box">
          <strong>📊 Respuesta del Backend:</strong>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
