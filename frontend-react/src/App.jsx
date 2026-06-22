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
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h2>🛡️ Citizen Fraud Shield Portal</h2>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: '2rem' }}>
        <input 
          type="text" 
          placeholder="Scammer Phone (e.g., +919999999999)" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required 
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '300px' }}
        />
        <textarea 
          placeholder="Call Transcript / Details" 
          value={transcript} 
          onChange={(e) => setTranscript(e.target.value)} 
          style={{ display: 'block', margin: '10px 0', padding: '10px', width: '300px', height: '100px' }}
        />
        <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {loading ? 'Analyzing...' : 'Submit Report & Analyze Network'}
        </button>
      </form>

      {result && (
        <div style={{ background: '#f4f4f4', padding: '20px', borderRadius: '8px' }}>
          <h3>Network Intelligence Report</h3>
          <p><strong>Status:</strong> <span style={{ color: result.risk_level === 'CRITICAL' ? 'red' : 'green' }}>{result.status}</span></p>
          <p><strong>Syndicate Size:</strong> {result.syndicate_size} nodes</p>
          <p><strong>Key Hubs (Ring Leaders/Main Accounts):</strong> {result.key_hubs?.join(', ')}</p>
          <p><strong>All Nodes Involved:</strong> {result.nodes_involved?.join(' ➔ ')}</p>
        </div>
      )}
    </div>
  );
}

export default App;