🛡️ Citizen Fraud Shield

ET AI Hackathon 2026 - Challenge 6: AI for Digital Public Safety

Citizen Fraud Shield is an AI-powered intelligence platform designed to proactively detect and disrupt organized digital fraud networks, "Digital Arrest" scams, and money mule operations. Instead of relying on reactive policing, this platform bridges isolated telecom and financial data silos, using advanced Graph Theory to identify connected threat syndicates in real time before mass victimization occurs.

🚀 The Architecture

The system is built as a highly scalable microservices monorepo:

Frontend (React.js): A dark-mode, citizen-facing portal for reporting suspicious calls and a dashboard for law enforcement to visualize network threats.

API Gateway (Node.js / Express): A robust backend that securely routes reports, logs them into the database, and orchestrates calls to the AI Engine.

Intelligence Engine (Python / FastAPI): The algorithmic core. It utilizes NetworkX to run Weakly Connected Component algorithms across transaction metadata, computing degree centrality to identify fraud ring hubs.

Database (PostgreSQL / Docker): Secure, containerized relational storage for scam reports and transaction history.

🛠️ Tech Stack

Frontend: React 18, CSS3

Backend: Node.js, Express.js, Axios

AI & Graph Engine: Python 3.9+, FastAPI, Uvicorn, NetworkX

Database & DevOps: PostgreSQL, Docker, Docker Compose

⚙️ Local Setup & Installation

To run this project locally, ensure you have Docker, Node.js (v18+), and Python (v3.9+) installed.

1. Initialize the Database

Boot up the PostgreSQL container. This will automatically execute the schema initialization.

docker-compose up -d


2. Start the AI Graph Engine

In a new terminal tab, initialize the Python environment and start the FastAPI server on port 8000:

cd engine-python
pip install -r requirements.txt
uvicorn main:app --reload --port 8000


3. Start the API Gateway

In a new terminal tab, install the Node dependencies and start the Express server on port 3000:

cd backend-node
npm install
node server.js


4. Launch the Frontend Application

In your final terminal tab, start the React development server:

cd frontend-react
npm install
npm run dev


Navigate to http://localhost:3000 (or 3001 depending on port availability) in your browser to access the portal.

🧪 Testing the Prototype (Hackathon Evaluation)

Because real-world telecom (Call Detail Records) and financial transaction data are highly restricted, this prototype utilizes a Synthetic Mock Data Strategy. The Python engine is pre-loaded with simulated cross-agency data nodes to demonstrate the graph algorithm.

To evaluate the system:

Navigate to the web portal.

Test an Isolated Node: Enter a random phone number (e.g., +911234567890). The system will return a safe, "Isolated" status.

Test a Syndicate Node: Enter the mock target number +919999999999. The AI engine will instantly trace the path through the mock financial database, revealing the hidden connections to money mule bank accounts and crypto wallets, flagging the network as CRITICAL.

🧠 Future Scope (Production)

In a real-world deployment, the synthetic Python mock data layer would be replaced by secure API hooks directly integrating with telecom provider CDR logs and financial institutional metadata.
