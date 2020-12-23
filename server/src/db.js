const Pool = require('pg').Pool
//password for server is 1234!@#$
const pool = new Pool({
    user: "postgres",
    password: "hippomeat21",
    host: "localhost",
    port: 5432,
    database: "kaysen"
})

module.exports = pool;
