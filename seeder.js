const fs = require("fs");
const pool = require("./connection");
const dataAuth = JSON.parse(fs.readFileSync("./data/students.json", "utf-8"))
  .map((el) => {
    const { name, grade, hobby } = el
    return `('${name}','${grade}','${hobby}')`;
  })
  .join(", \n");

const query = `insert into "students" ("name","grade","hobby")
  values ${dataAuth}`;

async function doQuery() {
  try {
    const data1 = await pool.query(query);
    if (data1) console.log(`seed students berhasil`);
  } catch (error) {
    console.log(error);
  }
}

doQuery();