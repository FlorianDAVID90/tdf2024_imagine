const sqlite3 = require('sqlite3').verbose()
const pool = new sqlite3.Database('tdf2024imagine.db')

module.exports = pool;