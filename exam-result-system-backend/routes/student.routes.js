
const express = require("express");
const studentController = require("../controllers/student.controller");
const validateStudentInfo = require("../middlewares/validateStudentReq");
const router = express.Router();

router.post('/resultsystem/api/students/add',validateStudentInfo.checkStudentInfoValidation,  studentController.createStudentInfo);
router.get('/resultsystem/api/students', studentController.getStudentDetails);
router.get('/resultsystem/api/students/:id', studentController.getStudentByID);
router.put('/resultsystem/api/students/:id', studentController.updateStudentByID);
router.delete('/resultsystem/api/students/:id', studentController.deleteStudentByID);

module.exports = router;