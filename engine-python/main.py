from fastapi import FastAPI
from pydantic import BaseModel
from graph_analyzer import detect_fraud_ring

app = FastAPI()

class ReportPayload(BaseModel):
    scammerPhone: str

@app.post("/analyze")
async def analyze_network(payload: ReportPayload):
    # Run the graph algorithm
    result = detect_fraud_ring(payload.scammerPhone)
    return result

# Run with: uvicorn main:app --reload --port 8000