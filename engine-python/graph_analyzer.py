import networkx as nx

def detect_fraud_ring(target_phone: str):
    # Initialize an empty directed graph
    G = nx.DiGraph()
    
    # Mock Database Data: (Source, Target, Transaction Count)
    # You will eventually pull this from PostgreSQL
    edges = [
        ("+919876543210", "Bank_Account_A", 5),
        ("Bank_Account_A", "Crypto_Wallet_X", 3),
        ("+919999999999", "Bank_Account_A", 2), # Our target node
        ("Crypto_Wallet_X", "Offshore_Account", 1)
    ]
    
    G.add_weighted_edges_from(edges)
    
    if target_phone not in G:
        return {"status": "Isolated", "risk_level": "Low", "nodes": []}

    # Find the connected component containing the scammer
    components = list(nx.weakly_connected_components(G))
    target_ring = []
    
    for ring in components:
        if target_phone in ring:
            target_ring = list(ring)
            break
            
    # Calculate degree centrality to find the "hub" (the ring leader)
    centrality = nx.degree_centrality(G)
    ring_centrality = {node: centrality[node] for node in target_ring}
    sorted_hubs = sorted(ring_centrality, key=ring_centrality.get, reverse=True)
    
    return {
        "status": "Syndicate Detected",
        "risk_level": "CRITICAL",
        "syndicate_size": len(target_ring),
        "nodes_involved": target_ring,
        "key_hubs": sorted_hubs[:2]
    }