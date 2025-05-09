import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();


const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

console.log('MySQL Connected');

const SECRET_KEY = process.env.JWT_SECRET;

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'No token provided' });
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ error: 'Invalid token' });
        req.user = decoded;
        next();
    });
};

// User Registration
app.post('/api/register', async (req, res) => {
    const { username, password, role, name, field, medical_history } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [userResult] = await db.execute(
            'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
            [username, hashedPassword, role]
        );
        const userId = userResult.insertId;

        if (role === 'Researcher') {
            await db.execute(
                'INSERT INTO researchers (user_id, name, field) VALUES (?, ?, ?)',
                [userId, name, field || 'Neurology']
            );
        } else if (role === 'Patient') {
            await db.execute(
                'INSERT INTO patients (user_id, name, medical_history) VALUES (?, ?, ?)',
                [userId, name, medical_history || '']
            );
        }

        res.status(201).json({ message: 'User registered' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// User Login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await db.execute('SELECT * FROM users WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const user = rows[0];
        // Check if password is hashed (new users) or plain text (sample users)
        let isValid;
        if (user.password.startsWith('$2b$')) {
            isValid = await bcrypt.compare(password, user.password);
        } else {
            isValid = password === user.password;
        }
        if (!isValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '1h' });
        res.json({ token, role: user.role, id: user.id });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

// Get Drugs
app.get('/api/drugs', verifyToken, async (req, res) => {
    try {
        const [rows] = await db.execute(
            'SELECT d.*, pc.name AS manufacturer FROM drugs d JOIN pharmaceutical_companies pc ON d.manufacturer_id = pc.id'
        );
        res.json(rows);
    } catch (error) {
        console.error('Error fetching drugs:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

// Add Drug
app.post('/api/drugs', verifyToken, async (req, res) => {
    const { name, manufacturer, dosage, status } = req.body;
    try {
        const [companyRows] = await db.execute(
            'SELECT id FROM pharmaceutical_companies WHERE name = ?',
            [manufacturer]
        );
        if (companyRows.length === 0) {
            return res.status(400).json({ error: 'Invalid manufacturer' });
        }
        const manufacturerId = companyRows[0].id;
        const [result] = await db.execute(
            'INSERT INTO drugs (name, manufacturer_id, dosage, status) VALUES (?, ?, ?, ?)',
            [name, manufacturerId, dosage, status]
        );
        res.status(201).json({ message: 'Drug added', id: result.insertId });
    } catch (error) {
        console.error('Error adding drug:', error);
        res.status(500).json({ error: 'Failed to add drug' });
    }
});

// Get Pharmaceutical Companies
app.get('/api/pharmaceutical-companies', verifyToken, async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM pharmaceutical_companies');
        res.json(rows);
    } catch (error) {
        console.error('Error fetching companies:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

// Get Clinical Trials
app.get('/api/clinical-trials', verifyToken, async (req, res) => {
    try {
        const [rows] = await db.execute(
            `SELECT ct.*, d.name AS drug_name, r.name AS researcher_name
             FROM clinical_trials ct
             JOIN drugs d ON ct.drug_id = d.id
             JOIN researchers r ON ct.researcher_id = r.id`
        );
        res.json(rows);
    } catch (error) {
        console.error('Error fetching clinical trials:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

// Add Clinical Trial
app.post('/api/clinical-trials', verifyToken, async (req, res) => {
    const { drug_id, researcher_id, title, phase, status, start_date, end_date } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO clinical_trials (drug_id, researcher_id, title, phase, status, start_date, end_date) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [drug_id, researcher_id, title, phase, status, start_date, end_date]
        );
        res.status(201).json({ message: 'Clinical trial added', id: result.insertId });
    } catch (error) {
        console.error('Error adding clinical trial:', error);
        res.status(500).json({ error: 'Failed to add clinical trial' });
    }
});

// Get Adverse Effects
app.get('/api/adverse-effects', verifyToken, async (req, res) => {
    try {
        const [rows] = await db.execute(
            `SELECT ae.*, d.name AS drug_name, p.name AS patient_name
             FROM adverse_effects ae
             JOIN drugs d ON ae.drug_id = d.id
             JOIN patients p ON ae.patient_id = p.id`
        );
        res.json(rows);
    } catch (error) {
        console.error('Error fetching adverse effects:', error);
        res.status(500).json({ error: 'Database error' });
    }
});

// Add Adverse Effect
app.post('/api/adverse-effects', verifyToken, async (req, res) => {
    const { drug_id, patient_id, description, severity } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO adverse_effects (drug_id, patient_id, description, severity) VALUES (?, ?, ?, ?)',
            [drug_id, patient_id, description, severity]
        );
        res.status(201).json({ message: 'Adverse effect reported', id: result.insertId });
    } catch (error) {
        console.error('Error adding adverse effect:', error);
        res.status(500).json({ error: 'Failed to report adverse effect' });
    }
});

// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
