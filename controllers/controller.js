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
            let result = await Model.load()
            res.render('allStudents', {result})
        } catch (error) {
            console.log(error);
            res.send(error)
        }
    }
}

module.exports = Controller;
