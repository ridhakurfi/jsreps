const express = require("express")
const router = express.Router()
const Controller = require("../controllers/controller")

router.get('/', Controller.home)
router.get('/students', Controller.showAllStudents)

// router.get('/', (req, res) => {
//     res.send('Hello World')
// })

module.exports = router