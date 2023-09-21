const { Pool } = require('pg');
// const dotenv = require('dotenv');
// dotenv.config();

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    // port: process.env.DB_PORT
};

const pool = new Pool(dbSettings);

async function executeSQL(sql, placeholders) {
    try {
        const client = await pool.connect();
        const result = await client.query(sql, placeholders);
        client.release();
        return result.rows;
    } catch (error) {
        throw error;
    }
}

module.exports = { executeSQL };
