CREATE TABLE users (
    phone_number VARCHAR(15) PRIMARY KEY,
    risk_score INT DEFAULT 0
);

CREATE TABLE scam_reports (
    report_id SERIAL PRIMARY KEY,
    scammer_phone VARCHAR(15) NOT NULL,
    transcript TEXT,
    reported_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed some dummy data for the prototype
INSERT INTO scam_reports (scammer_phone, transcript) VALUES ('+919999999999', 'Digital arrest threat');