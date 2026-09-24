const { Pool } = require("pg");

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

const connectDatabase = async () => {
    try {
        const client = await pool.connect();

        console.log("PostgreSQL connected successfully");

        client.release();
    } catch (error) {
        console.error("PostgreSQL connection failed");
        console.error(error.message);

        throw error;
    }
};

module.exports = {
    pool,
    connectDatabase
};