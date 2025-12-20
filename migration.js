const pool = require("./connection");
const dropQuery = `drop table if exists "students"`;

const query = `create table if not exists "students"(
    id serial primary key,
    "name" varchar(100) not null,
    "grade" varchar(100) not null,
    "hobby" varchar(100) not null
)`;

async function doQuery() {
  try {
    const data = await pool.query(dropQuery);
    if (data) console.log(`success drop table`);
    const data1 = await pool.query(query);
    if (data1) console.log(`success create table student`);
  } catch (error) {
    console.log(error);
  }
}

doQuery();
