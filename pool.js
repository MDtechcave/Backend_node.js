import mysql from 'mysql2/promise'
const pool = mysql.createPool({
    user: 'root',
    host: 'localhost',
    database: 'mordern_tech',
    password: 'Dum@1388'
})

export {pool}
