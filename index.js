import express from 'express'
import mysql from 'mysql2/promise'
const app = express()

// creates an instance of server
const pool = mysql.createPool({
    user: 'root',
    host: 'localhost',
    database: 'modern_tech',
    password: 'Aviwe'
})

app.get('/', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employee_info');
        res.json(rows); // send all employees as JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Database connection failed' });
    }
});
r
app.listen(5000, () => {
    console.log('Server running on port 5000');
});


