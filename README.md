# 🛡️ Citizen Fraud Shield

## AI-Powered Digital Fraud Detection & Public Safety Platform

**ET AI Hackathon 2026 – Challenge 6: AI for Digital Public Safety**

Citizen Fraud Shield is an AI-powered intelligence platform designed to proactively detect and disrupt organized digital fraud networks, Digital Arrest scams, money mule operations, cryptocurrency laundering networks, and other emerging cyber-enabled financial crimes.

Unlike traditional reactive approaches that investigate incidents after citizens become victims, Citizen Fraud Shield correlates telecom metadata, transaction patterns, digital identities, and citizen reports into a unified intelligence graph. Using Graph Theory, Network Analysis, and AI-driven risk scoring, the platform identifies connected fraud syndicates in real time, enabling law enforcement agencies, financial institutions, and cybercrime units to intervene before large-scale victimization occurs.

---

## 🎯 Problem Statement

Digital fraud has evolved from isolated scams into highly organized criminal ecosystems operating across multiple channels:

- Fraudulent phone calls and caller ID spoofing
- Digital Arrest scams
- Money mule bank accounts
- Cryptocurrency laundering networks
- Coordinated fraud rings operating across regions

Current detection systems often function in isolated silos. Telecom operators, banks, cybercrime portals, and citizens possess fragmented pieces of information, making it difficult to uncover hidden relationships between suspects, devices, accounts, and transactions.

Citizen Fraud Shield addresses this challenge by creating a connected intelligence graph that automatically discovers suspicious clusters, traces money flows, identifies syndicate structures, and highlights critical operators within criminal networks.

---

## 🚀 Key Features

### 👥 Citizen Reporting Portal
- Report suspicious phone numbers and fraud incidents.
- Receive instant risk assessment and threat classification.
- Crowdsource fraud intelligence from citizens.

### 🧠 AI Intelligence Engine
- Graph-based fraud detection.
- Automated syndicate discovery.
- Relationship mapping across entities.
- Centrality analysis for identifying key operators.

### 🔗 Network Visualization
- Interactive criminal network graph.
- Visual tracing of fraud relationships.
- Transaction and communication flow mapping.

### 🚨 Threat Classification
- Low Risk (Isolated Node)
- Medium Risk (Suspicious Activity)
- High Risk (Connected Entity)
- Critical Risk (Fraud Syndicate Member)

### 📊 Intelligence Dashboard
- Real-time risk scores.
- Syndicate size estimation.
- Key hub identification.
- Investigative insights for authorities.

---

## 🏗️ System Architecture

```text
┌─────────────────────────┐
│   React Frontend        │
│   Citizen Portal        │
└─────────────┬───────────┘
              │
              ▼
┌─────────────────────────┐
│   API Gateway           │
│   Node.js + Express     │
└─────────────┬───────────┘
              │
              ▼
┌─────────────────────────┐
│   AI Intelligence       │
│   FastAPI + NetworkX    │
└─────────────┬───────────┘
              │
              ▼
┌─────────────────────────┐
│ PostgreSQL Database     │
│ Scam Reports & Logs     │
└─────────────────────────┘
```

---

## 🛠️ Technology Stack

### Frontend
- React 18
- CSS3
- Axios

### Backend
- Node.js
- Express.js

### AI & Analytics
- Python 3.9+
- FastAPI
- Uvicorn
- NetworkX

### Database & DevOps
- PostgreSQL
- Docker
- Docker Compose

---

## 📂 Project Structure

```text
digital-public-safety/
│
├── frontend-react/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── package.json
│
├── backend-node/
│   ├── server.js
│   └── package.json
│
├── engine-python/
│   ├── main.py
│   ├── graph_analyzer.py
│   └── requirements.txt
│
├── db/
│   └── init.sql
│
├── docker-compose.yml
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

Ensure the following software is installed:

- Docker
- Docker Compose
- Node.js v18+
- Python 3.9+

---

### Step 1: Start PostgreSQL Database

Launch the PostgreSQL container from the project root directory.

```bash
docker-compose up -d
```

This automatically initializes the database schema using `init.sql`.

---

### Step 2: Start AI Intelligence Engine

Open a new terminal window:

```bash
cd engine-python
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

The FastAPI server will start on:

```text
http://localhost:8000
```

---

### Step 3: Start API Gateway

Open another terminal:

```bash
cd backend-node
npm install
node server.js
```

The Express API Gateway will start and connect the frontend to the AI engine.

---

### Step 4: Start Frontend Portal

Open a final terminal:

```bash
cd frontend-react
npm install
npm run dev
```

The citizen portal will be available at:

```text
http://localhost:3000
```

(or another available port if 3000 is occupied)

---

## 🔍 How It Works

### 1. Citizen Submits a Report

A user enters a suspicious phone number through the portal.

### 2. AI Graph Analysis

The AI engine searches the intelligence graph and identifies relationships among:

- Phone Numbers
- SIM Cards
- Bank Accounts
- Crypto Wallets
- Devices
- Reported Fraud Entities

### 3. Network Intelligence

Graph algorithms identify:

- Connected Components
- High-Risk Clusters
- Fraud Syndicates
- Central Operators

### 4. Threat Assessment

The system generates:

- Risk Score
- Syndicate Size
- Connected Entities
- Key Hubs

### 5. Investigation Support

Authorities receive actionable intelligence to disrupt fraud networks before additional victims are targeted.

---

## 🧪 Prototype Testing

### Why Synthetic Data?

Access to real-world telecom Call Detail Records (CDRs), banking transaction metadata, and financial intelligence data is heavily restricted due to privacy and regulatory requirements.

To safely demonstrate the platform's capabilities, the AI engine uses a synthetic intelligence dataset that simulates:

- Fraudulent phone numbers
- Mule bank accounts
- Cryptocurrency wallets
- Offshore entities
- Transaction relationships

---

## Test Case 1 – Isolated Number

### Input

```text
+911234567890
```

### Expected Output

```json
{
  "status": "Isolated",
  "risk_level": "Low",
  "syndicate_size": 0,
  "nodes_involved": ["None"],
  "key_hubs": ["None"]
}
```

### Interpretation

The number has no known relationships with suspicious entities and is classified as low risk.

---

## Test Case 2 – Known Fraud Syndicate Node

### Input

```text
+919999999999
```

### Expected Output

```json
{
  "status": "Syndicate Detected",
  "risk_level": "CRITICAL",
  "syndicate_size": 4,
  "nodes_involved": [
    "+919999999999",
    "Bank_Account_A",
    "Crypto_Wallet_X",
    "Offshore_Account"
  ],
  "key_hubs": [
    "Bank_Account_A",
    "Crypto_Wallet_X"
  ]
}
```

### Interpretation

The graph engine traces hidden relationships between the suspicious caller, a mule bank account, and a cryptocurrency wallet, exposing a coordinated fraud syndicate.

---

## 📈 Future Scope

The production-scale version of Citizen Fraud Shield is designed for integration with:

### 📞 Telecom Providers
- Real-time Call Detail Records (CDRs)
- SIM registration metadata
- Device intelligence feeds

### 🏦 Banking Institutions
- Transaction monitoring systems
- Mule account detection APIs
- Suspicious transaction alerts

### 🌐 Cryptocurrency Exchanges
- Wallet intelligence
- Blockchain transaction monitoring
- Laundering pattern detection

### 🏛️ Government Agencies
- National cybercrime reporting portals
- Fraud intelligence repositories
- Law enforcement investigation systems

### 🤖 Advanced AI Enhancements
- Predictive fraud detection
- Behavioral anomaly detection
- Large-scale fraud forecasting
- Automated threat intelligence generation

---

## 🌟 Impact

Citizen Fraud Shield transforms fraud prevention from a reactive process into a proactive intelligence operation. By unifying disconnected data sources into an AI-powered fraud intelligence graph, the platform enables faster investigations, early threat detection, and more effective disruption of organized digital crime networks.

**Protecting citizens. Detecting syndicates. Preventing fraud before it spreads.**
