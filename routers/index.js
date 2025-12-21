const express = require("express");
const router = express.Router();
const Controller = require("../controllers/controller");

router.get("/", Controller.home);
router.get("/students", Controller.showAllStudents);
router.get("/students/add", Controller.addStudentForm);
router.post("/students/add", Controller.addStudent);
router.get("/students/:id/detail", Controller.detailStudent);
router.get("/students/:id/edit", Controller.editStudent);
router.post("/students/:id/edit", Controller.confirmEdit);
router.get("/students/:id/delete", Controller.deleteStudent);

module.exports = router;
