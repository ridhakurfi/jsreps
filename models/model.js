const pool = require("../connection");
const Factory = require("./class");

class Model {
  static async getStudents() {
    try {
      let datas = await pool.query('select * from "students" ORDER BY id ASC');
      datas = Factory.createManyStudent(datas.rows);
      return datas;
    } catch (error) {
      throw error;
    }
  }
  static async addStudent(item) {
    try {
      const error = this.validationInput(item);
      if (error.length > 0) {
        return error;
      }
      let query = `insert into "students" ("name", "grade", "hobby")
            values ('${item.name}', '${item.grade}', '${item.hobby}')`;
      let result = await pool.query(query);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async showStudentById(studentId) {
    try {
      let data = await pool.query(`select
            "id",
            "name",
            "grade",
            "hobby"
            from "students"
            where "id" = ${studentId}`);
      data = Factory.createStudent(data.rows[0]);
      return data;
    } catch (error) {
      throw error;
    }
  }
  static async editStudent(identifier, content) {
    try {
      let data = `UPDATE "students" 
            SET "name" = '${content.name}',
            "grade" = '${content.grade}',
            "hobby" = '${content.hobby}'
            WHERE "id" = '${identifier}'`;
      let result = await pool.query(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async deleteById(identifier) {
    try {
      let data = `DELETE FROM "students"
            WHERE "id" = '${identifier}'`;
      let result = await pool.query(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
  static validationInput(toVal) {
    const { name, grade, hobby } = toVal;
    let err = [];

    if (!name) {
      err.push("Name is required.");
    }
    if (!grade) {
      err.push("Favorite subject is required.");
    }
    if (!hobby) {
      err.push("Hobby is required.");
    }

    return err;
  }
}

module.exports = Model;
