CREATE DATABASE itsneuropharmaai;
USE itsneuropharmaai;

CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('Researcher', 'Admin', 'Patient') NOT NULL,
    status ENUM('Active', 'Inactive') DEFAULT 'Active'
);

-- Clinical Trials table
CREATE TABLE clinical_trials (
    id VARCHAR(50) PRIMARY KEY,
    drug_name VARCHAR(100) NOT NULL,
    phase ENUM('Phase 1', 'Phase 2', 'Phase 3', 'Phase 4') NOT NULL,
    status ENUM('Active', 'Completed', 'Terminated') NOT NULL,
    start_date DATE
);

-- Drugs table
CREATE TABLE drugs (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    dosage VARCHAR(50),
    status ENUM('Active', 'Discontinued') DEFAULT 'Active'
);

-- Patients table
CREATE TABLE patients (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    city VARCHAR(100),
    state VARCHAR(100)
);

-- Prescriptions table
CREATE TABLE prescriptions (
    id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50),
    drug_name VARCHAR(100),
    dosage VARCHAR(50),
    date_issued DATE,
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

-- Adverse Effects table
CREATE TABLE adverse_effects (
    id VARCHAR(50) PRIMARY KEY,
    drug_name VARCHAR(100),
    effect VARCHAR(255),
    severity ENUM('Mild', 'Moderate', 'Severe')
);

-- Predictions table
CREATE TABLE predictions (
    id VARCHAR(50) PRIMARY KEY,
    drug_name VARCHAR(100),
    success_rate INT,
    confidence_score DECIMAL(4,2)
);

-- Trial Phases table
CREATE TABLE trial_phases (
    id VARCHAR(50) PRIMARY KEY,
    trial_id VARCHAR(50),
    drug_name VARCHAR(100),
    phase ENUM('Phase 1', 'Phase 2', 'Phase 3', 'Phase 4'),
    start_date DATE,
    FOREIGN KEY (trial_id) REFERENCES clinical_trials(id)
);

-- Patient Enrollments table
CREATE TABLE patient_enrollments (
    id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50),
    trial_id VARCHAR(50),
    enrollment_date DATE,
    status ENUM('Active', 'Completed', 'Withdrawn'),
    FOREIGN KEY (patient_id) REFERENCES patients(id),
    FOREIGN KEY (trial_id) REFERENCES clinical_trials(id)
);

-- Health Conditions table
CREATE TABLE health_conditions (
    id VARCHAR(50) PRIMARY KEY,
    patient_id VARCHAR(50),
    condition VARCHAR(100),
    diagnosis_date DATE,
    severity ENUM('Mild', 'Moderate', 'Severe'),
    FOREIGN KEY (patient_id) REFERENCES patients(id)
);

-- Pharmaceutical Companies table
CREATE TABLE pharmaceutical_companies (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    active_trials INT
);

-- Researchers table
CREATE TABLE researchers (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    field VARCHAR(100),
    trials_conducted INT
);

-- Reports table
CREATE TABLE reports (
    id VARCHAR(50) PRIMARY KEY,
    trial_id VARCHAR(50),
    title VARCHAR(255),
    generated_date DATE,
    FOREIGN KEY (trial_id) REFERENCES clinical_trials(id)
);

-- AI Models table
CREATE TABLE ai_models (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100),
    accuracy INT,
    last_trained DATE
);