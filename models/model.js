const pool = require("../connection");
const Factory = require("./class");

class Model {
  static async load() {
    try {
      let datas = await pool.query('select * from "students"');
      datas = Factory.createManyStudent(datas.rows);
      return datas;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Model;
