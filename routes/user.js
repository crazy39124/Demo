const express = require('express')

const{login, signup} = require("../controllers/auth")
const{calorie} = require("../controllers/calorie")
const{medical} = require("../controllers/medical")
const{workout} = require("../controllers/workout")

const router = express.Router()

router.post("/signup", signup)
router.post("/login", login)
router.post("/submitCal", calorie)
router.post("/medical", medical)
router.post("/workout", workout)

module.exports = router