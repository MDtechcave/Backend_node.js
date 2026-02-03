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
const getEmployee_info = async () => {
    // query from MySQL in javascript
    let [data] = await pool.query ('SELECT * FROM employee_info')
    return data
}
console.log (await getEmployee_info());

const getPayroll = async () => {
    // query from MySQL in javascript
    let [data] = await pool.query ('SELECT * FROM payroll')
    return data
}
console.log (await getPayroll());


app.listen(5000, () => {
    console.log('Server running on port 5000');
});


