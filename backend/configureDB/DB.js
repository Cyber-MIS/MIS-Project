const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const dbSettings = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE
};

const pool = new Pool(dbSettings);

const executeSQL = async (sql, placeholders) => {
        return new Promise((res,rej)=>{
            pool.connect(function(err, connection) {
                if (err) throw err; // not connected!
               
                // Use the connection
                connection.query(sql,placeholders, async (error, results, fields)=> {
        
                    // When done with the connection, release it.
                    connection.release();
                
                    // Handle error after the release.
                    if (error){
                        rej({error});
                    }
                    res(results);
                });
            });
        });
}

module.exports = { executeSQL };
