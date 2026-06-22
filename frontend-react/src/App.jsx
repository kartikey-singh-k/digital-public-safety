import React, { useState } from 'react';
import './App.css'; // Add some basic dark-mode CSS here later

function App() {
  const [phone, setPhone] = useState('');
  const [transcript, setTranscript] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scammerPhone: phone, transcript })
      });
      const data = await response.json();
      setResult(data.intelligence);
    } catch (err) {
      console.error("Failed to fetch data", err);
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      <h2 className="header-title">🛡️ Citizen Fraud Shield</h2>
      
      <form onSubmit={handleSubmit} className="report-form">
        <input 
          type="text" 
          className="form-input"
          placeholder="Scammer Phone (e.g., +919999999999)" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
        />
        <textarea 
          className="form-textarea"
          placeholder="Call Transcript / Details" 
          value={transcript} 
          onChange={(e) => setTranscript(e.target.value)} 
        />
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Analyzing Network...' : 'Submit Report & Analyze'}
        </button>
      </form>

      {result && (
        <div className="results-card">
          <h3>Network Intelligence Report</h3>
          <p><strong>Status:</strong> <span className={result.risk_level === 'CRITICAL' ? 'status-critical' : 'status-safe'}>{result.status}</span></p>
          <p><strong>Syndicate Size:</strong> {result.syndicate_size} nodes</p>
          <p><strong>Key Hubs:</strong> {result.key_hubs?.join(', ')}</p>
          <p><strong>Nodes Involved:</strong> {result.nodes_involved?.join(' ➔ ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;