const Model = require("../models/model");

class Controller {
  static async home(req, res) {
    try {
      res.render("home");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async showAllStudents(req, res) {
    try {
      let result = await Model.getStudents();
      res.render("allStudents", { result });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async addStudentForm(req, res) {
    try {
      res.render("formStudent", {
        errors: [],
      });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async addStudent(req, res) {
    try {
      const result = await Model.addStudent(req.body);
      if (Array.isArray(result)) {
        return res.render("formStudent", {
          errors: result,
        });
      }
      res.redirect("/students");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async detailStudent(req, res) {
    try {
      let result = await Model.showStudentById(req.params.id);
      res.render("studentDet", { result });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async editStudent(req, res) {
    try {
      let result = await Model.showStudentById(req.params.id);
      res.render("formEdit", { result });
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async confirmEdit(req, res) {
    try {
      await Model.editStudent(req.params.id, req.body);
      res.redirect("/students");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
  static async deleteStudent(req, res) {
    try {
      await Model.deleteById(req.params.id);
      res.redirect("/students");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  }
}

module.exports = Controller;
