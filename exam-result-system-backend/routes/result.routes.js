
const express = require("express");
const studentController = require("../controllers/student.controller");
const router = express.Router();


router.post("/resultsystem/api/results", studentController.getResultByEnrollment);

module.exports = router;
