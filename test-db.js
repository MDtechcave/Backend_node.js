import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Aviwe',
  database: 'modern_tech'
});

async function testConnection() {
  try {
    const [rows] = await pool.query('SELECT * FROM employee_info');
    console.log('DB connected! Employee data:');
    console.table(rows);
    process.exit();
  } catch (err) {
    console.error('DB connection failed:', err.message);
    process.exit(1);
  }
}

testConnection();
