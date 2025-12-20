const { Pool, Client } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "classroomDB",
  password: "postgres",
  port: 5432,
  idleTimeoutMillis: 200,
});

async function test() {
  try {
    const data = await pool.query("select now()");
    console.log(data);
  } catch (error) {
    console.log(`pool error`);
  }
}

// test();
module.exports = pool;