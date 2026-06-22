const express = require('express');
const { Pool } = require('pg');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend to connect

// Connect to Postgres (via Docker)
// Connect to Postgres (via Docker on our new custom port)
const pool = new Pool({
  user: 'safety_admin',
  host: 'localhost',
  database: 'fraud_db_new',
  password: 'supersecretpassword',
  port: 5435, 
});

app.post('/api/report', async (req, res) => {
    const { scammerPhone, transcript } = req.body;

    try {
        // 1. Save to Database
        await pool.query(
            `INSERT INTO scam_reports (scammer_phone, transcript) VALUES ($1, $2)`, 
            [scammerPhone, transcript]
        );

        // 2. Ping Python Engine for real-time Graph Analysis
        const pythonResponse = await axios.post('http://localhost:8000/analyze', {
            scammerPhone: scammerPhone
        });

        // 3. Return combined data to frontend
        res.json({
            message: "Report saved successfully.",
            intelligence: pythonResponse.data
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.listen(3000, () => console.log('Node API running on port 3000'));